export default function CustomersPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl font-black text-white mb-4 tracking-tighter metallic-text-silver">OUR CUSTOMERS</h1>
            <p className="text-gray-400 text-xl max-w-lg text-center leading-relaxed">
                Trusted by industry leaders worldwide. Our clients are at the heart of everything we do.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-50">
                {/* Placeholder Logos */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="text-3xl font-bold text-gray-500 hover:text-white transition-colors">PARTNER {i}</div>
                ))}
            </div>
        </div>
    );
}
