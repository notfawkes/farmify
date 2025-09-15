"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Star,
  QrCode,
  Shield,
  Download,
  Share2,
  Copy,
  ExternalLink,
  MapPin,
  TrendingUp,
  Award,
  Sprout,
} from "lucide-react"

export default function SmartCardPage() {
  const [copied, setCopied] = useState(false)

  // Mock data for Bala's Smart Card
  const smartCardData = {
    name: "Bala Sudalaimuthu",
    location: "Alangulam, Tirunelveli",
    sustainabilityScore: 820,
    uniqueId: "FMID-TN-845B2",
    blockchainHash: "0x71B...aE42",
    qrCode: "farmify://verify/FMID-TN-845B2",
    photo: "/indian-farmer-portrait.png",
  }

  const cropHistory = [
    {
      season: "Kharif 2025",
      crop: "Turmeric",
      quantity: "10 Quintals",
      practices: ["Organic Manure", "Drip Irrigation"],
      txHash: "0x7a8b9c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0",
    },
    {
      season: "Rabi 2024",
      crop: "Cotton",
      quantity: "8 Quintals",
      practices: ["Natural Pesticides", "Crop Rotation"],
      txHash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4",
    },
    {
      season: "Kharif 2024",
      crop: "Rice",
      quantity: "12 Quintals",
      practices: ["SRI Method", "Organic Fertilizer"],
      txHash: "0x9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a3z2y1x0w9v8u7t6",
    },
  ]

  const benefitsHistory = [
    {
      date: "Sep 10, 2025",
      benefit: "15% Insurance Discount",
      provider: "AgriSecure Ltd.",
      status: "Active",
    },
    {
      date: "Aug 22, 2025",
      benefit: "+250 Points",
      provider: "Mission: Compost Pit Creation",
      status: "Completed",
    },
    {
      date: "May 05, 2025",
      benefit: "Sold Cotton (8 Quintals)",
      provider: "Reliance Fresh on Mandi Connect",
      status: "Completed",
    },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Smart Card</h1>
            <p className="text-muted-foreground">Your blockchain-verified digital farming identity</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Digital Smart Card */}
        <Card className="bg-gradient-to-br from-green-800 to-green-900 text-white border-0 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-8">
              {/* Farmify Logo */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Leaf className="w-8 h-8 text-white" />
                  <Star className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold">Farmify</span>
              </div>

              {/* Blockchain Badge */}
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Blockchain Verified</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Photo and Basic Info */}
              <div className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={smartCardData.photo || "/placeholder.svg"}
                    alt="Farmer Photo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-xl font-bold mb-1">{smartCardData.name}</h2>
                <div className="flex items-center justify-center space-x-1 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{smartCardData.location}</span>
                </div>
              </div>

              {/* Sustainability Score */}
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{smartCardData.sustainabilityScore}</div>
                <div className="text-white/80 text-sm mb-4">Sustainability Score</div>
                <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400/90">Excellent Status</Badge>
              </div>

              {/* QR Code and IDs */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-green-800" />
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-white/60">Unique ID:</span>
                    <div className="font-mono text-yellow-400">{smartCardData.uniqueId}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Blockchain Hash:</span>
                    <div className="font-mono text-xs text-white/80 break-all">{smartCardData.blockchainHash}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Pattern */}
            <div className="mt-8 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Issued: January 2024</span>
                <span>Valid: Lifetime</span>
                <span>Version: 2.0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verifiable Records Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <span>Verifiable Records - "A History You Can Trust"</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="crops" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="crops">Crop History</TabsTrigger>
                <TabsTrigger value="score">Score History</TabsTrigger>
                <TabsTrigger value="benefits">Benefits & Transactions</TabsTrigger>
              </TabsList>

              <TabsContent value="crops" className="space-y-4">
                <div className="space-y-4">
                  {cropHistory.map((record, index) => (
                    <Card key={index} className="border border-border">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground flex items-center space-x-2">
                              <Sprout className="w-4 h-4 text-green-600" />
                              <span>
                                {record.season} | {record.crop}
                              </span>
                            </h4>
                            <p className="text-sm text-muted-foreground">{record.quantity}</p>
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Verified
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {record.practices.map((practice, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {practice}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span>Tx Hash:</span>
                            <code className="bg-muted px-2 py-1 rounded font-mono">
                              {record.txHash.slice(0, 10)}...{record.txHash.slice(-8)}
                            </code>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(record.txHash)}
                            className="text-xs"
                          >
                            {copied ? "Copied!" : <Copy className="w-3 h-3" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="score" className="space-y-4">
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Sustainability Score Progress</h4>
                        <p className="text-sm text-muted-foreground">Last 12 months journey</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">January 2024</span>
                        <span className="font-medium">650 points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">June 2024</span>
                        <span className="font-medium">720 points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">December 2024</span>
                        <span className="font-medium text-primary">820 points</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          +170 points improvement in 12 months!
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-4">
                <div className="space-y-4">
                  {benefitsHistory.map((record, index) => (
                    <Card key={index} className="border border-border">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{record.benefit}</h4>
                            <p className="text-sm text-muted-foreground">{record.provider}</p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={record.status === "Active" ? "default" : "secondary"}
                              className={
                                record.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                              }
                            >
                              {record.status}
                            </Badge>
                            <div className="text-xs text-muted-foreground mt-1">{record.date}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Verification Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Verification & Sharing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <QrCode className="w-4 h-4" />
                <span>Generate QR Code</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
                <span>Verify on Blockchain</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Download className="w-4 h-4" />
                <span>Export Certificate</span>
              </Button>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Public Verification Link</h4>
              <div className="flex items-center space-x-2">
                <code className="flex-1 bg-background px-3 py-2 rounded border text-sm">
                  https://farmify.app/verify/{smartCardData.uniqueId}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(`https://farmify.app/verify/${smartCardData.uniqueId}`)}
                >
                  {copied ? "Copied!" : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
