"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  Cloud,
  Calendar,
  TrendingUp,
  Trophy,
  Users,
  Upload,
  Eye,
  Award,
  Leaf,
  Droplets,
  Shield,
  CreditCard,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for Bala Sudalaimuthu
  const farmerData = {
    name: "Bala Sudalaimuthu",
    location: "Alangulam, Tirunelveli",
    weather: { temp: 29, condition: "Partly Cloudy" },
    sustainabilityScore: 820,
    points: 15670,
    rank: 2,
    nextMissionDeadline: 3,
  }

  const activeMissions = [
    {
      id: 1,
      title: "Organic Pesticide Application",
      reward: 250,
      timeLeft: 3,
      status: "active",
    },
    {
      id: 2,
      title: "Intercropping with Legumes",
      reward: 400,
      timeLeft: null,
      status: "available",
    },
  ]

  const unlockedBenefits = [
    { name: "Free Bio-Fertilizer", status: "1 Bag Claimed", icon: Leaf },
    { name: "Agri-Loan", status: "Priority Processing Unlocked", icon: CreditCard },
    { name: "Kisaan Insurance", status: "15% Discount", icon: Shield },
  ]

  const recentBadges = [
    { name: "Jal Rakshak", icon: Droplets, color: "text-blue-500" },
    { name: "Dharti Mitra", icon: Leaf, color: "text-green-500" },
    { name: "Mission Pro", icon: Trophy, color: "text-yellow-500" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Welcome Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Welcome back, Yodha!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{farmerData.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Cloud className="w-4 h-4" />
                <span className="text-sm">
                  {farmerData.weather.temp}°C, {farmerData.weather.condition}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Next Mission Deadline: {farmerData.nextMissionDeadline} Days</span>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability Score */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-foreground">Sustainability Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">{farmerData.sustainabilityScore}</div>
                <div className="text-sm text-muted-foreground">/ 1000</div>
                <Progress value={82} className="h-2" />
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Excellent Status
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Points & Rank */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-foreground">Points & Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-accent">{farmerData.points.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Farmify Points</div>
                <div className="flex items-center justify-center space-x-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Panchayat Rank: #{farmerData.rank}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Active Missions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">My Active Missions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeMissions.map((mission) => (
                <div key={mission.id} className="border border-border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-foreground">{mission.title}</h4>
                    <Badge variant={mission.status === "active" ? "default" : "secondary"}>
                      {mission.status === "active" ? "Active" : "Available"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Reward: {mission.reward} Points</span>
                    </div>
                    {mission.timeLeft && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-500">Time Left: {mission.timeLeft} Days</span>
                      </div>
                    )}
                  </div>
                  <Button size="sm" variant={mission.status === "active" ? "default" : "outline"} className="w-full">
                    {mission.status === "active" ? (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Proof
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        View & Accept
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Mandi Connect */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Mandi Connect (Marketplace)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-foreground">Turmeric</h4>
                    <p className="text-sm text-muted-foreground">Organically Certified, 10 Quintals</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Organic
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-between bg-transparent">
                    <span>Sell at MSP</span>
                    <span className="font-medium">₹7,000/Q</span>
                  </Button>
                  <Button size="sm" className="w-full justify-between">
                    <span>List on Open Market</span>
                    <span className="font-medium">Set Your Rate ₹7,500/Q</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress & Rewards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Unlocked Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">My Unlocked Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {unlockedBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{benefit.name}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.status}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Badges Earned */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Recent Badges Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {recentBadges.map((badge, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto">
                      <badge.icon className={`w-8 h-8 ${badge.color}`} />
                    </div>
                    <h4 className="font-medium text-sm text-foreground">{badge.name}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-sm text-muted-foreground">Missions Completed</div>
            </CardContent>
          </Card>

          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">+15%</div>
              <div className="text-sm text-muted-foreground">Yield Improvement</div>
            </CardContent>
          </Card>

          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">8.5</div>
              <div className="text-sm text-muted-foreground">Acres Sustainable</div>
            </CardContent>
          </Card>

          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="text-sm text-muted-foreground">Community Rank</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
