export const metadata = {
  title: 'Terms of Service - Godam SE',
  description: 'Terms of Service for Godam SE B2B e-commerce grocery platform.',
};

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Terms of Service
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
                  1. Agreement to Terms
                </h2>
                <p className="mt-4">
                  By accessing or using the Godam SE B2B e-commerce grocery platform ("Service"), you agree to be
                  bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then
                  you may not access the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  2. Use of the Service
                </h2>
                <p className="mt-4">You agree to use the Service only for lawful purposes and in accordance with
                  these Terms. You agree not to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                  <li>Use the Service for any fraudulent or unlawful purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  3. Account Registration
                </h2>
                <p className="mt-4">
                  To access certain features of the Service, you must register for an account. You agree to
                  provide accurate, current, and complete information during registration and to update such
                  information to keep it accurate, current, and complete.
                </p>
                <p className="mt-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all
                  activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  4. B2B Transactions
                </h2>
                <p className="mt-4">
                  The Service facilitates B2B transactions between companies and shopkeepers. All transactions
                  are subject to the terms agreed upon between the parties. Godam SE acts as a platform provider
                  and is not a party to these transactions.
                </p>
                <p className="mt-4">
                  You are responsible for all transactions made through your account, including payment
                  obligations and fulfillment of orders.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  5. Payment Terms
                </h2>
                <p className="mt-4">
                  Payment terms are agreed upon between buyers and sellers using the platform. All payments are
                  processed through our payment system, and you agree to comply with all applicable payment terms
                  and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  6. Intellectual Property
                </h2>
                <p className="mt-4">
                  The Service and its original content, features, and functionality are owned by Godam SE and are
                  protected by international copyright, trademark, patent, trade secret, and other intellectual
                  property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  7. Limitation of Liability
                </h2>
                <p className="mt-4">
                  To the maximum extent permitted by law, Godam SE shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
                  whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible
                  losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  8. Termination
                </h2>
                <p className="mt-4">
                  We may terminate or suspend your account and access to the Service immediately, without prior
                  notice or liability, for any reason, including if you breach these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  9. Changes to Terms
                </h2>
                <p className="mt-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If
                  a revision is material, we will provide at least 30 days notice prior to any new terms taking
                  effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">
                  10. Governing Law
                </h2>
                <p className="mt-4">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard
                  to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900">11. Contact Information</h2>
                <p className="mt-4">
                  If you have any questions about these Terms, please contact us at{' '}
                  <a
                    href="mailto:legal@godamse.com"
                    className="text-zinc-900 underline hover:text-zinc-700"
                  >
                    legal@godamse.com
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

