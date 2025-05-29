import Link from "next/link"
import { ArrowLeft, MapPin, Waves } from "lucide-react"
import Image from "next/image"

export default function LakeViewPage() {
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
            <Waves className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Lake View</h1>
          </div>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Crystal Lake</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Serene lake with mountain reflections"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Serene Waters</h2>
              <p className="text-gray-600 leading-relaxed">
                Crystal Lake is a pristine alpine lake nestled between rolling hills and distant mountains. The
                crystal-clear waters perfectly mirror the sky and surrounding landscape, creating a scene of
                unparalleled beauty. This peaceful destination is ideal for meditation, photography, or simply enjoying
                the tranquil sounds of nature.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Lake Activities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Peaceful lakeside walking paths</li>
                <li>• Excellent fishing opportunities</li>
                <li>• Kayaking and canoeing</li>
                <li>• Picnic areas with stunning views</li>
                <li>• Bird watching and nature photography</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Lake Facts</h4>
              <p className="text-blue-700 text-sm">
                The lake spans 2.5 square kilometers with a maximum depth of 45 meters. Water temperature is perfect for
                swimming during summer months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
