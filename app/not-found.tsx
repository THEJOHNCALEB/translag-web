import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative z-10 w-full max-w-4xl px-5 xl:px-0">
      <div className="w-full rounded-lg bg-white p-8 shadow-lg text-center">
        <Image
          src="/honelogo.png"
          alt="Translag Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />
        <h1 className="mb-4 text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
        <p className="mb-8 text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
} 