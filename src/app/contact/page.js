/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import Button from '@/components/button/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Contact = ({}) => {
  return (
    <div>
      <NavBar />
      <div className="relative pt-28 pb-36 bg-blueGray-100 overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <p className="mb-6 text-xl text-center font-semibold tracking-px">
            Contact Us
          </p>
          <div className="px-11 pt-9 pb-11 bg-white bg-opacity-80 md:max-w-xl mx-auto rounded-4xl shadow-12xl">
            <h3 className="mb-8 text-base text-center font-semibold leading-normal md:max-w-sm mx-auto">
              Have a question or feedback? We'd love to hear from you! Fill out
              the form below and we'll get back to you as soon as possible.
            </h3>

            <Formik
              initialValues={{ email: '', name: '', message: '' }}
              validate={(values) => {
                const errors = {}
                if (!values.name) {
                  errors.name = 'Please, fill with your name'
                }
                if (!values.email) {
                  errors.email = 'Please, fill with your email'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email =
                    "This is not a valid email. It should contain a '@' and '.'"
                }
                if (!values.message) {
                  errors.message = 'Please write your message'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  handleSubmit(values)
                  setSubmitting(false)
                }, 1000)
              }}
            >
              {({ isValid, isSubmitting }) => (
                <Form id="my-form">
                  <label className="block mb-4">
                    <Field
                      className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                      placeholder="First & last name"
                      type="text"
                      name="name"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="text-red-500 text-xs pl-1"
                    />
                  </label>
                  <label className="block mb-4">
                    <Field
                      className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg focus:ring focus:ring-indigo-300"
                      placeholder="Email*"
                      type="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-500 text-xs pl-1"
                    />
                  </label>
                  <label className="block mb-4">
                    <Field
                      as="textarea"
                      className="p-4 w-full h-48 font-medium text-gray-500 placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 resize-none rounded-lg focus:ring focus:ring-indigo-300"
                      placeholder="Write message"
                      name="message"
                    />
                    <ErrorMessage
                      name="message"
                      component="span"
                      className="text-red-500 text-xs pl-1"
                    />
                  </label>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-6 py-2 text-white bg-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      disabled={!isValid || isSubmitting}
                    >
                      Send
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
