import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'

const Gallery = () => {
  return (
    <div className="py-10 pb-20 bg-gray-50">
      <h2 className="text-3xl md:text-5xl text-black text-center font-Swanky_and_Moo_Moo">
        Our art pieces
      </h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 md:w-1/5 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/1.png"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/5 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/2.png"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/5 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center "
                src="/images/3.png"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/5 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/4.png"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex w-1/2 md:w-1/5 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/5.png"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <Button
          text="Shop Now"
          url="https://testnets.opensea.io/collection/seasonsofheartbreak"
          newTab
        ></Button>
      </div>
    </div>
  )
}

export default Gallery
