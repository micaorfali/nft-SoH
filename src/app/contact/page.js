/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import Button from '@/components/button/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Contact = ({ handleSubmit }) => {
  return (
    <div>
      <NavBar />
      <div className="relative pt-28 pb-36 bg-blueGray-100 overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <p className="mb-6 text-xl text-center font-semibold tracking-px">
            Contact Us
          </p>
          {/* <form className="px-11 pt-9 pb-11 bg-white bg-opacity-80 md:max-w-xl mx-auto rounded-4xl shadow-12xl">
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
          </form> */}

          <Formik
            initialValues={{ email: '', name: '', phone: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.name) {
                errors.name = 'Ingresá tu nombre por favor'
              }
              if (!values.phone) {
                errors.phone = 'Ingresá tu celular por favor'
              }
              if (!values.email) {
                errors.email = 'Ingresá tu mail por favor'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email =
                  "Este email no es válido, por favor, reingresalo. Debe contener un '@' y un '.'"
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
                <Field placeholder="Nombre*" type="text" name="name" />
                <ErrorMessage name="name" component="span" />
                <Field placeholder="Email*" type="email" name="email" />
                <ErrorMessage name="email" component="span" />
                <Field placeholder="Telefono*" type="text" name="phone" />
                <ErrorMessage name="phone" component="span" />
                <button type="submit" disabled={!isValid || isSubmitting}>
                  COMPRAR
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
