import React from "react";
import Container from "../../elements/Container";
import HeatingTitle from "../../elements/DisplayTitle/HeatingTitle";
import Heating from "../../elements/DisplayTitle/Heading";
import Button from "../../elements/Button";
import product1 from "../../../medias/images/products/Product-1.jpg"
import product2 from "../../../medias/images/products/Product-2.jpg"
import product3 from "../../../medias/images/products/Product-3.jpg"

const Product = () => {
  return (
    <Container>
      <HeatingTitle variante="h3">Toujours des délicieux burger</HeatingTitle>
      <Heating theme="secondary" alignement="center" className="my-5">Choisisez et savourez</Heating>

      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae vero
        itaque dolorum ullam praesentium, eius dolorem perspiciatis accusamus,
        deserunt enim id ratione voluptate et ipsa omnis magnam! Minima, aut.
      </p>

      <div className=" grid md:grid-cols-3  mb-16  gap-x-1 ">
        <div className=" w-full h-full ">
          <div className=" relative  h-72">
          <img src={product1} className="bg-primary rounded-sm absolute w-full h-full top-0 left-0 object-cover z-0" alt="" />
          </div>
          <div className=" flex items-center flex-col justify-center ">
            <Heating variante="h3" className="my-5" >
              Lorem ipsun dolor
            </Heating>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, veniam!
            </p>
            <Button color="danger" className="md:mb-0 mb-10">
              Commandez
            </Button>
          </div>
        </div>
        <div className=" w-full h-full  ">
          <div className=" relative  h-72">
          <img src={product2} className="bg-primary rounded-sm absolute w-full h-full top-0 left-0 object-cover z-0" alt="" />
          </div>
          <div className=" flex items-center flex-col justify-center ">
            <Heating variante="h3" className="my-5">
              Lorem ipsun dolor
            </Heating>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, veniam!
            </p>
            <Button color="danger" className="md:mb-0 mb-10">
              Commandez
            </Button>
          </div>
        </div>
        <div className=" w-full h-full ">
          <div className=" relative  h-72">
          <img src={product3} className="bg-primary  rounded-sm absolute w-full h-full top-0 left-0 object-cover z-0" alt="" />
          </div>
          <div className=" flex items-center flex-col justify-center ">
            <Heating variante="h3" className="my-5">
              Lorem ipsun dolor
            </Heating>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, veniam!
            </p>
            <Button color="danger" className="md:mb-0 ">
              Commandez
            </Button>
          </div>
        </div>
       
      </div>
    </Container>
  );
};

export default Product;
