// lib/mock-data.ts

export type Farmer = {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  state: string;      // New property
  panchayat: string;  // New property
};

// We'll create a mock "current user" to filter against
export const currentUserLocation = {
  state: "Tamil Nadu",
  panchayat: "Alangulam",
};

export const leaderboardData: Farmer[] = [
  { rank: 1, name: "Bala Sudalaimuthu", avatar: "/avatars/01.png", points: 2850, state: "Tamil Nadu", panchayat: "Alangulam" },
  { rank: 2, name: "Saanvi Patel", avatar: "/avatars/02.png", points: 2710, state: "Gujarat", panchayat: "Anand" },
  { rank: 3, name: "Arjun Reddy", avatar: "/avatars/03.png", points: 2650, state: "Tamil Nadu", panchayat: "Alangulam" },
  { rank: 4, name: "Diya Sharma", avatar: "/avatars/04.png", points: 2400, state: "Tamil Nadu", panchayat: "kuruvankottai" },
  { rank: 5, name: "Rohan Das", avatar: "/avatars/05.png", points: 2350, state: "Gujarat", panchayat: "Anand" },
  { rank: 6, name: "Priya Singh", avatar: "/avatars/06.png", points: 2200, state: "Tamil Nadu", panchayat: "Alangulam" },
  { rank: 7, name: "Vikram Chauhan", avatar: "/avatars/07.png", points: 2150, state: "Gujarat", panchayat: "Nadiad" },
  { rank: 8, name: "Anika Gupta", avatar: "/avatars/08.png", points: 2080, state: "Tamil Nadu", panchayat: "kuruvankottai" },
  { rank: 9, name: "Kabir Mehta", avatar: "/avatars/09.png", points: 1990, state: "Gujarat", panchayat: "Nadiad" },
  { rank: 10, name: "Isha Verma", avatar: "/avatars/10.png", points: 1950, state: "Tamil Nadu", panchayat: "Alangulam" },
];