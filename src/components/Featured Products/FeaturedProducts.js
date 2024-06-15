import React from 'react'
import Card from '../Card/Card'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      productName: 'Polaroid Kit Seasons of Heartbreak',
      price: 49.99,
      imageSrc: '/polaroids mockup.jpg'
    },
    {
      id: 2,
      productName: 'Poster Seasons of Heartbreak',
      price: 29.99,
      imageSrc: '/poster SoH.jpg'
    }
  ]
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/niebla.jpg)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto h-full items-center pt-20 pb-20">
        <h2 className="text-3xl mb-4 text-black text-center">
          Featured Products
        </h2>
        <p className="mx-64 text-lg">
          Discover our polaroid package featuring the most impactful images from
          the collection, as well as our exclusive poster mockups. Each product
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
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
