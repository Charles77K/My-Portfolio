import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/charlesobiora",
      aria: "GitHub Profile",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/charles-obiora",
      aria: "LinkedIn Profile",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/charlesobiora",
      aria: "Twitter Profile",
    },
  ];

  return (
    <footer className="bg-foreground text-white pt-10 pb-4 px-4 md:px-8 h-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0 items-start sm:items-center">
          {/* Personal Branding */}
          <div className="space-y-3">
            <Logo />
            <p className="text-gray-300 max-w-xs">
              Software Developer passionate about creating innovative web and
              mobile applications
            </p>
          </div>

          {/* Contact and Social */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Get in Touch</h4>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-3 text-xl" />
              <a
                href="mailto:charlesobiora16@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                charlesobiora16@gmail.com
              </a>
            </div>

            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ icon: Icon, href, aria }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  aria-label={aria}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 mb-2">
            © {currentYear} Charles Obiora. All Rights Reserved.
          </p>
          <div className="space-x-4">
            <Link
              href="/#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
