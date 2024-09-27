import React, {  PropsWithChildren } from "react";
import Container from "../../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import Image1 from "../../../../medias/photo/dorian-hurst-d-igN2ptyC8-unsplash.jpg";
import Image2 from "../../../../medias/images/products/Product-1.jpg";
import Image3 from "../../../../medias/images/products/Product-2.jpg";
import "./index.css";
import Heating from "../../../elements/DisplayTitle/Heading";

type SlideProps ={
  category?: string
  title?: string
  image?: string
  alt?: string
}

//creons un composant interne slide
const Slide: React.FC<PropsWithChildren<SlideProps>> = ({ children, category, title, image, alt }) => {
  return (
    <div className=" grid grid-cols-2 p-6  h-96">
      <div className=" p-10 mb-10 w-full">
         <Heating variante="h4">
          {category}
         </Heating>
         <Heating theme="secondary" variante="h3" className="mb-5">
           {title}
         </Heating>
        <p className="tracking-wide text-lg leading-relaxed font-light text-gray-800">
          {children}
        </p>

         </div>
      <div className="bg-yellow-500 w-full relative top-0 left-0">
      <img src={image} alt={alt} className="bg-primary h-full w-full absolute object-cover object-bottom z-0 " />z
      </div>
      
    </div>
  );
};

const Events = () => {
  const items = [
      <Slide 
      image={Image1}
      alt="image1"
      category="evenement a venir"
      title= "vivez la demi-finale"
      >
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi quod ipsam exercitationem aspernatur eius alias sint error vel dolores.
      </Slide>,
      <Slide 
      image={Image2}
      alt="image2"
      category="evenement a venir"
      title= "burger"
      >
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi quod ipsam exercitationem aspernatur eius alias sint error vel dolores.
      </Slide>,
      <Slide 
      image={Image3}
      alt="image3"
      category="evenement a venir"
      title= "burger tromatisans"
      >
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi quod ipsam exercitationem aspernatur eius alias sint error vel dolores.
      </Slide>,
  ];
  return (
    <Container>
      <div className="shadow-2xl mb-20 h-96">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          infinite
          autoPlayInterval={ 4000}
          animationType="fadeout"
          disableButtonsControls
        />
      </div>
    </Container>
  );
};

export default Events;
