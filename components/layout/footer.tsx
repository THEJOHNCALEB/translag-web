import { VibrateIcon } from "lucide-react";
import { BuyMeACoffee, X, Mail } from "../shared/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 mb-2 gap-5 text-center">
      <div className="flex justify-center space-x-4 mb-3">
        <a
          href="mailto:john@translag.live"
          className="text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-5 w-5" />
          <span>john@translag.live</span>
        </a>
        <a
          href="https://x.com/usetranslag"
          className="text-gray-500 hover:text-gray-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <X className="h-5 w-5 inline-block" />
        </a>
      </div>
      <a
        href="https://www.buymeacoffee.com/thejohncaleb"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 mb-5 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffee className="h-6 w-6" />
        <p className="font-medium text-gray-600">Buy me a coffee</p>
      </a>
      <div className="flex justify-center space-x-4 mb-3">
        <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">
          Terms of Service
        </Link>
        <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
          Privacy Policy
        </Link>
      </div>
      <p className="text-gray-500 mb-3">
        Made with ❤ By {" "}
        <a
          className="font-semibold text-gray-600 underline transition-colors hover:no-underline"
          href="https://thejohncaleb.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          John Caleb
        </a>
      </p>
    </div>
  );
}
