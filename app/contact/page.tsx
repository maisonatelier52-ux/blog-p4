import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="h-[100dvh] bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white overflow-hidden relative">
            {/* Top Header */}
            <nav className="flex h-16 md:h-20 items-center border-b border-black md:border-black/50">
                <div className="w-1/2 md:w-[40%] h-full flex items-center px-6 md:px-12 lg:px-20 border-r border-black/50 gap-3 md:gap-4">
                    <div className="w-4 h-4 md:w-8 md:h-8 bg-red-700 rounded-full shrink-0" />
                    <Link href="#" className="text-[10px] md:text-[18px] font-medium tracking-[0.2em] uppercase truncate hover:underline underline-offset-4">
                        Keithston and Partners
                    </Link>
                </div>
                <div className="flex-grow h-full flex items-center justify-end px-6 md:px-12 lg:px-20">
                    <Link href="#" className="text-[10px] md:text-[18px] font-medium tracking-[0.2em] uppercase text-black hover:underline underline-offset-4">
                        www.reallygreatsite.com
                    </Link>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col">
                {/* Middle Section */}
                <div className="flex-grow flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-8 md:py-12 gap-8">
                    {/* Left Box */}
                    <div className="w-full lg:w-195 flex justify-start items-center">
                        <div className="relative border border-black/50 p-8 md:p-12 max-w-lg">
                            <p className="text-black/70 text-sm md:text-base leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            {/* Red dot on the corner */}
                            <div className="absolute bottom-0 right-9 translate-x-1/2 translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-red-700 rounded-full" />
                        </div>
                    </div>

                    {/* Right Heading */}
                    <div className="w-full lg:w-2/2 flex flex-col justify-center items-end lg:items-end text-right">
                        <div className="relative">
                            <h1 className="text-[15vw] lg:text-[7rem] font-bold leading-[0.8] tracking-tight uppercase text-black">
                                LET'S WORK
                            </h1>
                            <span className="block italic font-normal text-[15vw] lg:text-[6rem] font-serif text-red-700 leading-none lowercase lg:-mt-6 -mt-6">
                                together
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Contact Section */}
                <div className="mb-20 mr-20 ml-20 border border-black">
                <div className="flex md:border-black/50 h-[30vh] lg:h-[35vh]">
                    {/* Contact Details Grid */}
                    <div className="w-full lg:w-[37%] flex flex-col border-r border-black/50 divide-y divide-black/50">
                        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 gap-4 group cursor-pointer hover:bg-black/5 transition-colors">
                            <Link href="#" className="text-[10px] md:text-[16px] tracking-[0.2em] uppercase font-medium hover:underline underline-offset-4">
                                @reallygreatsite
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 gap-4 group cursor-pointer hover:bg-black/5 transition-colors">
                            <Link href="#" className="text-[10px] md:text-[16px] tracking-[0.2em] uppercase font-medium hover:underline underline-offset-4">
                                hello@reallygreatsite.com
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 gap-4 group cursor-pointer hover:bg-black/5 transition-colors">
                            <Link href="#" className="text-[10px] md:text-[16px] tracking-[0.2em] uppercase font-medium hover:underline underline-offset-4">
                                www.reallygreatsite.com
                            </Link>
                        </div>
                    </div>
                    

                    {/* Grayscale Flower Image */}
                    <div className="hidden lg:block lg:w-[63%] relative h-full">
                        <Image
                            src="/images/grayscale_flowers.png"
                            alt="Work together flowers"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
