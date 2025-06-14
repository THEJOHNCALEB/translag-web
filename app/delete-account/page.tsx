import Image from "next/image";

export default function DeleteAccount() {
  return (
    <div className="relative z-10 w-full max-w-4xl px-5 xl:px-0">
      <div className="w-full rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <Image
            src="/honelogo.png"
            alt="Translag Logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="mb-4 text-3xl font-bold text-gray-900">How to Delete Your Account</h1>
          <p className="mb-8 text-gray-600">
            Follow these simple steps to delete your Translag account:
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              1
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Open Your Profile</h3>
              <p className="mt-1 text-gray-600">
                Tap on your profile picture in the top-right corner of the app
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              2
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Access Edit Profile</h3>
              <p className="mt-1 text-gray-600">
                Click on the "Edit Profile" option in your profile menu
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              3
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Delete Account</h3>
              <p className="mt-1 text-gray-600">
                Scroll to the bottom of the Edit Profile page and tap on "Delete Account"
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Deleting your account is permanent and cannot be undone. All your data, including translation history and preferences, will be permanently removed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at{" "}
              <a href="mailto:john@translag.live" className="font-medium text-blue-600 hover:text-blue-500">
                john@translag.live
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 