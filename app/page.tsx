import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-beach.jpg"
            alt="Avista Beach Resort"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Paradise</h1>
            <p className="text-xl mb-8">Experience luxury and tranquility at Avista Beach Resort</p>
            <Link href="/rooms" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Resort Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">🏖️</div>
              <h3 className="text-xl font-semibold mb-2">Private Beach Access</h3>
              <p className="text-gray-600">Enjoy our exclusive beach area with loungers and umbrellas</p>
            </div>
            <div className="text-center">
              <div className="mb-4">🏊‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">Infinity Pool</h3>
              <p className="text-gray-600">Swim in our stunning oceanfront infinity pool</p>
            </div>
            <div className="text-center">
              <div className="mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
              <p className="text-gray-600">Experience world-class cuisine at our restaurant</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Avista Beach Resort</h2>
              <p className="text-gray-600 mb-4">
                Nestled on the pristine shores of Paradise Beach, Avista Beach Resort offers an unparalleled luxury experience.
                Our resort combines modern amenities with natural beauty to create the perfect getaway destination.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're seeking a romantic escape, family vacation, or a peaceful retreat, our dedicated staff is here
                to ensure your stay exceeds expectations.
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/resort-view.jpg"
                alt="Resort Overview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 