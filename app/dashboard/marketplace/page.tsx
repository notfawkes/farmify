"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Store,
  Plus,
  TrendingUp,
  MapPin,
  Calendar,
  Package,
  IndianRupee,
  Truck,
  Shield,
  Star,
  Eye,
  Edit,
} from "lucide-react"

export default function MarketplacePage() {
  const [listingDialogOpen, setListingDialogOpen] = useState(false)

  // Mock marketplace data
  const myListings = [
    {
      id: 1,
      crop: "Turmeric",
      variety: "Salem Turmeric",
      quantity: 10,
      unit: "Quintals",
      pricePerUnit: 7500,
      totalValue: 75000,
      status: "active",
      listedDate: "2024-12-20",
      organic: true,
      location: "Alangulam, Tirunelveli",
      views: 24,
      inquiries: 3,
    },
    {
      id: 2,
      crop: "Rice",
      variety: "Basmati",
      quantity: 5,
      unit: "Quintals",
      pricePerUnit: 4200,
      totalValue: 21000,
      status: "sold",
      listedDate: "2024-12-10",
      soldDate: "2024-12-18",
      organic: false,
      location: "Alangulam, Tirunelveli",
      views: 45,
      inquiries: 8,
    },
  ]

  const marketPrices = [
    { crop: "Turmeric", msp: 7000, market: 7500, trend: "up" },
    { crop: "Rice", msp: 4000, market: 4200, trend: "stable" },
    { crop: "Cotton", msp: 5500, market: 5800, trend: "up" },
    { crop: "Wheat", msp: 2200, market: 2350, trend: "down" },
  ]

  const buyerInquiries = [
    {
      id: 1,
      buyerName: "Reliance Fresh",
      crop: "Turmeric",
      quantity: 8,
      offeredPrice: 7200,
      message: "Interested in your organic turmeric. Can we negotiate on bulk pricing?",
      date: "2024-12-22",
      status: "pending",
    },
    {
      id: 2,
      buyerName: "Local Trader",
      crop: "Turmeric",
      quantity: 10,
      offeredPrice: 7500,
      message: "Ready to buy at listed price. When can we arrange pickup?",
      date: "2024-12-21",
      status: "pending",
    },
  ]

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating new listing")
    setListingDialogOpen(false)
    // TODO: Implement listing creation logic
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mandi Connect</h1>
            <p className="text-muted-foreground">Sell your harvest directly to buyers at your price</p>
          </div>
          <Dialog open={listingDialogOpen} onOpenChange={setListingDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Listing
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Listing</DialogTitle>
                <DialogDescription>List your harvest for sale in the marketplace</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateListing} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="crop">Crop</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="turmeric">Turmeric</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="wheat">Wheat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variety">Variety</Label>
                    <Input id="variety" placeholder="e.g., Salem Turmeric" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" type="number" placeholder="10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quintals">Quintals</SelectItem>
                        <SelectItem value="kg">Kilograms</SelectItem>
                        <SelectItem value="tons">Tons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price per Unit (₹)</Label>
                  <Input id="price" type="number" placeholder="7500" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="organic" className="rounded border-border" />
                  <Label htmlFor="organic" className="text-sm">
                    Organically certified
                  </Label>
                </div>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setListingDialogOpen(false)}
                    className="flex-1 bg-transparent"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1">
                    Create Listing
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Active Listings</div>
            </CardContent>
          </Card>

          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <IndianRupee className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">₹96,000</div>
              <div className="text-sm text-muted-foreground">Total Earnings</div>
            </CardContent>
          </Card>

          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">69</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </CardContent>
          </Card>

          <Card className="text-center p-4">
            <CardContent className="space-y-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">4.8</div>
              <div className="text-sm text-muted-foreground">Seller Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="listings" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="inquiries">Buyer Inquiries ({buyerInquiries.length})</TabsTrigger>
            <TabsTrigger value="prices">Market Prices</TabsTrigger>
          </TabsList>

          {/* My Listings */}
          <TabsContent value="listings" className="space-y-4">
            <div className="grid gap-4">
              {myListings.map((listing) => (
                <Card key={listing.id} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <Package className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">{listing.crop}</h3>
                            {listing.organic && (
                              <Badge className="bg-green-100 text-green-800">
                                <Shield className="w-3 h-3 mr-1" />
                                Organic
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-2">{listing.variety}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{listing.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Listed {new Date(listing.listedDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={listing.status === "active" ? "default" : "secondary"}
                        className={
                          listing.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }
                      >
                        {listing.status === "active" ? "Active" : "Sold"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Quantity</div>
                        <div className="font-medium">
                          {listing.quantity} {listing.unit}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Price per {listing.unit.slice(0, -1)}</div>
                        <div className="font-medium">₹{listing.pricePerUnit.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Total Value</div>
                        <div className="font-medium text-primary">₹{listing.totalValue.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Views / Inquiries</div>
                        <div className="font-medium">
                          {listing.views} / {listing.inquiries}
                        </div>
                      </div>
                    </div>

                    {listing.status === "active" && (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Listing
                        </Button>
                        <Button size="sm">
                          <Truck className="w-4 h-4 mr-2" />
                          Arrange Pickup
                        </Button>
                      </div>
                    )}

                    {listing.status === "sold" && listing.soldDate && (
                      <div className="text-sm text-green-600">
                        Sold on {new Date(listing.soldDate).toLocaleDateString()}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Buyer Inquiries */}
          <TabsContent value="inquiries" className="space-y-4">
            <div className="grid gap-4">
              {buyerInquiries.map((inquiry) => (
                <Card key={inquiry.id} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{inquiry.buyerName}</h3>
                          <Badge variant="outline">Verified Buyer</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Interested in: {inquiry.crop} ({inquiry.quantity} Quintals)
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Offered Price: ₹{inquiry.offeredPrice.toLocaleString()} per Quintal
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">Pending</Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {new Date(inquiry.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-3 mb-4">
                      <p className="text-sm text-foreground">{inquiry.message}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm">Accept Offer</Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Counter Offer
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Message Buyer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Market Prices */}
          <TabsContent value="prices" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Current Market Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketPrices.map((price, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Package className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{price.crop}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>MSP: ₹{price.msp}</span>
                            <span>•</span>
                            <span>Market: ₹{price.market}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp
                          className={`w-4 h-4 ${
                            price.trend === "up"
                              ? "text-green-500"
                              : price.trend === "down"
                                ? "text-red-500"
                                : "text-gray-500"
                          }`}
                        />
                        <Badge
                          variant="outline"
                          className={
                            price.trend === "up"
                              ? "border-green-500 text-green-700"
                              : price.trend === "down"
                                ? "border-red-500 text-red-700"
                                : "border-gray-500 text-gray-700"
                          }
                        >
                          {price.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
