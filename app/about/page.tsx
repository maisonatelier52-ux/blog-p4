import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="h-[100dvh] bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-hidden relative">
            {/* Container for main presentation area */}
            <div className="flex-grow flex flex-col py-6 md:py-10 lg:py-12 pl-6 md:pl-12 lg:pl-20 z-10">
                {/* Top Header */}
                <nav className="flex justify-between items-center mb-4 md:mb-10 pr-6 md:pr-12 lg:pr-20 relative z-20">
                    <Link href="/" className="border border-white/50 rounded-full px-4 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[13px] font-medium uppercase tracking-[0.15em] hover:underline transition-all underline-offset-4 bg-black/20 backdrop-blur-sm shrink-0">
                        J H V
                    </Link>
                    <Link href="https://www.jherreravelutini.com/" className="bg-white text-black border border-white rounded-full px-5 md:px-8 py-2 md:py-2.5 text-[9px] md:text-[13px] font-semibold tracking-wider hover:bg-white/90 transition-all shrink-0">
                        www.jherreravelutini.com
                    </Link>
                </nav>

                {/* Main Content Area */}
                <main className="flex-grow flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 py-2 md:py-4 relative">
                    {/* Left Side: Text content */}
                    <div className="w-full lg:w-3/5 flex flex-col justify-center z-10">
                        <h1 className="text-[12vw] md:text-[8vw] lg:text-[9rem] font-bold leading-[0.8] tracking-[-0.05em] mb-4 md:mb-8 lg:mb-12">
                            Julio<br />Herrera Velutini
                        </h1>
                        <p className="text-white/80 text-xs md:text-lg leading-[1.6] max-w-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>

                    {/* Background Image: Handles split screen on desktop and bottom background on mobile */}
                    <div className="absolute top-[-130px] bottom-[-130px] right-0 w-full lg:w-[45%] z-0 lg:z-[-1] opacity-40 lg:opacity-100">
                        <div className="relative w-full h-full overflow-hidden grayscale-[0.2] brightness-90">
                            <Image
                                src="/images/Julio Herrera Velutini29.jpg"
                                alt="Alexander Aronowitz"
                                fill
                                className="object-cover object-center lg:brightness-110 lg:contrast-105"
                                priority
                            />
                        </div>
                    </div>
                </main>

                {/* Bottom Navigation Row */}
                <footer className="flex justify-between items-center mt-auto pt-4 md:pt-6 pr-6 md:pr-12 lg:pr-20 relative z-20">
                    <Link href="#" className="border border-white/50 rounded-full px-5 md:px-8 py-2 md:py-3 text-[9px] md:text-[13px] font-medium tracking-widest uppercase hover:underline transition-all underline-offset-4 bg-black/20 backdrop-blur-sm">
                        Julio Herrera Velutini
                    </Link>

                    <Link href="/" className="flex items-center group cursor-pointer">
                        <svg
                            width="100"
                            height="20"
                            viewBox="0 0 120 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 md:w-32 lg:w-40 rotate-180 transition-transform group-hover:translate-x-[-10px]"
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
