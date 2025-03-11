"use client";
import React, { useEffect, useState } from "react";

interface StatsData {
  totalRequests: number;
}

export default function TotalRequestsCard() {
  const [totalRequests, setTotalRequests] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/stats");
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data: StatsData = await res.json();
        setTotalRequests(data.totalRequests);
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
        <p className="text-sm font-medium font-outfit text-white mb-2">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border-zinc-800 p-6 rounded-md">
      <h2 className="text-sm font-medium font-outfit text-white mb-2">Total Requests</h2>
      <div className="text-2xl font-bold font-outfit text-white">{totalRequests}</div>
      <p className="text-xs text-zinc-400 font-outfit">All-time total requests</p>
    </div>
  );
}
