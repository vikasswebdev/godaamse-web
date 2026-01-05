export const metadata = {
  title: 'Features - Godam SE',
  description: 'Discover the powerful features of Godam SE B2B e-commerce grocery platform.',
};

export default function Features() {
  const features = [
    {
      title: 'Direct B2B Marketplace',
      description:
        'Connect manufacturers and distributors directly with shopkeepers. No intermediaries, better prices, and faster transactions.',
      details: [
        'Company-to-shopkeeper connections',
        'Real-time product catalogs',
        'Bulk ordering capabilities',
        'Wholesale pricing structures',
      ],
      iconBg: '#FFF8E7',
      iconColor: '#D4AF37',
    },
    {
      title: 'Inventory Management',
      description:
        'Comprehensive inventory management system with real-time tracking, automated alerts, and smart stock optimization.',
      details: [
        'Real-time inventory tracking',
        'Automated reordering systems',
        'Stock level alerts',
        'Multi-warehouse support',
      ],
      iconBg: '#FFEDBF',
      iconColor: '#ffc532',
    },
    {
      title: 'Order Processing',
      description:
        'Streamlined order processing workflow from placement to fulfillment, with bulk ordering and custom pricing support.',
      details: [
        'Automated order processing',
        'Bulk order management',
        'Order tracking and status updates',
        'Custom pricing and discounts',
      ],
      iconBg: '#C2E1FF',
      iconColor: '#0346B7',
    },
    {
      title: 'Payment Solutions',
      description:
        'Secure and flexible payment options designed for B2B transactions, including credit terms and invoice management.',
      details: [
        'Multiple payment methods',
        'Credit term management',
        'Invoice generation and tracking',
        'Payment history and reports',
      ],
      iconBg: '#FFF4D9',
      iconColor: '#D4AF37',
    },
    {
      title: 'Analytics & Reporting',
      description:
        'Comprehensive analytics and reporting tools to help you make data-driven decisions and optimize your operations.',
      details: [
        'Sales and revenue analytics',
        'Inventory reports',
        'Order history and trends',
        'Custom dashboard views',
      ],
      iconBg: '#FFCCD1',
      iconColor: '#ff382d',
    },
    {
      title: 'Mobile Applications',
      description:
        'Native mobile apps for iOS and Android, allowing you to manage your business on the go, anywhere, anytime.',
      details: [
        'iOS and Android apps',
        'Order management on mobile',
        'Real-time notifications',
        'Offline capability',
      ],
      iconBg: '#E7EEFB',
      iconColor: '#AC52FF',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1f2d3d] sm:text-5xl">
            Powerful Features for B2B E-commerce
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#446888]">
            Everything you need to streamline your B2B grocery operations, from order management to
            inventory tracking.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-sm border border-[#EBF0F5] hover:border-[#C9D7E3] transition-colors"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <svg
                      className="h-6 w-6"
                      style={{ color: feature.iconColor }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1f2d3d]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-[#446888]">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex gap-3">
                        <span className="text-[#44CE4B]">✓</span>
                        <span className="text-[#446888]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
              Benefits for Your Business
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-[#EBF5FF] to-[#C2E1FF] p-6">
                <h3 className="text-xl font-semibold text-[#1f2d3d]">
                  For Companies
                </h3>
                <ul className="mt-4 space-y-3 text-[#446888]">
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Expand your reach to more shopkeepers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Reduce distribution costs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Streamline order processing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Gain valuable market insights</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#FFF4D9] to-[#FFEDBF] p-6">
                <h3 className="text-xl font-semibold text-[#1f2d3d]">
                  For Shopkeepers
                </h3>
                <ul className="mt-4 space-y-3 text-[#446888]">
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Access better pricing and discounts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Simplify inventory management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Faster order processing and delivery</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#44CE4B]">•</span>
                    <span>Direct relationships with suppliers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
