// components/ui/leaderboard-table.tsx

"use client"; // This component might have interactions later

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Gift } from "lucide-react";
import { type Farmer } from "@/lib/mock-data";

// Helper component for rank display
const RankDisplay = ({ rank }: { rank: number }) => {
  if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
  if (rank === 2) return <Trophy className="h-6 w-6 text-gray-400" />;
  if (rank === 3) return <Trophy className="h-6 w-6 text-yellow-700" />;
  return <span className="font-medium text-lg">{rank}</span>;
};

export function LeaderboardTable({ data }: { data: Farmer[] }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20 text-center">Rank</TableHead>
            <TableHead>Farmer</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Farmify Points</TableHead>
            <TableHead className="w-24 text-center">Rewards</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((farmer) => (
            <TableRow key={farmer.rank} className={farmer.rank <= 3 ? "bg-muted/50" : ""}>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <RankDisplay rank={farmer.rank} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={farmer.avatar} alt={farmer.name} />
                    <AvatarFallback>{farmer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{farmer.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-muted-foreground">
                  {farmer.panchayat}, {farmer.state}
                </div>
              </TableCell>
              <TableCell className="text-right font-semibold">
                {farmer.points.toLocaleString()}
              </TableCell>
              <TableCell className="text-center">
                {farmer.rank <= 3 && (
                  <div className="flex justify-center">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}