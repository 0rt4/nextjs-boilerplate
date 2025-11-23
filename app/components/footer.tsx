export const Footer = () => {
    return (
        <footer className="bg-navy-900/80 backdrop-blur-md border-t border-navy-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Trinity Launcher. Todos los derechos reservados.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Política de Privacidad</a>
                    <a href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Términos de Servicio</a>
                </div>
            </div>
        </footer>
    );
}