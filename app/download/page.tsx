export const metadata = {
  title: 'Download App - Godam SE',
  description: 'Download the Godam SE mobile app for iOS and Android. Manage your B2B grocery operations on the go.',
};

export default function Download() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1f2d3d] sm:text-5xl">
            Download Our App
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#446888]">
            Manage your B2B grocery operations anywhere, anytime with our mobile applications for iOS and
            Android.
          </p>
        </div>
      </section>

      {/* Download Links Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* iOS App */}
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm border border-[#EBF0F5] hover:border-[#C9D7E3] transition-colors">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8941F]">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[#1f2d3d]">
                  iOS App
                </h3>
                <p className="mt-4 text-[#446888]">
                  Download from the App Store
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B8941F] shadow-sm"
                >
                  Download for iOS
                </a>
              </div>

              {/* Android App */}
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm border border-[#EBF0F5] hover:border-[#C9D7E3] transition-colors">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#44CE4B] to-[#2ea834]">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4486.9993.9993.0001.5511-.4485.9997-.9993.9997m-11.3055 0c-.5511 0-.9993-.4486-.9993-.9997s.4486-.9993.9993-.9993c.5508 0 .9993.4486.9993.9993 0 .5511-.4485.9997-.9993.9997m11.6785-6.7334h-1.9199V7.0426c0-1.4599-1.22-2.6398-2.6798-2.6398-1.4599 0-2.6798 1.1799-2.6798 2.6398v1.5654H5.8536c-.5511 0-.9993.4486-.9993.9993 0 .5511.4482.9993.9993.9993h15.1431c.5508 0 .9993-.4482.9993-.9993 0-.5508-.4485-.9993-.9993-.9993m-5.7305 0V7.0426c0-.7956.6479-1.4398 1.4398-1.4398.7938 0 1.4398.6442 1.4398 1.4398v1.5654h-2.8796m-5.7305 13.6226c0 .5511.4486.9993 1.0005.9993h9.5795c.5511 0 .9993-.4482.9993-.9993v-8.3064H5.8536v8.3064zm1.5599-5.4188c0-.2756.2239-.4995.4995-.4995h5.7295c.2756 0 .4995.2239.4995.4995s-.2239.4995-.4995.4995H7.913c-.2756.0001-.4995-.2239-.4995-.4995z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[#1f2d3d]">
                  Android App
                </h3>
                <p className="mt-4 text-[#446888]">
                  Download from Google Play
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block rounded-lg bg-[#44CE4B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2ea834] shadow-sm"
                >
                  Download for Android
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
              App Features
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-[#EBF5FF] to-white p-6 border border-[#EBF0F5]">
                <h3 className="text-lg font-semibold text-[#1f2d3d]">
                  Order Management
                </h3>
                <p className="mt-2 text-[#446888]">
                  Place, track, and manage orders directly from your mobile device.
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#FFF4D9] to-white p-6 border border-[#EBF0F5]">
                <h3 className="text-lg font-semibold text-[#1f2d3d]">
                  Real-time Notifications
                </h3>
                <p className="mt-2 text-[#446888]">
                  Get instant notifications about order updates, inventory alerts, and important messages.
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#C2E1FF] to-white p-6 border border-[#EBF0F5]">
                <h3 className="text-lg font-semibold text-[#1f2d3d]">
                  Inventory Tracking
                </h3>
                <p className="mt-2 text-[#446888]">
                  Monitor inventory levels and stock status in real-time, anywhere you are.
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#FFEDBF] to-white p-6 border border-[#EBF0F5]">
                <h3 className="text-lg font-semibold text-[#1f2d3d]">
                  Offline Capability
                </h3>
                <p className="mt-2 text-[#446888]">
                  Access key features even without an internet connection. Sync when you're back online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
