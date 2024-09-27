import React from 'react'
 type ContainerProps = {
    children: React.ReactNode
 }

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='max-w-5xl px-5 xl:px-0 h-full mx-auto'>
      {children}
    </div>
  )
}

export default Container