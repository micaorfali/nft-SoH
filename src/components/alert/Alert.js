import React from 'react'

const Alert = () => {
  return (
    <div className="py-8 px-6">
      <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
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
