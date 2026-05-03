import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDiscord,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-white px-6 lg:px-12 py-16 relative z-10 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src="./icons/logos/tidal-white-transparent.png"
                                alt="TIDAL Logo"
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <div className="text-white text-sm md:text-base lg:text-lg font-bold mb-2">
                            TIDALTAMU
                        </div>
                        <p className="text-white-400 text-xs md:text-sm">
                            The AI Wave Starts Here
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-6">Contact Us</h4>
                        <a
                            href="mailto:tidaltamu@gmail.com"
                            className="text-white-400 text-xs md:text-sm hover:text-white transition-colors"
                        >
                            tidaltamu@gmail.com
                        </a>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-white-400 text-xs md:text-sm">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#schedule"
                                    className="hover:text-white transition-colors"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#prizes"
                                    className="hover:text-white transition-colors"
                                >
                                    Prizes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="hover:text-white transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sponsors"
                                    className="hover:text-white transition-colors"
                                >
                                    Sponsors
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://www.instagram.com/tidaltamu/"
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://discord.gg/eQ8ScamG4H"
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                            >
                                <FaDiscord className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/tidaltamu"
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/tidal-tamu/"
                                target="_blank"
                                className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:tidaltamu@gmail.com"
                                className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                            >
                                <FaEnvelope className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="text-white-400 text-xs md:text-sm">
                            <p className="mb-2">© 2026 TIDALTAMU</p>
                            <a
                                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                                target="_blank"
                                className="hover:text-white transition-colors"
                            >
                                MLH Code of Conduct
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
