import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../button/Button'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full px-4 py-16 md:py-40 bg-black bg-opacity-50 overflow-y-auto z-50">
        <div className="relative max-w-3xl mx-auto bg-white rounded-lg overflow-hidden flex">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="w-1/2">
            <Image
              className="h-full w-full object-cover"
              src=""
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-1/2 flex flex-col p-8">
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-semibold text-coolGray-800 leading-7">
                Milk and honey
              </h3>
              <p className="text-sm text-coolGray-500 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa.
              </p>
            </div>
            <div className="flex flex-col flex-grow justify-between">
              <div className="mb-4">
                <div className="flex mb-3 items-center justify-between">
                  <span className="text-sm font-medium text-coolGray-500">
                    Size
                  </span>
                  <span className="text-sm font-medium text-coolGray-900">
                    2.5 MB
                  </span>
                </div>
                <div className="flex mb-3 items-center justify-between">
                  <span className="text-sm font-medium text-coolGray-500">
                    Length
                  </span>
                  <span className="text-sm font-medium text-coolGray-900">
                    88 Pages
                  </span>
                </div>
              </div>
              <div>
                <Button text="Shop now" url="" newTab></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
