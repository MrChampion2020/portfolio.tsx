import Image from 'next/image'
import Link from 'next/link'
import me from "../assets/champ.jpg"

export function Profile() {
  return (
    <div className="relative">
      <div
  className="h-32 sm:h-48 bg-white bg-[url('../assets/champ.jpg')] bg-cover bg-center opacity-40"
></div>


      <div className="p-4">
        <div className="absolute top-16 sm:top-24 left-4">
          <Image
            src={me}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full border-4 border-black sm:w-32 sm:h-32"
          />
        </div>

        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl font-bold text-white">Champion Aden</h2>
          <p className="text-gray-500">@sirchampionad</p>
          <p className="mt-2 text-sm sm:text-base text-white">
            Full Stack Developer | React | Node.js | TypeScript Enthusiast
          </p>
          <div className="flex flex-wrap gap-y-1 gap-x-4 mt-2 text-gray-500 text-sm">
            <span>📍 Lagos, Nigeria</span>
            <Link href="https://github.com/mrchampion2020" className="hover:underline">
              🔗 github.com/mrchampion
            </Link>
            <span>📅 Joined September 2016</span>
          </div>
          <div className="flex space-x-4 mt-2 text-sm sm:text-base text-white">
            <span><strong>0</strong> <span className="text-gray-500">Following</span></span>
            <span><strong>155K</strong> <span className="text-gray-500">Followers</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

