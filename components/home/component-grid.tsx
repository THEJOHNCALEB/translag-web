"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const PlayStoreIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.646-.713-.609-1.81.109-2.486l7.285-6.7-7.285-6.7c-.718-.676-.755-1.773-.109-2.486zM14.5 12l7.5 6.5c.5.5.5 1.5 0 2l-7.5 6.5-3-3 7-7-7-7 3-3z"/>
  </svg>
);

const AppStoreIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 001 18h22a10.81 10.81 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
  </svg>
);

export default function ComponentGrid() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <>
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-48 border border-gray-200 shadow-lg">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.thejohncaleb.translag" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100"
            >
             <svg className="h-6 w-6 text-black" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M96.4 52.2c-8.7 5-14.4 14.3-14.4 24.2v359.2c0 9.9 5.7 19.2 14.4 24.2 4.7 2.7 10.2 3.9 15.6 3.9 5.4 0 10.9-1.4 15.8-4.3l252.1-144.9L127.8 52.6c-4.9-2.9-10.4-4.3-15.8-4.3-5.4 0-10.9 1.3-15.6 3.9zM375.7 199.8L163.5 79.3l168.6 168.5L163.5 416.1l212.2-120.5c15.2-8.6 15.2-31.2 0-39.8z"/>
</svg>

              <span className="font-medium underline">Get on Google Play</span>
            </Link>
            <div 
              className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 bg-gray-50 border-b border-gray-100 cursor-not-allowed"
            >
              <AppStoreIcon />
              <span className="font-medium text-gray-500">App Store [Coming Soon]</span>
            </div>
            <Link 
              href="https://drive.google.com/uc?export=download&id=1scm993ynm8ofIxEaBO2x8KlxJmqAyV-r" 
              className="flex w-full items-center justify-start space-x-2 rounded-md p-4 text-left text-sm transition-all duration-75 hover:bg-gray-50 active:bg-gray-100"
            >
              <AndroidIcon />
              <span className="font-medium underline">Download APK</span>
            </Link>
          </div>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-black px-8 py-3 font-medium text-white transition-all hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
          <div className="relative flex items-center space-x-2">
            <span className="text-base font-semibold">Download App</span>
            <DownloadIcon
              className={`h-5 w-5 transition-transform duration-200 ${openPopover ? "rotate-180" : ""}`}
            />
          </div>
        </button>
      </Popover>
      <DemoModal />
    </>
  );
}
