import Link from "next/link"
import { ArrowLeft, MapPin, Trees } from "lucide-react"
import Image from "next/image"

export default function ForestTrailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Map
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Trees className="w-8 h-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Forest Trail</h1>
          </div>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Woodland Reserve</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Forest trail through tall trees"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Enchanted Woodland</h2>
              <p className="text-gray-600 leading-relaxed">
                Wander through this magical forest trail where towering ancient trees create a natural cathedral. The
                path meanders for 5 kilometers through diverse ecosystems, from dense woodland to sunny clearings where
                butterflies dance among wildflowers. This trail is perfect for nature lovers seeking tranquility and
                connection with the natural world.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Trail Highlights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 5km well-marked trail suitable for all skill levels</li>
                <li>• Ancient oak and pine trees over 200 years old</li>
                <li>• Diverse bird species and wildlife</li>
                <li>• Seasonal wildflower displays</li>
                <li>• Peaceful stream crossings with wooden bridges</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Trail Information</h4>
              <p className="text-green-700 text-sm">
                The trail is open year-round and takes approximately 2-3 hours to complete. Wear comfortable walking
                shoes and bring water.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
