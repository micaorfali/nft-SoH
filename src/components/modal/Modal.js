import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'

const Modal = () => {
  return (
    <div class="fixed top-0 left-0 w-full h-full px-4 py-16 md:py-40 bg-black bg-opacity-50 overflow-y-auto z-50">
      <div class="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
        <div class="relative">
          <Image
            class="h-40 w-full object-cover"
            src=""
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/6 border-b md:border-b-0 md:border-r border-coolGray-100">
            <div class="py-10 pl-10 pr-8">
              <h3 class="mb-2 text-xl font-semibold text-coolGray-800 leading-7">
                Milk and honey
              </h3>
              <p class="mb-4 text-sm text-coolGray-500 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa.
              </p>
            </div>
          </div>
          <div class="w-full md:w-2/6 pt-6 pb-10 px-8">
            <div>
              <div class="mb-10">
                <div class="flex mb-3 items-center justify-between">
                  <span class="text-sm font-medium text-coolGray-500">
                    Size
                  </span>
                  <span class="text-sm font-medium text-coolGray-900">
                    2.5 MB
                  </span>
                </div>
                <div class="flex mb-3 items-center justify-between">
                  <span class="text-sm font-medium text-coolGray-500">
                    Lenght
                  </span>
                  <span class="text-sm font-medium text-coolGray-900">
                    88 Pages
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-coolGray-500">
                    Last Update
                  </span>
                  <span class="text-sm font-medium text-coolGray-900">
                    12 Days ago
                  </span>
                </div>
              </div>

              <Button text="Shop now" url="" newTab></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
