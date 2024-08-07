import React from 'react'
import Image from 'next/image'

const Card = ({ imageSrc, productName, price, showInfo }) => {
  return (
    <div
      onClick={showInfo}
      className="max-w-xs rounded overflow-hidden shadow-lg m-4 cursor-pointer"
    >
      <Image
        className="w-full"
        src={imageSrc}
        alt={productName}
        width={500}
        height={800}
      />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  )
}

export default Card
