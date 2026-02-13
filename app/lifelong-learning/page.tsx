import Image from "next/image";
import Link from "next/link";

export default function LifelongLearning() {
    return (
        <div className="h-[100dvh] bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black overflow-hidden relative">
            <div className="flex-grow flex flex-col py-6 md:py-10 lg:py-12 pl-6 md:pl-12 lg:pl-20 z-10">
                <nav className="flex justify-between items-center mb-4 md:mb-10 pr-6 md:pr-12 lg:pr-20 relative z-20">
                    <Link href="/" className="border border-white/50 rounded-full px-4 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[13px] font-medium uppercase tracking-[0.15em] hover:underline transition-all underline-offset-4 bg-black/20 backdrop-blur-sm shrink-0">
                        J H V
                    </Link>
                    <Link href="https://www.jherreravelutini.com/" className="bg-white text-black border border-white rounded-full px-5 md:px-8 py-2 md:py-2.5 text-[9px] md:text-[13px] font-semibold tracking-wider hover:bg-white/90 transition-all shrink-0">
                        www.jherreravelutini.com
                    </Link>
                </nav>

                <main className="flex-grow flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 py-2 md:py-4 relative">
                    <div className="w-full lg:w-3/5 flex flex-col justify-center z-10">
                        <h1 className="text-[7vw] md:text-[5vw] lg:text-[5rem] font-bold leading-[1.1] tracking-[-0.03em] mb-4 md:mb-8 lg:mb-10 uppercase">
                            Lifelong Learning <br />Through Leadership <br />and Innovation
                        </h1>
                        <p className="text-white/80 text-xs md:text-lg leading-[1.6] max-w-xl font-normal">
                            Degrees did not stop Julio from growing. His craving for knowledge never sufficed as
                            he took on leadership roles at banks like Banco Real and later Bancredito and
                            Britannia Financial Group, two of his own founding institutions. Constantly adapting,
                            innovating, and refining his vision for global finance, he remains a lifelong learner
                            who believes that education evolves through experiences, challenges, and strategic
                            thinking in a world that is rapidly changing.
                        </p>
                    </div>

                    <div className="absolute top-[-130px] bottom-[-130px] right-0 w-full lg:w-[45%] z-0 lg:z-[-1] opacity-40 lg:opacity-100">
                        <div className="relative w-full h-full overflow-hidden grayscale-[0.2] brightness-90">
                            <Image
                                src="/images/Julio Herrera Velutini24.png"
                                alt="Lifelong Learning"
                                fill
                                className="object-cover object-center lg:brightness-110 lg:contrast-105"
                                priority
                            />
                        </div>
                    </div>
                </main>

                <footer className="flex justify-between items-center mt-auto pt-4 md:pt-6 pr-6 md:pr-12 lg:pr-20 relative z-20">
                    <Link href="/" className="border border-white/50 rounded-full px-5 md:px-8 py-2 md:py-3 text-[9px] md:text-[13px] font-medium tracking-widest uppercase hover:underline transition-all underline-offset-4 bg-black/20 backdrop-blur-sm">
                        Julio Herrera Velutini
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link href="/education-in-action" className="flex items-center group cursor-pointer rotate-180">
                            <svg width="60" height="20" viewBox="0 0 120 24" fill="none" className="transition-transform group-hover:translate-x-2">
                                <path d="M0 12H118M118 12L108 2M118 12L108 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </Link>
                        <Link href="/inspiring-next-generation" className="flex items-center group cursor-pointer">
                            <svg width="100" height="20" viewBox="0 0 120 24" fill="none" className="w-16 md:w-32 lg:w-40 transition-transform group-hover:translate-x-2">
                                <path d="M0 12H118M118 12L108 2M118 12L108 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
