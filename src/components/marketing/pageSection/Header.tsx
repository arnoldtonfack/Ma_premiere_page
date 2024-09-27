import React from "react";
import Logo from "../../../medias/svg/Logo-burger-house.svg";
import Icon from "../../../medias/svg//ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import pictogramme from '../../../medias/svg/picto-burger-house.svg'


const Header = () => {
  return (
    <div className="flex relative  z-10 items-center justify-between py-9">
      <div className=" w-full">
        <img src={Logo} alt="burger app" className="w-64 hidden md:block" />
        <img src={pictogramme} alt="burger app" className="w-10 md:hidden" />
      </div>
      <div className="text-secondary w-full">
        <div className="items-center justify-end gap-1 md:mb-5 hidden md:flex ">
          <img className="w-5 h-5" src={Icon} alt="icon-maket" />
          <span>commander votre repas en ligne</span>
        </div>
        <div className="flex  items-center justify-end ">
           <Button className=' mr-4 tracking-widest hover:scale-95 hover:translate-y-1 transition-transform'>Inscription</Button>
           <Button className=' tracking-widest hover:scale-95 hover:translate-y-1 transition-transform' color="secondary">Connecxion</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
