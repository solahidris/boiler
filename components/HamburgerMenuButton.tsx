import HamburgerMenuButtonIcon from "./ui/hamburger-menu-button";
import { useState } from "react";
import NavigationLink from "./NavigationLink";
import WhileInViewAnimation from "./animationFadeIn/WhileInViewAnimation";

const HamburgerMenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const mutedBackground = "bg-accent-content/50 w-[100vw] h-[100vh] fixed z-8 top-0 left-0"
  const navigationContainerCSS = "fixed z-10 h-[100vh] top-0 right-0 bg-base-100 transition-all ease-in-out duration-300 shadow-lg"
  const navigationLinkCSS = "flex flex-col gap-4 w-full h-full font-bold justify-end"
  
  return (
    <div>
      <div className="absolute top-6 right-6 z-20">
        <HamburgerMenuButtonIcon onClick={()=>{setShowMenu(!showMenu)}} checked={showMenu} />
      </div>
      <div className={`${showMenu && mutedBackground}`}>
        {showMenu ?
            <div className={`w-[85vw] lg:w-[75vw] opacity-100 p-6 lg:p-20 ${navigationContainerCSS}`} onMouseLeave={()=>setShowMenu(false)}>
              <div className={`${navigationLinkCSS}`}>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"Home"} linkPath={"/"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"About us"} linkPath={"/about-us"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"Location"} linkPath={"/location"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"Career"} linkPath={"/career"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"Review"} linkPath={"/review"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"Expertise"} linkPath={"/expertise"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"Article"} linkPath={"/article"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
                <WhileInViewAnimation classNameProp={"text-end"}><NavigationLink linkName={"Contact us"} linkPath={"/contact-us"} setShowMenu={setShowMenu} /></WhileInViewAnimation>
              </div>
            </div>
          :
            <div className={`w-0 opacity-0 ${navigationContainerCSS}`}>
              <div className={`${navigationLinkCSS} `} />
            </div>
        }
      </div>
    </div>
  );
};

export default HamburgerMenuButton;