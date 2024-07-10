import React from 'react'
import Link from 'next/link'

const Button = ({ text, url, newTab, icon, iconPosition }) => {
  return (
    <Link
      href={url}
      target={!!newTab && '_blank'}
      className={`px-8 py-2 font-semibold rounded-2xl shadow-md
        hover:bg-pink-400 focus:ring-opacity-75 bg-pink-300 flex content-center text-lg
        ${
          iconPosition === 'left'
            ? 'flex-row'
            : iconPosition === 'right'
              ? 'flex-row-reverse'
              : ''
        }
        `}
      style={{ width: 'fit-content' }}
    >
      {!!icon && <span className="mx-2 align-middle">{icon}</span>}
      {!!text && text}
    </Link>
  )
}

export default Button
