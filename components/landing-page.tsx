"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link  from "next/link"
import {
  Leaf,
  Star,
  Camera,
  Trophy,
  Shield,
  Key,
  Users,
  CreditCard,
  Upload,
  Store,
  TrendingUp,
  Award,
  Menu,
  X,
} from "lucide-react"

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Leaf className="w-8 h-8 text-primary" />
                <Star className="w-4 h-4 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold text-primary font-sans">Farmify</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                How it Works
              </a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
                Benefits
              </a>
              <a href="#partners" className="text-foreground hover:text-primary transition-colors">
                For Partners
              </a>
              <select className="bg-transparent border border-border rounded-md px-2 py-1 text-sm">
                <option>EN</option>
                <option>हिंदी</option>
                <option>தமிழ்</option>
              </select>
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <nav className="flex flex-col space-y-4">
                <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                  How it Works
                </a>
                <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
                  Benefits
                </a>
                <a href="#partners" className="text-foreground hover:text-primary transition-colors">
                  For Partners
                </a>
                <Button variant="outline" size="sm" className="w-fit bg-transparent" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-emerald-100">
          <div className="absolute inset-0 bg-black/20" />
          <img
            src="/lush-green-farm-fields-in-kerala-india-with-drone-.jpg"
            alt="Lush farm fields"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">Kheti Bhi, Khel Bhi.</h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
              Turn your sustainable farming practices into rewards. Join thousands of farmers across India building a
              profitable and eco-friendly future.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              asChild
            >
              <Link href="/register">Become a Farmify Yodha Today →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Your Journey to a Greener Farm</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Accept Missions</h3>
                <p className="text-muted-foreground text-sm">
                  Choose from a list of sustainable tasks like using organic manure, setting up drip irrigation, or crop
                  rotation.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Camera className="w-8 h-8 text-primary" />
                  <Upload className="w-4 h-4 text-primary absolute translate-x-2 -translate-y-2" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Upload Proof</h3>
                <p className="text-muted-foreground text-sm">
                  Complete the task on your farm and upload a quick photo or video through the app for validation.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Earn Rewards</h3>
                <p className="text-muted-foreground text-sm">
                  Gain points for every successful mission. Increase your Sustainability Score to unlock exclusive
                  benefits.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Sell with Freedom</h3>
                <p className="text-muted-foreground text-sm">
                  Sell your harvest directly to businesses at your price, or to the government at MSP, all from one
                  place.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">More Than Just Points</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                  <TrendingUp className="w-4 h-4 text-primary absolute translate-x-1 -translate-y-1" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Sustainability Credit Score</h3>
                <p className="text-muted-foreground text-sm">
                  Build a credible score that proves your commitment to quality and sustainability.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Key className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Unlock Exclusive Benefits</h3>
                <p className="text-muted-foreground text-sm">
                  A high score gets you priority access to better loans, lower insurance premiums, and free bio-inputs
                  from our partners.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Community & Recognition</h3>
                <p className="text-muted-foreground text-sm">
                  Compete with farmers in your Panchayat. Earn badges and climb the leaderboard to become a local
                  champion.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">The Farmify Smart Card</h3>
                <p className="text-muted-foreground text-sm">
                  Your digital identity on the blockchain. A secure, tamper-proof record of your entire farming journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl lg:text-2xl text-foreground mb-8 text-balance">
              "With Farmify, my farm in Nashik is healthier than ever. The missions are practical, and getting a loan
              was easier because of my high Sustainability Score. This is the future."
            </blockquote>
            <cite className="text-muted-foreground">— A Farmer from Nashik, Maharashtra</cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Leaf className="w-6 h-6 text-primary" />
                  <Star className="w-3 h-3 text-accent absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold text-primary">Farmify</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering farmers through sustainable practices and technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Farmify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
