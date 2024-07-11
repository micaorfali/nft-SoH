import React from 'react'
import Image from 'next/image'

const Lore = () => {
  return (
    <div className="py-8 px-20 md:px-20 lg:px-40 flex flex-col md:flex-row items-center bg-gray-50">
      <div className="p-8 w-full md:w-1/2">
        <div className="relative h-full overflow-hidden">
          <Image
            src="/images/Polaroid enojo.png"
            alt="Imagen"
            width={1214}
            height={1000}
          />
        </div>
      </div>
      <div className="md:text-right w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl mb-2 font-Swanky_and_Moo_Moo">
          About the project
        </h2>
        <p className="text-sm">
          Seasons of Heartbreak is an NFT collection that
          <strong>explores the five stages of grief after a breakup</strong>:
          Denial, Anger, Bargaining, Depression, and Acceptance. Inspired by
          personal experiences and enriched by a connection with nature, this
          collection offers a
          <strong>
            profound and artistic view of emotional struggle and resilience.
          </strong>
          Each piece of art uses a distinct visual approach and is complemented
          by a narrative that invites reflection and healing.
        </p>
      </div>
    </div>
  )
}

export default Lore
