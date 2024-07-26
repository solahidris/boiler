import DarkModeButton from "./DarkModeButton";
import HamburgerMenuButton from "./HamburgerMenuButton";
import Link from "next/link";
import UserMenuButton from "./UserMenuButton";

const HeaderMenu = () => {
  return (
    <div className="h-24 flex items-center justify-between p-6 lg:px-12 shadow-lg text-lg dark:border-b-[4px] dark:border-gray-500/20">
      
      <div>
        <Link href="/" prefetch><h1 className="uppercase font-bold text-xl">Klinik Amethyst</h1></Link>
      </div>

      {/* <div>Center Menu</div> */}

      <div className="w-40">
        <UserMenuButton />
        <DarkModeButton />
        <HamburgerMenuButton />
      </div>

    </div>
  )
};

export default HeaderMenu;