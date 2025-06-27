// frontend/src/components/layout/Footer.tsx

import footer from '../../assets/footer.png';
import bantayWhite from '../../assets/bantay-white.svg';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 bottom-0 text-white overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute inset-0">
                <img src={footer} alt="footer"/>
            </div>

            <div className=" relative z-10 container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between ml-10">

                    {/* Left Section - Logo and Project Info */}
                    <div className="space-y-4 ">
                        <div className="flex items-center space-x-3">
                            <img src={bantayWhite} alt="bantay white" className="w-24"/>
                            <div>
                                <h2 className="text-2xl font-bold">BANTAY</h2>
                                <p className="text-sm text-blue-100">Real-time Flood Propagation Mapping Platform</p>
                            </div>
                        </div>

                        <div className="text-sm text-blue-100">
                            <p className="font-medium mb-2">BANTAY IS A PROJECT OF:</p>
                            <div className="flex items-center space-x-3">
                                {/*<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">*/}
                                {/*    <span className="text-xs font-bold text-white">★</span>*/}
                                {/*</div>*/}
                                <span className="font-semibold">victory</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - About */}
                    <div className="space-y-4 text-[#066AAA] ml-25">
                        <h3 className="text-xl font-bold">ABOUT</h3>
                        <p className="text-sm text-[#066AAA] leading-relaxed">
                            BANTAY is a real-time flood mapping platform inspired by Project NOAH's visualization approach but focused on real-time sensor-driven flood propagation mapping.
                        </p>
                    </div>

                    {/* Right Section - Contact */}
                    <div className="space-y-4 ml-20">
                        <h3 className="text-xl text-[#066AAA] font-bold">CONTACT US</h3>
                        <div className="flex space-x-4">
                            {/*<button className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">*/}
                            {/*    <Phone className="w-5 h-5" />*/}
                            {/*</button>*/}
                            {/*<button className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">*/}
                            {/*    <Facebook className="w-5 h-5" />*/}
                            {/*</button>*/}
                            {/*<button className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">*/}
                            {/*    <Mail className="w-5 h-5" />*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="mt-12 pt-8 border-opacity-30">
                    <p className="text-center  font-medium">
                        Intelligence Flows Where Water Goes - PMT Waters Decoded:
                    </p>
                    <p className="text-center  mt-1">
                        Pasig Flows, Marikina Knows, Tullahan Shows
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;