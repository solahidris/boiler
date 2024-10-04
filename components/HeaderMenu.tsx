import { useEffect, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import HamburgerMenuButton from "./HamburgerMenuButton";
import Link from "next/link";
import UserMenuButton from "./UserMenuButton";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import { useRouter } from "next/router";

const HeaderMenu = () => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  const isHomepage = router.pathname === "/";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className={`h-24 flex items-center justify-between p-6 lg:px-24 text-lg ${isHomepage ? "bg-tertiary-color" : "bg-white"}`}>
      {isMobile ? (
        <div className="flex justify-between w-full">
            <Link href="/">
                <Image src={isHomepage ? "/company_logo/header_logo_homepage.png" : "/company_logo/header_logo_primary.png"} alt="header_logo" width={400} height={400} className="max-w-[60vw] h-auto top-6 z-10 absolute" />
            </Link>
            <div className="w-20">
              <HamburgerMenuButton />
            </div>
        </div>
      ) : (
        <div className={`flex justify-between w-full z-20 ${!isHomepage ? "text-primary-color font-[500]" : "text-white font-thin"}`}>
          <div className="flex items-center gap-8 text-sm tracking-widest">
            <Link href="/about">ABOUT</Link>
            <Link href="/services">SERVICES</Link>
          </div>

          <div>
            <Link href="/">
                <Image src={`/company_logo/header_logo_${isHomepage ? "homepage" : "primary" }.png`} alt="header_logo" width={400} height={400} className="max-w-[240px] h-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-8 text-sm tracking-widest">
            <Link href="/blog">BLOG</Link>
            <Link href="/contact">CONTACT US</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;