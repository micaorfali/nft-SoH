import React from 'react'
import Button from '../button/Button'
import ArrowRight from '../../../public/icons/ArrowRight'

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/Hero.jpg)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="mt-9 mb-9 text-left text-black p-8 w-full md:w-1/2">
          <h1 className="text-2xl mb-8">
            Explore the Seasons of Heartbreak and immerse yourself in an
            emotional journey through art. Each NFT captures a unique stage of
            grief, transforming pain into beauty.
          </h1>
          <Button
            text="Shop All"
            url="https://opensea.io/"
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
