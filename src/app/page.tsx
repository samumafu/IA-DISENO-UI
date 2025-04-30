"use client"

import Image from "next/image"
import { ArrowRight, MapPin, Star, Menu } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("TOUR")
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const destinations = [
    {
      id: 1,
      name: "Forest Wild Life",
      location: "NRT, Indonesia",
      rating: 4.7,
      image: "/forest-island.png",
    },
    {
      id: 2,
      name: "Santorini Views",
      location: "Santorini, Greece",
      rating: 4.9,
      image: "/santorini.png",
    },
    {
      id: 3,
      name: "Tropical Paradise",
      location: "Bali, Indonesia",
      rating: 4.8,
      image: "/tropical-beach.png",
    },
    {
      id: 4,
      name: "Mountain Retreat",
      location: "Swiss Alps, Switzerland",
      rating: 4.6,
      image: "/mountains.png",
    },
    {
      id: 5,
      name: "City Exploration",
      location: "Tokyo, Japan",
      rating: 4.5,
      image: "/city.png",
    },
    {
      id: 6,
      name: "Desert Adventure",
      location: "Dubai, UAE",
      rating: 4.4,
      image: "/desert.png",
    },
  ]

  const visibleDestinations = () => {
    const itemsPerPage = 3
    const startIndex = currentDestinationIndex % destinations.length
    const items = []

    for (let i = 0; i < itemsPerPage; i++) {
      const index = (startIndex + i) % destinations.length
      items.push(destinations[index])
    }

    return items
  }

  const nextDestination = () => {
    setCurrentDestinationIndex((prev) => (prev + 1) % destinations.length)
  }

  const prevDestination = () => {
    setCurrentDestinationIndex((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">UIKSHUVO</h1>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden z-20" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-10 md:hidden flex flex-col items-center justify-center">
            <button className="absolute top-6 right-4" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <span className="text-2xl">×</span>
            </button>
            <nav className="flex flex-col items-center space-y-6">
              {["ABOUT", "TOUR", "PACKAGE", "CONTACT"].map((item) => (
                <button
                  key={item}
                  className={`text-lg font-medium transition-colors ${
                    activeTab === item ? "text-blue-500" : "hover:text-blue-500"
                  }`}
                  onClick={() => {
                    setActiveTab(item)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["ABOUT", "TOUR", "PACKAGE", "CONTACT"].map((item) => (
            <button
              key={item}
              className={`text-sm font-medium transition-colors ${
                activeTab === item ? "text-blue-500" : "hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Book Trip
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-4">
        <div className="relative bg-sky-100 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-16 md:w-1/2 z-10">
              <p className="text-sm text-gray-600 mb-2">ELEVATE YOUR TRAVEL JOURNEY</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Experience
                <br />
                The Magic Of
                <br />
                Flight!
              </h2>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                  Book A Trip Now
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="sr-only">Play video</span>
                  <div className="w-3 h-3 border-t-transparent border-l-transparent border-r-2 border-b-2 border-black transform rotate-[135deg]"></div>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/airplane.png"
                alt="Airplane in the sky"
                width={600}
                height={500}
                className="object-cover h-full"
                priority
              />
              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg max-w-xs hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Know More</h3>
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">Awesome Places</h4>
                  <p className="text-xs text-gray-600 mt-1">Discover The World One Adventure At A Time!</p>
                </div>
                <div className="flex mt-2 space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full overflow-hidden">
                    <Image src="/beach-thumb.png" alt="Beach" width={32} height={32} className="object-cover" />
                  </div>
                  <div className="w-8 h-8 bg-blue-200 rounded-full overflow-hidden">
                    <Image src="/mountain-thumb.png" alt="Mountain" width={32} height={32} className="object-cover" />
                  </div>
                  <div className="w-8 h-8 bg-blue-300 rounded-full overflow-hidden">
                    <Image src="/city-thumb.png" alt="City" width={32} height={32} className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center space-y-8">
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-blue-100 transition-colors">
              <span className="text-xs">1</span>
            </button>
            <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:bg-opacity-50 transition-colors">
              <span className="text-xs">2</span>
            </button>
            <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:bg-opacity-50 transition-colors">
              <span className="text-xs">3</span>
            </button>
          </div>
        </div>
      </section>

      


      {/* Partners */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm font-medium">Follow</span>
            <button className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs hover:bg-blue-600 transition-colors">
              f
            </button>
            <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300 transition-colors">
              in
            </button>
            <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300 transition-colors">
              p
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Image src="/airbnb-logo.png" alt="Airbnb" width={80} height={30} />
            <Image src="/booking-logo.png" alt="Booking.com" width={100} height={30} />
            <Image src="/trivago-logo.png" alt="Trivago" width={80} height={30} />
            <Image src="/expedia-logo.png" alt="Expedia" width={80} height={30} />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular Destination</h2>
            <p className="text-gray-600 mt-1">Unleash Your Wanderlust With SkyWings</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={prevDestination}
              aria-label="Previous destinations"
            >
              <ArrowRight className="h-4 w-4 transform rotate-180" />
            </button>
            <button
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              onClick={nextDestination}
              aria-label="Next destinations"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleDestinations().map((destination) => (
            <article
              key={destination.id}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{destination.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Journey To The Skies Made Simple!</h2>
          <p className="text-gray-600">
            Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique
            Experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center p-6 text-center rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-bold text-lg">Find Your Destination</h3>
          </div>

          <div className="bg-blue-500 text-white rounded-xl p-6 transform md:translate-y-[-20px] hover:bg-blue-600 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎫</span>
            </div>
            <h3 className="font-bold text-lg mb-4">Book A Ticket</h3>
            <p className="text-sm mb-6">
              Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique
              Experiences.
            </p>
            <button className="text-sm font-medium uppercase hover:underline">Learn More</button>
          </div>

          <div className="flex flex-col items-center justify-center p-6 text-center rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="font-bold text-lg">Pay & Start Journey</h3>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 relative rounded-xl overflow-hidden">
            <Image src="/beach-vacation.png" alt="Beach vacation" width={300} height={400} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-xl">
              <p className="text-blue-500 font-bold text-xl">20% OFF</p>
              <p className="text-xs text-gray-600">Till 08 September, 2023</p>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">UNLEASH WANDERLUST WITH SKYWINGS</h2>
            <p className="text-gray-600 mb-8 max-w-xl">
              Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique
              Experiences.
            </p>
            <button className="bg-blue-100 text-black px-8 py-4 rounded-full inline-flex items-center space-x-2 font-medium hover:bg-blue-200 transition-colors">
              <span>Book A Flight Now</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
