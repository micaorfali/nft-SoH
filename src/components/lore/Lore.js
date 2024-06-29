import React from 'react'
import Image from 'next/image'

const Lore = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-20 flex flex-col md:flex-row items-center ">
      <div className="p-12 w-full md:w-1/2">
        <div
          className="relative h-full overflow-hidden"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/images/polaroid anger.jpg"
            alt="Imagen"
            width={1214}
            height={1000}
          />
        </div>
      </div>
      <div className="md:text-right w-full md:w-1/2">
        <p className="text-xl">
          Seasons of Heartbreak is an NFT collection that explores the five
          stages of grief after a breakup: Denial, Anger, Bargaining,
          Depression, and Acceptance. Inspired by personal experiences and
          enriched by a connection with nature, this collection offers a
          profound and artistic view of emotional struggle and resilience. Each
          piece of art uses a distinct visual approach and is complemented by a
          narrative that invites reflection and healing.
        </p>
      </div>
    </div>
  )
}

export default Lore
