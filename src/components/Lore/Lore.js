import React from 'react'
import Image from 'next/image'

const Lore = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 flex items-center">
      <div className="flex-shrink-0 pr-4">
        <div className="relative h-full w-1/2 overflow-hidden">
          <Image
            src="/images/polaroid anger.jpg"
            alt="Imagen"
            layout="responsive"
            objectFit="cover"
            width={1214}
            height={1000}
          />
        </div>
      </div>
      <div className="flex-grow text-right w-1/2">
        <p className="text-2xl">
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
