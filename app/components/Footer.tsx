import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-white text-[#282828]">
      <div className="container px-4 mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/go-aoction-logo.svg"
                alt="Cricket Auction Software"
                width={200}
                height={100}
              />
            </Link>
            <p className="text-[#282828]/70 mb-6 max-w-sm">
              The leading cricket auction software trusted by tournament
              organizers worldwide. Transform your auctions with real-time
              bidding and complete transparency.
            </p>
            {/* <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@cricketauction.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div> */}
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold mb-6 text-[#282828]">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#282828]/70 hover:text-[#282828] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#282828]/60">
            © {new Date().getFullYear()} CricketAuction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
