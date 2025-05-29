import Link from "next/link"
import { ArrowLeft, MapPin, Sun } from "lucide-react"
import Image from "next/image"

export default function DesertOasisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Map
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sun className="w-8 h-8 text-orange-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Desert Oasis</h1>
          </div>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Sahara Desert</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Desert oasis with palm trees and water"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Hidden Paradise</h2>
              <p className="text-gray-600 leading-relaxed">
                Discover this remarkable desert oasis, a true miracle of nature where life flourishes in the heart of
                the arid landscape. Palm trees sway gently around a natural spring, creating a cool refuge from the
                desert heat. This extraordinary location offers a unique contrast between the harsh beauty of the desert
                and the lush greenery of the oasis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Oasis Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Natural freshwater spring</li>
                <li>• Ancient date palm groves</li>
                <li>• Traditional Bedouin camping experiences</li>
                <li>• Spectacular desert sunset views</li>
                <li>• Unique desert flora and fauna</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-2">Visit Tips</h4>
              <p className="text-orange-700 text-sm">
                Best visited during cooler months (October to March). Bring sun protection and plenty of water. Guided
                tours available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
