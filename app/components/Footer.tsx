import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[#EBF0F5] bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="Godam SE Logo" 
                width={32} 
                height={32} 
                className="h-8 w-auto"
              />
              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
                Godam SE
              </h3>
            </div>
            <p className="mb-4 text-sm text-[#446888]">
              B2B E-commerce Grocery Platform connecting companies directly to shopkeepers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#1f2d3d]">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#446888] transition-colors hover:text-[#D4AF37]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-[#446888] transition-colors hover:text-[#D4AF37]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#446888] transition-colors hover:text-[#D4AF37]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#1f2d3d]">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#446888] transition-colors hover:text-[#D4AF37]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#446888] transition-colors hover:text-[#D4AF37]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[#EBF0F5] pt-8">
          <p className="text-center text-sm text-[#446888]">
            © {new Date().getFullYear()} Godam SE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

