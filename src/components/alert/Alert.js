import React, { useState, useEffect } from 'react'

const Alert = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 p-6">
      <div
        className={`transform transition-transform duration-500 ease-in-out ${show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg shadow-lg`}
      >
        <div className="flex items-center">
          <h3 className="text-green-800 font-medium">
            The form was sent successfully
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Alert
