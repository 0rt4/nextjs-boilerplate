export const CaracteristicasPrincipales = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Features Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="feature-card">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Rendimiento Rápido</h3>
                    <p className="text-gray-400">Optimizado para velocidad y eficiencia en todas las operaciones de gestión de Minecraft Bedrock en Linux.</p>
                </div>

                <div className="feature-card">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Fácil de Usar</h3>
                    <p className="text-gray-400">Interfaz intuitiva diseñada pensando en la experiencia del usuario, sin complicaciones técnicas.</p>
                </div>

                <div className="feature-card">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Personalizable</h3>
                    <p className="text-gray-400">Configura todo a tu gusto con opciones flexibles de customización y gestión de contenido.</p>
                </div>
            </div>
        </section>
    );
}