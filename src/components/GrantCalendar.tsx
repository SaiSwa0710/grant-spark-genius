import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface GrantEvent {
  id: string;
  title: string;
  date: Date;
  type: "deadline" | "submission" | "review" | "notification";
  status: "upcoming" | "due-today" | "overdue";
}

const mockEvents: GrantEvent[] = [
  {
    id: "1",
    title: "Community Health Grant Application Due",
    date: new Date(2025, 6, 15), // July 15, 2025
    type: "deadline",
    status: "upcoming"
  },
  {
    id: "2", 
    title: "Education Foundation Review Period",
    date: new Date(2025, 6, 20), // July 20, 2025
    type: "review",
    status: "upcoming"
  },
  {
    id: "3",
    title: "Youth Development Grant Notification",
    date: new Date(2025, 6, 25), // July 25, 2025
    type: "notification", 
    status: "upcoming"
  }
];

export function GrantCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const { t } = useLanguage();

  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "due-today":
        return "bg-orange-100 text-orange-800";
      case "overdue": 
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "deadline":
        return "Deadline";
      case "submission":
        return "Submission";
      case "review":
        return "Review";
      case "notification":
        return "Notification";
      default:
        return type;
    }
  };

  const hasEvents = (date: Date) => {
    return mockEvents.some(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {t("grantCalendar")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              modifiers={{
                hasEvents: (date) => hasEvents(date)
              }}
              modifiersStyles={{
                hasEvents: {
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                  fontWeight: "600"
                }
              }}
            />
          </div>
          
          <div className="flex-1 space-y-3">
            <h3 className="font-medium text-gray-900">
              {selectedDate ? selectedDate.toLocaleDateString() : "Select a date"}
            </h3>
            
            {selectedEvents.length > 0 ? (
              <div className="space-y-2">
                {selectedEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm text-gray-900">
                        {event.title}
                      </h4>
                      <Badge className={getStatusColor(event.status)}>
                        {getTypeLabel(event.type)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No events scheduled for this date
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}