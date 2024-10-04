import Image from 'next/image';

interface MainBannerProps {
  title?: string;
  tagline?: string;
  imagePath?: string;
}

const MainBanner: React.FC<MainBannerProps> = ({ title, tagline, imagePath }) => {
  const titleContentCss = "mb-4 text-3xl font-[500] uppercase text-white tracking-widest";
  const titleContainerCss = "absolute top-[96px] lg:top-0 lg:relative h-[400px] bg-transparent lg:bg-[#355B82] text-white flex items-center lg:justify-center mx-8 lg:mx-0";

  return (
    <div className="grid lg:grid-cols-2">
      <div className={titleContainerCss}>
        <div className={`max-w-[520px] z-10`}>
          <p className={titleContentCss}>{title ? title : "title"}</p>
          <p className="text-sm leading-6">{tagline ? tagline : "tagline"}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={imagePath || "/image_placeholder.png"} alt={imagePath || "/image_placeholder.png"} width={1080} height={1080} className="object-cover w-full h-[400px] brightness-[50%] lg:brightness-[100%]" />
      </div>
    </div>
  );
};

export default MainBanner;