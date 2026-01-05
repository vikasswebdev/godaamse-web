export const metadata = {
  title: 'About Us - Godam SE',
  description: 'Learn about Godam SE and what we do. B2B e-commerce grocery platform connecting companies to shopkeepers.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1f2d3d] sm:text-5xl">
            About Godam SE
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#446888]">
            We're transforming the B2B grocery supply chain, connecting companies directly with shopkeepers.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full"></div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
                What We Do
              </h2>
            </div>
            <div className="mt-8 space-y-6 text-lg text-[#446888]">
              <p>
                Godam SE is a comprehensive B2B e-commerce platform designed specifically for the grocery
                industry. We bridge the gap between companies (manufacturers and distributors) and shopkeepers,
                creating a direct connection that benefits both parties.
              </p>
              <p>
                Our platform eliminates traditional intermediaries, allowing companies to reach shopkeepers
                directly. This results in better pricing, faster delivery, and more efficient supply chain
                management for all parties involved.
              </p>
              <p>
                We provide a complete suite of tools including inventory management, order processing,
                payment solutions, and analytics - everything needed to run a modern B2B grocery operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-[#EBF5FF] to-[#C2E1FF] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-[#D4AF37] rounded-full"></div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
                  Our Mission
                </h2>
              </div>
              <p className="mt-6 text-lg text-[#446888]">
                To revolutionize the B2B grocery supply chain by creating a seamless, efficient, and
                transparent marketplace that empowers companies and shopkeepers to succeed together. We
                believe in removing barriers, reducing costs, and improving relationships in the grocery
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-[#FFF4D9] to-[#FFEDBF] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-[#ffc532] rounded-full"></div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
                  Our Vision
                </h2>
              </div>
              <p className="mt-6 text-lg text-[#446888]">
                To become the leading B2B e-commerce platform for the grocery industry, where every company
                and shopkeeper can connect, trade, and grow together in a digital-first marketplace that
                prioritizes efficiency, transparency, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
