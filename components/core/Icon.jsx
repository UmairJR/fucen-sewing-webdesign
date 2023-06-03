import React from 'react'

export default function Icon({ paths, icoName, size, className }) {
  return (
    <>
      <i className={`mc--${icoName} fs--${size} ${className}`}>
        {Array.apply(null, { length: parseInt(paths) }).map((e, i) => (
          <span className={'path' + (i + 1)} key={`${icoName}-${i}`}></span> 
        ))}
      </i>
    </>
  )
}