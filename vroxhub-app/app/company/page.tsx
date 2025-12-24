export default function CompanyPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-6xl font-black mb-4 tracking-tighter metallic-text-silver">OUR COMPANY</h1>
            <div className="w-24 h-1 bg-slate-500 mb-8"></div>
            <p className="text-gray-400 text-xl max-w-2xl text-center leading-relaxed font-light">
                VROXHUB is a forward-thinking creative agency dedicated to excellence in digital storytelling.
                Founded on the principles of innovation and artistic integrity, we help brands navigate the
                evolving landscape of modern media.
            </p>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-4xl font-black metallic-text-silver mb-2">10+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">Years Exp</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-black metallic-text-silver mb-2">500+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">Projects</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-black metallic-text-silver mb-2">100+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">Clients</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-black metallic-text-silver mb-2">24/7</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">Support</div>
                </div>
            </div>
        </div>
    );
}
