export default function PortfolioPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl font-black text-white mb-4 tracking-tighter metallic-text-silver">PORTFOLIO</h1>
            <p className="text-gray-400 text-xl max-w-lg text-center leading-relaxed">
                We are currently curating our finest work. Check back soon to see our latest projects and success stories.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-white/5 rounded-2xl animate-pulse"></div>
                ))}
            </div>
        </div>
    );
}
