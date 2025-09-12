"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Play,
  Clock,
  UserX,
  MessageSquareX,
  Users,
  FileText,
  FolderOpen,
  Check,
  Calculator,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Props = {};

const LandingPage = (props: Props) => {
  const navigate = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white fixed top-0 w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-700">Dorwel</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
            </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => navigate.push("/login")}
                variant="ghost"
                className="text-gray-600"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate.push("/signup")}
                variant="ghost"
                className="text-blue-700"
              >
                Sign Up
              </Button>
              <Avatar className="w-8 h-8 bg-green-500">
                <AvatarFallback className="bg-green-500 text-white text-sm">
                  D
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                India's #1 SaaS for Interior Designers & Firms
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Manage leads, send proposals, track projects & grow your design
                business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg">
                  Start Free Trial →
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 text-lg bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>

              <p className="text-sm text-gray-500 flex items-center">
                <span className="mr-2">💳</span>
                No credit card needed. Cancel anytime.
              </p>
            </div>

            {/* Right content - Dashboard mockup */}
            <div className="relative h-full">
              <Image
                src="/heroStats.png"
                alt="Dashboard mockup"
                className="object-cover rounded-lg w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Interior Designers Are Drowning in Admin Chaos...
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <Card className="p-8 bg-stone-100  text-center border-0 ">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Proposal Delays
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Spending hours creating proposals manually, causing clients to
                  lose interest and choose competitors.
                </p>
              </CardContent>
            </Card>

            {/* Problem 2 */}
            <Card className="p-8 text-center border-0 bg-stone-100">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <UserX className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Missed Follow-ups
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Forgetting to follow up with potential clients due to
                  disorganized lead management systems.
                </p>
              </CardContent>
            </Card>

            {/* Problem 3 */}
            <Card className="p-8 text-center border-0 bg-stone-100">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquareX className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Client Miscommunication
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Scattered communication across emails, WhatsApp and calls
                  leading to misunderstandings and project delays.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-10 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-8">
            Dorwel = One Suite to Design, Deal & Deliver
          </h2>

          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
            <Play className="w-5 h-5 mr-2" />
            Watch How It Works
          </Button>
        </div>
      </section>
      {/* Feature Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run Your Design Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete suite of tools designed specifically for interior
              designers and firms in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* CRM & Lead Capture */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    CRM & Lead Capture
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Centralize all your leads and client information in one
                    place. Never miss a follow-up again.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Lead scoring & prioritization
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Automated follow-up reminders
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Client communication history
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Project Tracker */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FolderOpen className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Project Tracker
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Manage all your projects with real-time status updates, task
                    assignments, and timeline tracking.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Visual project timelines
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Task delegation & tracking
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Client milestone approvals
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Proposal Builder */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Proposal Builder
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Create beautiful, professional proposals in minutes with
                    customizable templates.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Ready-to-use design templates
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Digital client approvals
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Automated follow-ups
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Integration */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    WhatsApp Integration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Connect your WhatsApp Business account to send automated
                    updates and reminders.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Centralized client messaging
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Automated appointment reminders
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Template message library
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Estimation + Billing */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Estimation + Billing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Create accurate cost estimates and professional invoices
                    with just a few clicks.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Material & labor cost calculator
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      GST-compliant invoicing
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Payment tracking & reminders
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Moodboard Generator */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Moodboard Generator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Create stunning moodboards with AI assistance to visualize
                    concepts for clients.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      AI-powered design suggestions
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Client collaboration tools
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Direct material sourcing links
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              See Dashboard in Action →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
