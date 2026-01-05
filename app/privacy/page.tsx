export const metadata = {
  title: 'Privacy Policy - Godam SE',
  description: 'Privacy Policy for Godam SE B2B e-commerce grocery platform.',
};

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-zinc-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-zinc max-w-none lg:prose-lg">
            <div className="space-y-8 text-zinc-600">
              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  1. Introduction
                </h2>
                <p className="mt-4">
                  Godam SE ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you use our B2B
                  e-commerce grocery platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  2. Information We Collect
                </h2>
                <p className="mt-4">We collect information that you provide directly to us, including:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Company name, business information, and contact details</li>
                  <li>Account registration information</li>
                  <li>Order and transaction information</li>
                  <li>Payment information</li>
                  <li>Communications with us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  3. How We Use Your Information
                </h2>
                <p className="mt-4">We use the information we collect to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and fulfill orders</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Detect and prevent fraud and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="mt-4">
                  We do not sell your personal information. We may share your information in the following
                  circumstances:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transfer</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  5. Data Security
                </h2>
                <p className="mt-4">
                  We implement appropriate technical and organizational security measures to protect your
                  information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  6. Your Rights
                </h2>
                <p className="mt-4">You have the right to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="mt-4">
                  We use cookies and similar tracking technologies to track activity on our platform and hold
                  certain information. You can instruct your browser to refuse all cookies or to indicate when a
                  cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="mt-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">9. Contact Us</h2>
                <p className="mt-4">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a
                    href="mailto:privacy@godamse.com"
                    className="text-zinc-900 underline hover:text-zinc-700"
                  >
                    privacy@godamse.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

