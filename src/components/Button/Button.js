import React from 'react'

const Button = ({ children, onClick, className, href }) => {
  // Si se proporciona onClick, se manejará como una función normal
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 font-semibold rounded-2xl shadow-md hover:bg-pink-400 focus:ring-opacity-75 bg-pink-300 ${className}`}
      >
        {children}
      </button>
    )
  }

  // Si se proporciona href, se mostrará como un enlace
  if (href) {
    return (
      <a
        href={href}
        className={`px-6 py-2 font-semibold rounded-2xl shadow-md hover:bg-pink-400 focus:ring-opacity-75 bg-pink-300 ${className}`}
      >
        {children}
      </a>
    )
  }

  // Por defecto, se mostrará un botón vacío si no se proporcionan onClick ni href
  return (
    <button
      className={`px-6 py-2 font-semibold rounded-2xl shadow-md hover:bg-pink-400 focus:ring-opacity-75 bg-pink-300 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
