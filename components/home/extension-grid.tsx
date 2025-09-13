"use client";

import { useState } from "react";
import Popover from "@/components/shared/popover";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const ChromeIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const SafariIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const EdgeIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const FirefoxIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export default function ExtensionGrid() {
  const [openPopover, setOpenPopover] = useState(false);
  
  return (
    <Popover
      content={
        <div className="w-full rounded-md bg-white p-2 sm:w-56 border border-gray-200 shadow-lg">
          <div className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 bg-gray-50 border-b border-gray-100 cursor-not-allowed">
            <ChromeIcon />
            <span className="font-medium text-gray-500">Chrome Web Store [Coming Soon]</span>
          </div>
          <div className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 bg-gray-50 border-b border-gray-100 cursor-not-allowed">
            <SafariIcon />
            <span className="font-medium text-gray-500">Safari Extensions [Coming Soon]</span>
          </div>
          <div className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 bg-gray-50 border-b border-gray-100 cursor-not-allowed">
            <EdgeIcon />
            <span className="font-medium text-gray-500">Edge Add-ons [Coming Soon]</span>
          </div>
          <div className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 bg-gray-50 cursor-not-allowed">
            <FirefoxIcon />
            <span className="font-medium text-gray-500">Firefox Add-ons [Coming Soon]</span>
          </div>
        </div>
      }
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button
        onClick={() => setOpenPopover(!openPopover)}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white transition-all hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
        <div className="relative flex items-center space-x-2">
          <span className="text-base font-semibold">Use in Web Extension</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-200 ${openPopover ? "rotate-180" : ""}`}
          />
        </div>
      </button>
    </Popover>
  );
}
