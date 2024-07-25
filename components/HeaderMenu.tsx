import DarkModeButton from "./DarkModeButton";
import HamburgerMenuButton from "./HamburgerMenuButton";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div className="h-24 flex items-center justify-between p-6 shadow-lg dark:bg-black dark:text-white text-lg">
      
      <div>
        <Link href="/" prefetch><h1 className="uppercase font-bold text-xl">Klinik Amethyst</h1></Link>
      </div>

      {/* <div>
        Menu
      </div> */}

      <div className="w-40">
        <DarkModeButton />
        <HamburgerMenuButton />
      </div>

    </div>
  )
};

export default HeaderMenu;