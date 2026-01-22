import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-hidden relative">
            {/* Container for main presentation area */}
            <div className="flex-grow flex flex-col py-8 md:py-10 lg:py-12 pl-6 md:pl-12 lg:pl-20 z-10">
                {/* Top Header */}
                <nav className="flex justify-between items-center mb-6 lg:mb-10 pr-6 md:pr-12 lg:pr-20 relative z-20">
                    <Link href="/" className="border border-white/50 rounded-full px-6 py-2.5 text-[11px] md:text-[13px] font-medium uppercase tracking-[0.15em] hover:underline transition-all underline-offset-4 bg-black/20 backdrop-blur-sm">
                        Creative Presentation
                    </Link>
                    <Link href="#" className="bg-white text-black border border-white rounded-full px-8 py-2.5 text-[11px] md:text-[13px] font-semibold tracking-wider hover:bg-white/90 transition-all">
                        reallygreatsite.com
                    </Link>
                </nav>

                {/* Main Content Area */}
                <main className="flex-grow flex flex-col lg:flex-row items-center justify-between gap-8 py-4 relative">
                    {/* Left Side: Text content */}
                    <div className="w-full lg:w-3/5 flex flex-col justify-center">
                        <h1 className="text-[12vw] lg:text-[9rem] font-bold leading-[0.8] tracking-[-0.05em] mb-8 lg:mb-12">
                            Alexander<br />Aronowitz
                        </h1>
                        <p className="text-white/80 text-sm md:text-lg leading-[1.6] max-w-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>

                    {/* Background Image that occupies half the screen */}
                    <div className="absolute top-[-130px] bottom-[-130px] right-0 w-[45%] z-[-1]">
                        <div className="relative w-full h-full overflow-hidden  grayscale-[0.2] brightness-90">
                            <Image
                                src="/images/Julio Herrera Velutini29.jpg"
                                alt="Alexander Aronowitz"
                                fill
                                className="object-cover object-center brightness-110 contrast-105"
                                priority
                            />
                        </div>
                    </div>
                </main>

                {/* Bottom Navigation Row */}
                <footer className="flex justify-between items-center mt-auto pt-6 pr-6 md:pr-12 lg:pr-20 relative z-20">
                    <Link href="#" className="border border-white/50 rounded-full px-8 py-3 text-[11px] md:text-[13px] font-medium tracking-widest uppercase hover:underline transition-all underline-offset-4 bg-black/20 backdrop-blur-sm">
                        Alexander Aronowitz
                    </Link>

                    <Link href="/" className="flex items-center group cursor-pointer">
                        <svg
                            width="140"
                            height="24"
                            viewBox="0 0 120 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-24 md:w-32 lg:w-40 rotate-180 transition-transform group-hover:translate-x-[-10px]"
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
