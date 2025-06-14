import type { Metadata } from "next";
import { Shield, FileText, Lock, AlertCircle, Scale, UserCheck, Database, RefreshCw, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Translag",
  description: "Terms of Service for Translag - Real-time translation between English and Nigerian languages",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <Link href="/">
          <Image src="/logo.png" alt="Translag Logo" width={150} height={150} className="hover:opacity-80 transition-opacity" />
        </Link>
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Terms of Service</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="space-y-12 text-gray-700">
        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          </div>
          <p className="leading-relaxed">By accessing and using Translag, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you don&apos;t agree with any of these terms, you are prohibited from using or accessing this application.</p>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-green-600" />
            <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          </div>
          <p className="leading-relaxed mb-4">Translag is a mobile application that provides real-time translation services between English and major Nigerian languages (Yoruba, Igbo, and Hausa). The service includes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
              Text translation powered by Spitch&apos;s AI technology
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
              Speech-to-text conversion with authentic African voices
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
              Text-to-speech functionality using Spitch&apos;s voice synthesis
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
              Translation history storage
            </li>
          </ul>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm">Our translation services are powered by Spitch&apos;s advanced AI technology, which enables natural-sounding translations and authentic African voice synthesis. For more information about Spitch&apos;s services, please visit <a href="http://spitch.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">spitch.app</a>.</p>
          </div>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-semibold">3. Token System and Payments</h2>
          </div>
          <p className="leading-relaxed mb-4">Translag operates on a token-based system where:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Each translation consumes one token from your balance
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Tokens can be purchased through the Paystack payment system
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Tokens are non-refundable and non-transferable
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Token prices are subject to change with prior notice
            </li>
          </ul>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="h-8 w-8 text-indigo-600" />
            <h2 className="text-2xl font-semibold">4. User Accounts</h2>
          </div>
          <p className="leading-relaxed mb-4">To use Translag&apos;s translation services, you must:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
              Create an account using Firebase Authentication
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
              Provide accurate and complete information
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
              Maintain the security of your account credentials
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
              Be responsible for all activities under your account
            </li>
          </ul>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-8 w-8 text-red-600" />
            <h2 className="text-2xl font-semibold">5. Privacy and Data Protection</h2>
          </div>
          <p className="leading-relaxed mb-4">We collect and process your data in accordance with our Privacy Policy. This includes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
              Account information
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
              Translation history
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
              Usage statistics
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
              Payment information
            </li>
          </ul>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-8 w-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
          </div>
          <p className="leading-relaxed">All content, features, and functionality of Translag are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-8 w-8 text-orange-600" />
            <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          </div>
          <p className="leading-relaxed">Translag is provided &quot;as is&quot; without any warranties. We are not liable for any damages arising from the use or inability to use our service.</p>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="h-8 w-8 text-teal-600" />
            <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
          </div>
          <p className="leading-relaxed">We reserve the right to modify these terms at any time. Users will be notified of significant changes through the application or via email.</p>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-8 w-8 text-pink-600" />
            <h2 className="text-2xl font-semibold">9. Contact Information</h2>
          </div>
          <p className="leading-relaxed">If you have any questions about these Terms, please contact us at <a href="mailto:john@translag.live" className="text-blue-600 hover:underline">john@translag.live</a></p>
        </section>
      </div>
    </div>
  );
} 