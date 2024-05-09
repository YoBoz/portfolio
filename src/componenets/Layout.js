import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block p-32 z-0 bg-light dark:bg-dark ${className}`}>
      {children}
    </div>
  )
}

export default Layout
