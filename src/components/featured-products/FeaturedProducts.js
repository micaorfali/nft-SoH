import React, { useState } from 'react'
import Card from '../card/Card'
import Modal from '../modal/Modal'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      productName: 'Polaroid Kit Seasons of Heartbreak',
      price: 49.99,
      imageSrc: '/images/polaroidkit.jpg'
    },
    {
      id: 2,
      productName: 'Poster Seasons of Heartbreak',
      price: 29.99,
      imageSrc: '/images/poster SoH.jpg'
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
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(../../images/niebla.jpg)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="pt-20 pb-20">
        <div className="container mx-auto h-full items-centers pb-10">
          <h2 className="text-4xl mb-4 text-black text-center font-Swanky_and_Moo_Moo">
            Featured Products
          </h2>
          <p className="mx-20 md:mx-64 text-lg">
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
