import Image from "next/image";
import Link from "next/link";

const HompageBanner = () => {
  const banner = {
    title: "EMPOWERING HEALTH, ONE HOLISTIC AT A TIME.",
    buttonText: "FIND OUT MORE",
    buttonUrl: "/services"
  }
  return (
    <div className="w-full bg-black -mt-[96px] relative z-0">
       <Image src="/banners/homepage_banner_hero.png" alt="header_logo" width={800} height={800} className="w-full object-cover brightness-[30%] h-[538px] lg:h-[674px] z-0 absolute" />
       <div className="text-white w-full h-[538px] lg:h-[674px] flex flex-col justify-center items-center z-10 text-3xl relative">
        <p className="tracking-widest px-8 lg:px-0 lg:max-w-[460px] text-center leading-[3rem] mt-[0px] lg:mt-0 mb-6">{banner.title}</p>
        <Link href={banner.buttonUrl} className="button-secondary" >
          <button>{banner.buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default HompageBanner;