import Link from "next/link"
import { MapPin } from "lucide-react"

export default function HomePage() {
  const locations = [
    { id: "location-1", name: "Mountain Peak", x: "20%", y: "30%" },
    { id: "location-2", name: "Forest Trail", x: "60%", y: "45%" },
    { id: "location-3", name: "Lake View", x: "40%", y: "70%" },
    { id: "location-4", name: "Desert Oasis", x: "75%", y: "25%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Amazing Destinations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our interactive map! Click on any location marker to discover beautiful destinations around the
            world. Each location offers unique experiences and breathtaking views.
          </p>
        </header>

        {/* Interactive Map */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Interactive Map</h2>

          <div className="relative w-full h-96 bg-gradient-to-br from-green-200 via-blue-200 to-yellow-100 rounded-lg border-2 border-gray-300 overflow-hidden">
            {/* Map Background Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-green-600 rounded-full opacity-30"></div>
            <div className="absolute top-12 right-8 w-20 h-12 bg-blue-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-8 left-12 w-24 h-8 bg-yellow-400 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-orange-400 rounded-full opacity-35"></div>

            {/* Location Markers */}
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/${location.id}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: location.x, top: location.y }}
              >
                <div className="relative">
                  <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg group-hover:text-red-600 transition-colors" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {location.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/${location.id}`}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors shadow-sm hover:shadow-md"
            >
              <MapPin className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">{location.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Click to explore</p>
            </Link>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Destinations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Natural Wonders</h3>
              <p className="text-gray-600">
                Our carefully selected destinations showcase the most breathtaking natural landscapes. From towering
                mountain peaks to serene lakes, each location offers a unique perspective on nature's beauty.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Adventure Awaits</h3>
              <p className="text-gray-600">
                Whether you're seeking peaceful contemplation or thrilling adventures, our destinations cater to all
                types of travelers. Discover hidden gems and create unforgettable memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
