import React from 'react'
import Button from '../button/Button'
import ArrowRight from '../../../public/icons/ArrowRight'

const Hero = () => {
  return (
    <section
      className="relative bg-cover mt-10 bg-bottom"
      style={{
        backgroundImage: 'url(/images/Hero1.jpg)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center h-100 py-20">
        <div className="mt-9 mb-9 text-black p-8 w-full md:w-3/4 self-center text-center items-center flex flex-col">
          <h1 className="text-3xl md:text-5xl mb-2 font-Swanky_and_Moo_Moo">
            Explore the Seasons of Heartbreak
          </h1>
          <div className="my-6">
            <h2 className="md:w-1/2" style={{ margin: '0 auto' }}>
              Immerse yourself in an emotional journey through art. Each NFT
              captures a unique stage of grief, transforming pain into beauty.
            </h2>
          </div>
          <Button
            text="Shop Now"
            url="https://testnets.opensea.io/collection/seasonsofheartbreak"
            newTab
            iconPosition="right"
            icon={<ArrowRight />}
          ></Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
