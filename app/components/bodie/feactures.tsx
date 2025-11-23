export const Feactures = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Simple Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Imagen 1 */}
                <div className="bg-navy-900/50 backdrop-blur-sm border border-navy-800 rounded-xl overflow-hidden hover:border-primary-400/50 transition-all duration-200">
                    <img
                        src="/assets/images/1.jpg"
                        alt="Interfaz moderna del proyecto"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Gestor de Instancias</h3>
                        <p className="text-gray-400">
                            Administra múltiples versiones de Minecraft Bedrock de forma organizada y eficiente.
                        </p>
                    </div>
                </div>

                {/* Imagen 2 */}
                <div className="bg-navy-900/50 backdrop-blur-sm border border-navy-800 rounded-xl overflow-hidden hover:border-accent-500/50 transition-all duration-200">
                    <img
                        src="/assets/images/2.jpg"
                        alt="Dashboard del proyecto"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-accent-400">Gestor de Mods</h3>
                        <p className="text-gray-400">
                            Instala, activa y gestiona mods y add-ons para personalizar tu experiencia de juego.
                        </p>
                    </div>
                </div>

                {/* Imagen 3 */}
                <div className="bg-navy-900/50 backdrop-blur-sm border border-navy-800 rounded-xl overflow-hidden hover:border-primary-400/50 transition-all duration-200">
                    <img
                        src="/assets/images/3.jpg"
                        alt="Rendimiento del proyecto"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Gestor de Recursos</h3>
                        <p className="text-gray-400">
                            Organiza paquetes de texturas, sonidos y recursos para transformar la apariencia del juego.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}