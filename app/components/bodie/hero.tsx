import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    {/* Logo - ubicado en public/assets/icons/start.svg */}
                    <img src="/assets/icons/start.svg" alt="Logo Mi Proyecto" className="w-24 h-24 mx-auto" />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Bienvenido a{' '}
                    <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                        Trinity Launcher
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                    Un launcher open source para Minecraft Bedrock con la capacidad de gestionar múltiples
                    instancias, mundos, texturas y mods. Enfocado en la libertad del usuario y redistribución
                    gratuita.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/wiki"
                        className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-primary-500/25 inline-block"
                    >
                        Comenzar
                    </Link>

                    <Link
                        href="/contributors"
                        className="border border-gray-600 hover:border-primary-500 text-gray-300 hover:text-primary-400 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block"
                    >
                        Conocer el Equipo
                    </Link>
                </div>
            </div>
        </section>
    );
};