import Image from "next/image"

import { beach } from "@/public"
import PropertyList from "../components/property/PropertyList"

const Properties = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
      <h1 className='my-6 mb-2 text-2xl'>My Reservations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PropertyList />
      </div>
    </main>
  )
}

export default Properties