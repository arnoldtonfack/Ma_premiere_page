import React from "react";
import Container from "../../elements/Container";
import backgroundImage from "../../../medias/images/background/bg-footer.jpg";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import logo from "../../../medias/svg/Logo-burger-house-white.svg";
import InconInsta from "../../../medias/svg/instagram-brands-solid.svg";
import InconFace from "../../../medias/svg/facebook-f-brands-solid.svg";
import InconWhatsapp from "../../../medias/svg/whatsapp-brands-solid.svg";
import InconTwitter from "../../../medias/svg/x-twitter-brands-solid.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div className="relative mb-20 p-5 text-white ">
        <img
          src={backgroundImage}
          alt="burger footer"
          className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0 "
        />
        <div className="relative  grid grid-cols-2  z-10">
          <div className=" w-full  p-5 mt-20 mb-28">
            <img src={logo} className="w-2/3" alt="" />
            <p className="mt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              quis earum distinctio quas odit dicta, architecto minus iusto modi
              quod?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center  w-full h-full">
            <div className="flex items-center gap-x-2">
              <MapPinIcon className="w-7 h-7" />
              <span className="uppercase font-extrabold tracking-tight text-lg">
                IS place bellecour, 6900 Iyon
              </span>
            </div>
            <div className="flex items-center gap-x-2 mt-5">
              <EnvelopeIcon className="w-7 h-7" />
              <span className="uppercase font-extrabold tracking-tight text-lg">
                info@burger-house.com
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-between  items-center   z-10">
          <p className="uppercase font-extrabold  tracking-tighter text-sm">
            © {currentYear} Burger house 2024. All rights reserved
          </p>
          <div className="flex ">
            <div>
              <Link to='#' target="_blank" className="group">
              <img src={InconInsta}  className=" w-7  p-1 rounded-full h-7 mr-2 bg-white group-hover:bg-primary transition ease-in-out  duration-300" alt="" />
              </Link>
            </div>
            <div>
              <img src={InconFace} className="  w-7 p-1 rounded-full bg-white h-7 mr-2"  alt="" />
            </div>
            <div>
              <img src={InconWhatsapp} className=" w-7 rounded-full h-7 p-1 bg-white mr-2" alt="" />
            </div>
            <div>
              <img src={InconTwitter} className="w-7 rounded-full bg-white h-7 p-1 mr-2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
