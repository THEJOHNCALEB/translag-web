import Image from 'next/image';
import Link from 'next/link';

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Translag Logo"
              width={150}
              height={50}
              className="mx-auto"
            />
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Delete Your Translag Account
          </h1>

          <div className="space-y-6">
            <div>
              <p className="text-gray-600 mb-4">
                To request deletion of your account and associated data:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Open the Translag app</li>
                <li>Go to <span className="font-semibold">Settings → Delete Account</span></li>
                <li>Confirm deletion</li>
              </ol>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                What gets deleted:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Firebase Authentication credentials (email, phone, OAuth tokens)</li>
                <li>User profile data stored in Firestore/Realtime Database</li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                What we retain (for legal compliance):
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Transaction records (if any) for 5 years</li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6 text-center">
              <p className="text-gray-600">
                Contact:{' '}
                <a
                  href="mailto:thejohncaleb@outlook.com"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  thejohncaleb@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 