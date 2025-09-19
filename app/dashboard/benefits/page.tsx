"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Gift, Banknote, Leaf, BadgeCheck } from "lucide-react"

export default function BenefitsHubPage() {
  const benefits = [
    {
      id: 1,
      title: "Secured a loan with low interest",
      time: "5 months ago",
      icon: Banknote,
      category: "Finance",
    },
    {
      id: 2,
      title: "Availed 50% off on organic pesticides",
      time: "1 week ago",
      icon: Leaf,
      category: "Crop Care",
    },
    {
      id: 3,
      title: "Received free crop insurance",
      time: "2 months ago",
      icon: BadgeCheck,
      category: "Insurance",
    },
    {
      id: 4,
      title: "Got subsidy for irrigation system",
      time: "3 weeks ago",
      icon: Gift,
      category: "Water Conservation",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Benefits Hub</h1>
            <p className="text-muted-foreground">All benefits you have claimed so far</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="border border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.time}</p>
                  </div>
                </div>
                <Badge variant="secondary">{benefit.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
