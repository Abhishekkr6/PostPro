"use client";
import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";

interface Activity {
  _id: string;
  method: string;
  url: string;
  statusCode: number;
  responseTime: number;
  description: string;
  createdAt: string;
}

export default function ActivityList() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch("/api/activity");
        if (!res.ok) throw new Error("Failed to fetch activity");
        const data = await res.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="space-y-4 overflow-y-auto max-h-[500px]">
      {activities.map((activity) => (
        <ActivityCard key={activity._id} {...activity} />
      ))}
    </div>
  );
}
