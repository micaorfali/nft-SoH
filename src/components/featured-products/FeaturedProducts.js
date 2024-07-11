import React, { useState } from 'react'
import Card from '../card/Card'
import Modal from '../modal/Modal'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      productName: 'Polaroid Kit Seasons of Heartbreak',
      price: 5.99,
      imageSrc: '/images/polaroidkit.jpg',
      description:
        "Experience the journey through heartbreak with our 'Seasons of Heartbreak' Polaroid Kit. Includes five unique Polaroid-style prints, each representing a stage of grief: Denial, Anger, Bargaining, Depression, and Acceptance. Perfect for art lovers and those navigating their own emotional paths."
    },
    {
      id: 2,
      productName: 'Poster Seasons of Heartbreak',
      price: 4.99,
      imageSrc: '/images/poster SoH.jpg',
      description:
        "Decorate your space with the 'Seasons of Heartbreak' poster. This high-quality print features imagery from the five stages of grief: Denial, Anger, Bargaining, Depression, and Acceptance. A beautiful blend of nature and emotion, perfect for any room."
    }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [modalInfo, setModalInfo] = useState()

  const showInfo = (id) => {
    setIsOpen(!isOpen)
    setModalInfo(products.find((item) => item.id === id))
  }

  return (
    <section
      className="relative bg-cover bg-bottom"
      style={{
        backgroundImage: 'url(../../images/niebla2.jpg)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="pt-20 pb-20">
        <div className="container mx-auto h-full items-centers pb-10">
          <h2 className="text-3xl md:text-5xl mb-4 text-black text-center font-Swanky_and_Moo_Moo">
            Featured Products
          </h2>
          <p className="mx-8 md:mx-64 text-lg text-center">
            Discover our polaroid package featuring the most impactful images
            from the collection, as well as our exclusive poster. Each product
            is designed to bring a fragment of this emotional journey into your
            personal space.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Card
              key={product.id}
              productName={product.productName}
              price={product.price}
              imageSrc={product.imageSrc}
              showInfo={() => showInfo(product.id)}
              description={product.description}
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} showModal={showInfo} modalInfo={modalInfo} />
      )}
    </section>
  )
}

export default FeaturedProducts
