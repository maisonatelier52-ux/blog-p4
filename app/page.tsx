import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100dvh] bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-hidden">
      {/* Container for main presentation area */}
      <div className="flex-grow flex flex-col py-6 md:py-10 lg:py-12 pl-6 md:pl-12 lg:pl-20">
        {/* Top Header */}
        <nav className="flex justify-between items-center mb-4 md:mb-10 pr-6 md:pr-12 lg:pr-20">
          <Link href="#" className="border border-white/50 rounded-full px-4 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[13px] font-medium uppercase tracking-[0.15em] hover:underline transition-all underline-offset-4 shrink-0">
            Creative Presentation
          </Link>
          <Link href="#" className="border border-white/50 rounded-full px-4 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[13px] font-medium tracking-wider text-white/90 hover:underline transition-all underline-offset-4 shrink-0">
            reallygreatsite.com
          </Link>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 py-2 md:py-4">
          {/* Left Side: Text content */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[9rem] font-bold leading-[0.85] tracking-[-0.05em] mb-4 md:mb-8">
              Introduction
            </h1>
            <p className="text-white/70 text-xs md:text-lg leading-[1.6] max-w-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>

          {/* Right Side: Image with specific sizing to fit */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center max-h-[40vh] md:max-h-[50vh] lg:max-h-full overflow-hidden">
            <div className="relative w-full aspect-[16/10] lg:aspect-[4/3.5] overflow-hidden grayscale-[0.2] brightness-90">
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
        <footer className="flex justify-between items-center mt-auto pt-4 md:pt-6 pr-6 md:pr-12 lg:pr-20">
          <Link href="#" className="border border-white/50 rounded-full px-5 md:px-8 py-2 md:py-3 text-[9px] md:text-[13px] font-medium tracking-widest uppercase hover:underline transition-all underline-offset-4">
            Alexander Aronowitz
          </Link>

          <Link href="/about" className="flex items-center group cursor-pointer">
            <svg
              width="100"
              height="20"
              viewBox="0 0 120 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 md:w-32 lg:w-40 transition-transform group-hover:translate-x-2"
            >
              <path
                d="M0 12H118M118 12L108 2M118 12L108 22"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </footer>
      </div>
    </div>
  );
}
