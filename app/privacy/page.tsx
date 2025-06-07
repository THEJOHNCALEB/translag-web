import type { Metadata } from "next";
import { Shield, Database, Lock, User, Bell, RefreshCw, Mail, Eye, Key, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Translag",
  description: "Privacy Policy for Translag - Real-time translation between English and Nigerian languages",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <Link href="/">
          <Image src="/logo.png" alt="Translag Logo" width={150} height={150} className="hover:opacity-80 transition-opacity" />
        </Link>
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-12 text-gray-700">
        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
          </div>
          <p className="leading-relaxed">At Translag, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our translation services.</p>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-8 w-8 text-green-600" />
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">2.1 Personal Information</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
                  Email address
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
                  Name
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
                  Profile picture (optional)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">2.2 Usage Data</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
                  Translation history
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
                  Token usage
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-600 rounded-full"></span>
                  Device information
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          </div>
          <ul className="list-disc ml-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Provide and improve our translation services
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Process payments and manage your token balance
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Send important updates and notifications
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-600 rounded-full"></span>
              Analyze usage patterns to improve our service
            </li>
          </ul>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Server className="h-8 w-8 text-indigo-600" />
            <h2 className="text-2xl font-semibold">4. Data Storage and Security</h2>
          </div>
          <p className="leading-relaxed mb-4">We use Firebase for secure data storage and authentication. Your data is protected through:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
              End-to-end encryption
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
              Secure cloud storage
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
              Regular security audits
            </li>
          </ul>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="h-8 w-8 text-red-600" />
            <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
          </div>
          <p className="leading-relaxed mb-4">We use the following third-party services:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
              Firebase (Authentication and Database)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
              Paystack (Payment Processing)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
              Spitch (Translation Services)
            </li>
          </ul>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm">Our translation services are powered by Spitch&apos;s AI technology. For more information about how Spitch handles your data, please visit their <a href="http://spitch.app/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">privacy policy</a>.</p>
          </div>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <User className="h-8 w-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          </div>
          <p className="leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-yellow-600 rounded-full"></span>
              Access your personal data
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-yellow-600 rounded-full"></span>
              Request data correction or deletion
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-yellow-600 rounded-full"></span>
              Opt-out of marketing communications
            </li>
          </ul>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-8 w-8 text-orange-600" />
            <h2 className="text-2xl font-semibold">7. Notifications</h2>
          </div>
          <p className="leading-relaxed">We may send you notifications about:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-orange-600 rounded-full"></span>
              Service updates
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-orange-600 rounded-full"></span>
              Security alerts
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-orange-600 rounded-full"></span>
              Account activity
            </li>
          </ul>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="h-8 w-8 text-teal-600" />
            <h2 className="text-2xl font-semibold">8. Changes to Privacy Policy</h2>
          </div>
          <p className="leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </section>

        <section className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-8 w-8 text-pink-600" />
            <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          </div>
          <p className="leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@translag.com" className="text-blue-600 hover:underline">privacy@translag.com</a></p>
        </section>
      </div>
    </div>
  );
} 