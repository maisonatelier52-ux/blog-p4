import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <div className="h-[100dvh] bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-hidden relative">
            {/* Top Header */}
            <nav className="flex h-16 md:h-26 items-center border-b border-white/50">
                <div className="w-1/2 md:w-[37%] h-full flex items-center px-6 md:px-12 lg:px-20 border-r border-white/50 gap-3 md:gap-4">
                    <div className="w-4 h-4 md:w-8 md:h-8 bg-red-700 rounded-full shrink-0" />
                    <Link href="#" className="text-[10px] md:text-[18px] font-medium tracking-[0.2em] uppercase truncate hover:underline underline-offset-4">
                        Keithston and Partners
                    </Link>
                </div>
                <div className="flex-grow h-full flex items-center justify-end px-6 md:px-12 lg:px-20">
                    <Link href="#" className="text-[10px] md:text-[18px] font-medium tracking-[0.2em] uppercase text-white/90 hover:underline underline-offset-4">
                        www.reallygreatsite.com
                    </Link>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col lg:flex-row">
                {/* Left Side: Text and Grid */}
                <div className="w-full lg:w-[55%] flex flex-col border-r border-white/50">
                    <div className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 md:py-16">
                        <div className="relative mb-8 md:mb-8">
                            <h1 className="text-[15vw] lg:text-[6rem] font-bold leading-[0.85] tracking-tight uppercase">
                                Our Photo
                                <span className="block italic font-normal lg:text-[6rem] font-serif text-red-700 leading-none lowercase -mt-4 lg:-mt-9">
                                    services
                                </span>
                            </h1>
                        </div>

                        <p className="text-white/70 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>

                    {/* Bottom Grid Section */}
                    <div className="flex border-t border-white/50 h-32 md:h-40">
                        <div className="w-1/2 flex items-center px-6 md:px-12 lg:px-20 gap-3 md:gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
                            <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-red-700 rounded-full shrink-0" />
                            <Link href="#" className="text-[10px] md:text-[20px] tracking-[0.1em] uppercase leading-tight hover:underline underline-offset-4">
                                Real Estate &<br />Interior
                            </Link>
                        </div>
                        <div className="w-1/2 flex items-center px-6 md:px-12 lg:px-20 gap-3 md:gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
                            <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-red-700 rounded-full shrink-0" />
                            <Link href="#" className="text-[10px] md:text-[20px] tracking-[0.1em] uppercase leading-tight hover:underline underline-offset-4">
                                Fashion &<br />Editorial
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-[50%] relative h-[40vh] lg:h-auto">
                    <Image
                        src="/images/Julio Herrera Velutini12-1.PNG"
                        alt="Photography services"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                </div>
            </main>

        </div>
    );
}
