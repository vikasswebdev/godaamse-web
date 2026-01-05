import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EBF5FF] via-white to-[#F8FAFC] opacity-50"></div>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1f2d3d] sm:text-6xl animate-fade-in">
            B2B E-commerce Grocery Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#446888] animate-fade-in-delay">
            Connect companies directly to shopkeepers. Streamline your supply chain with our
            comprehensive B2B e-commerce platform designed specifically for the grocery industry.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-delay-2">
            <Link
              href="/contact"
              className="rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#B8941F] hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              href="/download"
              className="text-sm font-semibold leading-6 text-[#D4AF37] hover:text-[#B8941F] transition-colors flex items-center gap-2"
            >
              Download App <span aria-hidden="true" className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d] sm:text-4xl">
              Powerful Features for Modern Supply Chains
            </h2>
            <p className="mt-4 text-lg text-[#446888]">
              Everything you need to manage your B2B grocery operations efficiently.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="group rounded-2xl bg-white p-8 shadow-sm border border-[#EBF0F5] hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8E7] mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-6 w-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2d3d]">
                Direct B2B Marketplace
              </h3>
              <p className="mt-4 text-[#446888]">
                Connect manufacturers and distributors directly with shopkeepers. No intermediaries,
                better prices, faster delivery.
              </p>
            </div>
            <div className="group rounded-2xl bg-white p-8 shadow-sm border border-[#EBF0F5] hover:border-[#ffc532] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFEDBF] mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-6 w-6 text-[#ffc532]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2d3d]">
                Inventory Management
              </h3>
              <p className="mt-4 text-[#446888]">
                Real-time inventory tracking, automated reordering, and smart stock management for
                seamless operations.
              </p>
            </div>
            <div className="group rounded-2xl bg-white p-8 shadow-sm border border-[#EBF0F5] hover:border-[#0346B7] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C2E1FF] mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-6 w-6 text-[#0346B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2d3d]">
                Order Processing
              </h3>
              <p className="mt-4 text-[#446888]">
                Streamlined order processing, bulk ordering capabilities, and integrated payment
                solutions for businesses.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="text-sm font-semibold leading-6 text-[#D4AF37] hover:text-[#B8941F]"
            >
              View all features <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="group rounded-2xl bg-gradient-to-br from-[#EBF5FF] to-[#C2E1FF] p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
                  For Companies
                </h2>
                <p className="mt-6 text-lg text-[#446888]">
                  Reach shopkeepers directly, manage your distribution network, and grow your business
                  with our comprehensive platform.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-[#44CE4B] text-xl font-bold">✓</span>
                    <span className="text-[#446888]">
                      Direct access to shopkeeper networks
                    </span>
                  </li>
                  <li className="flex gap-3 group-hover:translate-x-1 transition-transform delay-75">
                    <span className="text-[#44CE4B] text-xl font-bold">✓</span>
                    <span className="text-[#446888]">
                      Automated order processing and fulfillment
                    </span>
                  </li>
                  <li className="flex gap-3 group-hover:translate-x-1 transition-transform delay-150">
                    <span className="text-[#44CE4B] text-xl font-bold">✓</span>
                    <span className="text-[#446888]">
                      Real-time analytics and reporting
                    </span>
                  </li>
                </ul>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-[#FFF4D9] to-[#FFEDBF] p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
                  For Shopkeepers
                </h2>
                <p className="mt-6 text-lg text-[#446888]">
                  Source products directly from manufacturers, get better prices, and streamline your
                  inventory management.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="text-[#44CE4B] text-xl font-bold">✓</span>
                    <span className="text-[#446888]">
                      Access to wholesale pricing and bulk discounts
                    </span>
                  </li>
                  <li className="flex gap-3 group-hover:translate-x-1 transition-transform delay-75">
                    <span className="text-[#44CE4B] text-xl font-bold">✓</span>
                    <span className="text-[#446888]">
                      Simplified ordering and inventory management
                    </span>
                  </li>
                  <li className="flex gap-3 group-hover:translate-x-1 transition-transform delay-150">
                    <span className="text-[#44CE4B] text-xl font-bold">✓</span>
                    <span className="text-[#446888]">
                      Faster delivery and reliable supply chain
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#D4AF37] to-[#B8941F] py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your supply chain?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#C2E1FF]">
              Join companies and shopkeepers using Godam SE to streamline their B2B grocery
              operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#D4AF37] transition-all hover:bg-[#F8FAFC] hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Started
              </Link>
              <Link
                href="/download"
                className="text-sm font-semibold leading-6 text-white hover:text-[#C2E1FF] transition-colors flex items-center gap-2"
              >
                Download App <span aria-hidden="true" className="transition-transform hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
