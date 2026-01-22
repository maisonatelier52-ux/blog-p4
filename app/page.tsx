import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-hidden">
      {/* Container for main presentation area */}
      <div className="flex-grow flex flex-col py-8 md:py-10 lg:py-12 pl-6 md:pl-12 lg:pl-20">
        {/* Top Header */}
        <nav className="flex justify-between items-center mb-6 lg:mb-10 pr-6 md:pr-12 lg:pr-20">
          <Link href="#" className="border border-white/50 rounded-full px-6 py-2.5 text-[11px] md:text-[13px] font-medium uppercase tracking-[0.15em] hover:underline transition-all underline-offset-4">
            Creative Presentation
          </Link>
          <Link href="#" className="border border-white/50 rounded-full px-6 py-2.5 text-[11px] md:text-[13px] font-medium tracking-wider text-white/90 hover:underline transition-all underline-offset-4">
            reallygreatsite.com
          </Link>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col lg:flex-row items-center justify-between gap-8 py-4">
          {/* Left Side: Text content */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            <h1 className="text-[12vw] lg:text-[9rem] font-bold leading-[0.85] tracking-[-0.05em] mb-6 lg:mb-8">
              Introduction
            </h1>
            <p className="text-white/70 text-sm md:text-lg leading-[1.6] max-w-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>

          {/* Right Side: Image with specific sizing to fit */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center max-h-[50vh] lg:max-h-full">
            <div className="relative w-full aspect-[4/3.5] overflow-hidden grayscale-[0.2] brightness-90">
              <Image
                src="/images/Julio Herrera Velutini23-6.png"
                alt="Julio Herrera Velutini"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </main>

        {/* Bottom Navigation Row */}
        <footer className="flex justify-between items-center mt-auto pt-6 pr-6 md:pr-12 lg:pr-20">
          <Link href="#" className="border border-white/50 rounded-full px-8 py-3 text-[11px] md:text-[13px] font-medium tracking-widest uppercase hover:underline transition-all underline-offset-4">
            Alexander Aronowitz
          </Link>

          <div className="flex items-center">
            <svg
              width="140"
              height="24"
              viewBox="0 0 120 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 md:w-32 lg:w-40"
            >
              <path
                d="M0 12H118M118 12L108 2M118 12L108 22"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
}
