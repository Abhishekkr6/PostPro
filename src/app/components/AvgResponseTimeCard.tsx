"use client";
import React, { useEffect, useState } from "react";

interface StatsData {
  avgResponseTime: string;
}

export default function AvgResponseTimeCard() {
  const [avgResponseTime, setAvgResponseTime] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/stats");
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data: StatsData = await res.json();
        setAvgResponseTime(data.avgResponseTime);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="bg-zinc-900 border-zinc-800 p-6 rounded-md">
        <p className="text-sm font-medium font-outfit text-white mb-2">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border-zinc-800 p-6 rounded-md">
      <h2 className="text-sm font-medium font-outfit text-white mb-2">
        Average Response Time
      </h2>
      <div className="text-2xl font-bold font-outfit text-white">
        {avgResponseTime} ms
      </div>
      <p className="text-xs text-zinc-400 font-outfit">
        Average time to process requests
      </p>
    </div>
  );
}
