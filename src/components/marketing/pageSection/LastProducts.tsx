import React from 'react'
import Image1 from '../../../medias/images/products/LastProducts-1.jpg'
import Image2 from '../../../medias/images/products/LastProducts-2.jpg'
import Image3 from '../../../medias/images/products/LastProducts-3.jpg'
import Container from '../../elements/Container'


const LastProducts = () => {
  return (
    <Container>
      <div className= 'grid md:grid-cols-2  gap-x-9 gap-y-9 w-full h-96 my-19  px-11 my-20 uppercase text-white'>
        <div className='bg-primary relative    p-7  row-span-2 rounded md:h-full '>
        <img src={Image1}  className='absolute object-cover w-full h-full  top-0 left-0 rounded z-0'  alt="Un delicieux hamberger exposer sur une piece en boit" />
        <div className='z-10 relative'>
            <span className='block text-lg  font-bold'>Killer Burger</span>
            <span className='text-2xl font-black'>Burger le plus populaire</span>
          </div>
        </div>
        <div className='bg-primary relative  p-7 h-full rounded'>
          <img src={Image2} className='absolute object-cover w-full h-full  top-0  rounded left-0 z-0'   alt="Deux delicieux hamberger exposer sur une piece en boit" />
        <div className='z-10 relative'>
            <span className='block text-lg font-bold'>Island Burger</span>
            <span className='block text-lg font-bold'>plus de plaaisir</span>
            <span className='text-2xl font-black'>plus de gout</span>
          </div>
        </div>
        <div className='bg-primary relative  p-7 h-full rounded'>
          <img src={Image3} className='absolute  object-cover w-full h-full top-0 rounded left-0 z-0'   alt="Un delicieux hamberger exposer sur une piece en boit" />
        <div className='z-10 relative'>
            <span className='block text-lg font-bold'>Orlando's Burger</span>
            <span className='text-2xl font-black'>frais & pimente</span>
          </div>
        </div>
      </div>
      
      </Container>
  )
}

export default LastProducts