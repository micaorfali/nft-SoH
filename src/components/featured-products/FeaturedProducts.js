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

  const [modal, setModal] = useState(false)

  const showInfo = () => {
    setModal(true)
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
          <h2 className="text-3xl mb-4 text-black text-center font-Swanky_and_Moo_Moo">
            Featured Products
          </h2>
          <p className="mx-64 text-lg">
            Discover our polaroid package featuring the most impactful images
            from the collection, as well as our exclusive poster mockups. Each
            product is designed to bring a fragment of this emotional journey
            into your personal space.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Card
              key={product.id}
              productName={product.productName}
              price={product.price}
              imageSrc={product.imageSrc}
              showInfo={showInfo}
            />
          ))}
        </div>
      </div>
      {modal && <Modal />}
    </section>
  )
}

export default FeaturedProducts
