import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { AlignRight, ArrowRight, ArrowRightIcon, CarrotIcon, ChevronRight, MailOpen } from "lucide-react";
import Faq from "@/components/home/faq";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-4xl px-5 xl:px-0">
        <a
          href="https://x.com/thejohncaleb/status/1930901713013166216"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-6 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-stone-900 px-7 py-2 transition-colors hover:bg-stone-700"
        >
          <Twitter className="h-5 w-5 text-stone-200" />
          <p className="text-xs font-semibold underline text-stone-200">
            Introducing Translag
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Real-time Translation for African Languages
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Break language barriers with <strong>Translag</strong>, the ultimate app for translating between English and African languages.        </p>
        <div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
        >          
          <ComponentGrid />
        </div>
      </div>
      <div className="container my-10 opacity-95 w-full max-w-screen-xl flex-1 justify-center gap-5 px-5 xl:px-0">
        <div className=''>
          <div className='flex justify-center items-center'>
            <div className='p-10 bg-slate-50 border border-stone-300 rounded-3xl max-w-5xl flex items-center self-center relative z-10'>
              <div className='flex sm:flex-row-reverse flex-col justify-around w-full'>
                <Image src="/hero.png" alt="Translag" height={400} width={500} />
                <div className="sm:border-t-0 sm:mt-0 border-t-2 mt-8"></div>
                <div className='sm:w-1/2 w-full sm:pt-0 pt-7'>
                  <h2 className='sm:text-6xl sm:text-left text-center text-3xl font-light text-stone-900'>
                    Translate instantly between English and African languages with <strong className="font-bold">Translag.</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10 w-full max-w-screen-xl flex-1 justify-center gap-5 px-5 xl:px-0 relative z-10">
        <div className='flex justify-center items-center'>
          <div id='features' className='w-full pt-3'>
            <div className='sm:mx-20 mx-5'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v18m1-8h7a5 5 0 015 5v1a5 5 0 01-5 5H5a5 5 0 01-5-5v-1a5 5 0 015-5h7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Translation</h3>
                    <p className="text-gray-600">Instant translation between English and African languages with high accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Voice Recognition</h3>
                    <p className="text-gray-600">Convert speech to text and text to speech with native voice options.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Token System</h3>
                    <p className="text-gray-600">Pay-as-you-go token system with secure Paystack integration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                    <p className="text-gray-600">Save and access your translation history securely.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq />
    </>
  );
}

