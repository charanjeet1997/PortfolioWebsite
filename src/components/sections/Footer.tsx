import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-6 mt-20 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-2 text-center md:text-left items-center">

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaPhoneAlt className="text-primary" />
            <a href="tel:+917698218398" className="hover:underline">
              +91 76982 18398
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaEnvelope className="text-primary" />
            <a href="mailto:charanjeetjaswani@gmail.com" className="hover:underline">
              charanjeetjaswani@gmail.com
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaDownload className="text-primary" />
            <a
              href="/CharanjeetResume.pdf"
              download
              className="hover:underline text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="mailto:charanjeetjaswani@gmail.com"
            className="p-2 rounded-full border border-primary/40 hover:bg-primary/10 transition"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/charanjeet1997"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-primary/40 hover:bg-primary/10 transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/charanjeet-singh-jaswani/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-primary/40 hover:bg-primary/10 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
