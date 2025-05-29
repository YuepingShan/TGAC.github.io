import Link from "next/link"
import { ArrowLeft, MapPin, Mountain } from "lucide-react"
import Image from "next/image"

export default function MountainPeakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Map
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Mountain className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Mountain Peak</h1>
          </div>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Alpine Region</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Mountain Peak landscape"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Majestic Heights</h2>
              <p className="text-gray-600 leading-relaxed">
                Standing at 3,200 meters above sea level, this magnificent mountain peak offers breathtaking panoramic
                views of the surrounding alpine landscape. The journey to the summit is challenging but rewarding, with
                pristine hiking trails winding through ancient forests and meadows filled with wildflowers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Spectacular sunrise and sunset views</li>
                <li>• Well-maintained hiking trails</li>
                <li>• Wildlife spotting opportunities</li>
                <li>• Photography-perfect landscapes</li>
                <li>• Fresh mountain air and peaceful atmosphere</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Best Time to Visit</h4>
              <p className="text-blue-700 text-sm">
                May through September offers the best weather conditions with clear skies and comfortable temperatures
                for hiking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
