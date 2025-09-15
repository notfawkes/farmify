"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Trophy,
  Calendar,
  Clock,
  Leaf,
  Droplets,
  Sprout,
  Shield,
  Upload,
  Camera,
  CheckCircle,
  Target,
} from "lucide-react"

export default function MissionsPage() {
  const [selectedMission, setSelectedMission] = useState<any>(null)
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)

  // Mock missions data
  const activeMissions = [
    {
      id: 1,
      title: "Organic Pesticide Application",
      description: "Apply neem-based organic pesticide to protect crops from pests naturally",
      category: "Pest Management",
      difficulty: "Easy",
      reward: 250,
      timeLeft: 3,
      status: "active",
      icon: Shield,
      requirements: ["Use certified organic pesticide", "Document application process", "Cover minimum 1 acre"],
    },
    {
      id: 2,
      title: "Drip Irrigation Setup",
      description: "Install or upgrade drip irrigation system to conserve water",
      category: "Water Conservation",
      difficulty: "Medium",
      reward: 500,
      timeLeft: 7,
      status: "active",
      icon: Droplets,
      requirements: ["Install drip irrigation", "Show water usage reduction", "Cover minimum 0.5 acres"],
    },
  ]

  const availableMissions = [
    {
      id: 3,
      title: "Intercropping with Legumes",
      description: "Plant legumes between main crop rows to improve soil nitrogen",
      category: "Soil Health",
      difficulty: "Medium",
      reward: 400,
      duration: "30 days",
      status: "available",
      icon: Sprout,
      requirements: ["Plant legumes in 20% of field", "Document growth progress", "Soil test before/after"],
    },
    {
      id: 4,
      title: "Compost Pit Creation",
      description: "Build and maintain a compost pit for organic waste management",
      category: "Waste Management",
      difficulty: "Easy",
      reward: 300,
      duration: "45 days",
      status: "available",
      icon: Leaf,
      requirements: ["Build 6x4 feet compost pit", "Add organic waste regularly", "Document decomposition"],
    },
    {
      id: 5,
      title: "Crop Rotation Implementation",
      description: "Implement 3-crop rotation system to improve soil health",
      category: "Soil Health",
      difficulty: "Hard",
      reward: 750,
      duration: "90 days",
      status: "available",
      icon: Target,
      requirements: ["Plan 3-season rotation", "Document crop selection", "Show yield improvement"],
    },
  ]

  const completedMissions = [
    {
      id: 6,
      title: "Organic Manure Application",
      description: "Applied cow dung manure to improve soil fertility",
      category: "Soil Health",
      reward: 200,
      completedDate: "2024-12-15",
      status: "completed",
      icon: Leaf,
      points: 200,
    },
    {
      id: 7,
      title: "Water Harvesting Setup",
      description: "Built rainwater harvesting system for irrigation",
      category: "Water Conservation",
      reward: 600,
      completedDate: "2024-11-28",
      status: "completed",
      icon: Droplets,
      points: 600,
    },
  ]

  const handleAcceptMission = (mission: any) => {
    console.log("Accepting mission:", mission.title)
    // TODO: Implement mission acceptance logic
  }

  const handleUploadProof = (mission: any) => {
    setSelectedMission(mission)
    setUploadDialogOpen(true)
  }

  const handleSubmitProof = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting proof for mission:", selectedMission?.title)
    setUploadDialogOpen(false)
    // TODO: Implement proof submission logic
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Missions</h1>
            <p className="text-muted-foreground">Complete sustainable farming tasks to earn rewards</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">2,850</div>
              <div className="text-sm text-muted-foreground">Points Earned</div>
            </div>
          </div>
        </div>

        {/* Mission Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active Missions ({activeMissions.length})</TabsTrigger>
            <TabsTrigger value="available">Available ({availableMissions.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedMissions.length})</TabsTrigger>
          </TabsList>

          {/* Active Missions */}
          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-4">
              {activeMissions.map((mission) => (
                <Card key={mission.id} className="border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <mission.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">{mission.title}</h3>
                          <p className="text-muted-foreground mb-3">{mission.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{mission.category}</Badge>
                            <Badge variant="outline">{mission.difficulty}</Badge>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Reward: {mission.reward} Points</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-500">Time Left: {mission.timeLeft} Days</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Started 2 days ago</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {mission.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button onClick={() => handleUploadProof(mission)} className="w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Proof
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Available Missions */}
          <TabsContent value="available" className="space-y-4">
            <div className="grid gap-4">
              {availableMissions.map((mission) => (
                <Card key={mission.id} className="border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center">
                          <mission.icon className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">{mission.title}</h3>
                          <p className="text-muted-foreground mb-3">{mission.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{mission.category}</Badge>
                            <Badge variant="outline">{mission.difficulty}</Badge>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">Available</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Reward: {mission.reward} Points</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Duration: {mission.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {mission.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-4 h-4 border border-muted-foreground rounded-full" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => handleAcceptMission(mission)}
                      variant="outline"
                      className="w-full bg-transparent"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      Accept Mission
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Completed Missions */}
          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4">
              {completedMissions.map((mission) => (
                <Card key={mission.id} className="border border-border bg-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <mission.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">{mission.title}</h3>
                          <p className="text-muted-foreground mb-3">{mission.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Trophy className="w-4 h-4 text-accent" />
                              <span className="text-sm text-muted-foreground">Earned: {mission.points} Points</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                Completed: {new Date(mission.completedDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Upload Proof Dialog */}
        <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Mission Proof</DialogTitle>
              <DialogDescription>
                Upload photos or videos showing completion of: {selectedMission?.title}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitProof} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="photos">Photos/Videos</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <Input id="photos" type="file" multiple accept="image/*,video/*" className="hidden" />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("photos")?.click()}
                  >
                    Choose Files
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you've accomplished and any challenges faced..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input id="location" placeholder="Field location or GPS coordinates" />
              </div>
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setUploadDialogOpen(false)}
                  className="flex-1 bg-transparent"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Proof
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}
