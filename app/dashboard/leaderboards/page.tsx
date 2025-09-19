// FILE: app/dashboard/leaderboards/page.tsx
"use client"
import { useState } from "react";
import { currentUserLocation, leaderboardData } from "@/lib/mock-data";
import { LeaderboardTable } from "@/components/ui/leaderboard-table";
import { DashboardLayout } from "@/components/dashboard-layout"; 
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LeaderboardPage() {

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = leaderboardData.filter((farmer) => {
    if (activeFilter === "state") {
      return farmer.state === currentUserLocation.state;
    }
    if (activeFilter === "panchayat") {
      return farmer.panchayat === currentUserLocation.panchayat;
    }
    // If filter is 'all', return everyone
    return true;
  });

  return (
    // 2. Wrap everything in the DashboardLayout component
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
        </div>

        <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
          <TabsList>
            <TabsTrigger value="all">All-Time</TabsTrigger>
            <TabsTrigger value="state">My State</TabsTrigger>
            <TabsTrigger value="panchayat">My Panchayat</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <p className="text-muted-foreground">
          See who is leading the way in sustainable farming practices.
        </p>

        <LeaderboardTable data={filteredData} />
      </div>
    </DashboardLayout>
  );
}