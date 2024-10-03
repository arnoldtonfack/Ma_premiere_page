import React from 'react'
import backgroudi from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import product from '../../../medias/images/HeroTop/burger-hero-top.png'
import Button from '../../elements/Button'

const HeroTop = () => {
    
  return (
    <div className='w-full bg-primary '>
        <div className='bg-repeat w-full h-full  pb-24 md:pb-[150px]' style={{backgroundImage: `url(${backgroudi})`}}>
            <Container>
                <Header/>

                <div className='relative mt-20  md:mt-[110px] w-full '>
                <img src={product} className='hidden lg:block -right-0 z-0 -top-[190px] w-[390px] absolute' alt="menu hamberger" />

                <div className='hidden lg:block  absolute bg-red-primary rounded-full p-2 w-36 h-36 right-[200px]  top-[120px]'>
                  <div className='w-full h-full rounded-full border-2 border-white border-dashed flex items-center justify-center'>
                     <div className='text-center text-white'>
                      <span className='font-extrabold block'>
                        <span className='text-5xl'>5</span>.49€
                      </span>
                      <span className='tracking-widest text-base'>seulement</span>
                     </div>
                  </div>
                </div>
                  <div className=' relative text-left md:text-center lg:text-left lg:-top-10 z-10 uppercase text-secondary md:-mt-10 '>
                    <h1 className='mb-4 font-semibold'>C'est au moment de goute des hambergers </h1>
                    <h2 className='font-secondary py shadowTitreSecodary'>
                      <span className='text-7xl md:text-8xl block'>Burger</span>
                      <span className='md:text-6xl text-5xl block md:inline-block '>House</span> 
                      <span className='text-4xl md:ml-3'>Click<span className='text-red-primary'>&</span>collect</span></h2>
                  </div>
                <Button className='w-full mt-2 absolute lg:w-fit  hover:shadow-2xl hover:scale-95 hover:translate-y-1 transition-transform' color='secondary' theme='big'>
                  créer un compte
                </Button>
                </div>
               
            </Container>

        </div>
    </div>
  )
}

export default HeroTop