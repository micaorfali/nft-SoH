'use client'
import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import Button from '@/components/Button/Button'

const contact = () => {
  return (
    <div>
      <NavBar />
      <div className="relative pt-28 pb-36 bg-blueGray-100 overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <p className="mb-6 text-xl text-center font-semibold tracking-px">
            Contact Us
          </p>
          <form className="px-11 pt-9 pb-11 bg-white bg-opacity-80 md:max-w-xl mx-auto rounded-4xl shadow-12xl">
            <h3 className="mb-8 text-base text-center font-semibold leading-normal md:max-w-sm mx-auto">
              Have a question or feedback? We'd love to hear from you! Fill out
              the form below and we'll get back to you as soon as possible.
            </h3>
            <label className="block mb-4">
              <input
                className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                id="contactInput5-1"
                type="text"
                placeholder="First & last name"
              />
            </label>
            <label className="block mb-4">
              <input
                className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                id="contactInput5-2"
                type="text"
                placeholder="First & last name"
              />
            </label>
            <label className="block mb-4">
              <textarea
                className="p-4 w-full h-48 font-medium text-gray-500 placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 resize-none rounded-lg focus:ring focus:ring-indigo-300"
                id="contactInput3-3"
                placeholder="Write message"
              ></textarea>
            </label>
            <div className="text-center">
              <Button>Send Message</Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contact
