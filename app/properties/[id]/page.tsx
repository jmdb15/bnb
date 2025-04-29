import Image from "next/image"

import { beach, window } from "@/public"

import ReservationSidebar from "@/app/components/property/ReservationSidebar"

const page = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image 
          fill
          src={beach}
          className="w-full h-full"
          alt="some"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property name</h1>

          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedroom - 1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              alt="some"
              width={50}
              height={50}
              src={window}
              className="cursor-pointer bg-yellow-300 rounded-full border hover:border-2 border-gray-700"
            />

            <p><strong>John Doe</strong> is your host</p>
          </div>

          <hr />

          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas repudiandae neque. Iure nostrum placeat voluptatem vitae aut ab quo!
          </p>
        </div>

        <ReservationSidebar />
      </div>
    </main>
  )
}

export default page