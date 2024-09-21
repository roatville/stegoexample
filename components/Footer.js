const Footer = () => (
    <footer className="bg-gray-900 bg-opacity-25 text-lg">
        <div className="container xl:max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between px-8 pt-16 pb-16">
            <p className="mb-4 sm:mb-0">
                Created by{" "}
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 focus:text-blue-300 focus-visible:underline focus:outline-none"
                >
                    Roatville
                </a>
            </p>
            <p>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 focus:text-blue-300 focus-visible:underline focus:outline-none"
                >
                    how It was made
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
