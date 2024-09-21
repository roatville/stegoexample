const Banner = ({ stars }) => (
    <header className="bg-gradient-to-b from-gray-500 to-gray-900">
        <div className="container xl:max-w-screen-xl mx-auto px-8 pt-32 pb-16">
            <div className="flex flex-wrap items-center justify-between">
                <h1 className="text-4xl mr-4 mb-4 font-bold">Steganography for Medical Images or patients</h1>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg text-xl bg-gray-900 bg-opacity-10 opacity-95 shadow-inner hover:bg-opacity-20 focus:outline-none focus-visible:ring ring-gray-100 ring-opacity-25 pl-2 pr-3 mb-4"
                >
                    
                    {/* &#9733; {stars} stars */}
                </a>
            </div>
            <p className="text-4xl md:text-5xl lg:text-4xl pt-8">
                Hide files inside images
            </p>
        </div>
    </header>
);

export default Banner;
