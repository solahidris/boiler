import Link from "next/link";

interface NavigationLinkProps {
  setShowMenu: (value: boolean) => void;
  linkName: string;
  linkPath: string;
}

const NavigationLink = ({ setShowMenu, linkName, linkPath }: NavigationLinkProps) => {

  const menuLinkCSS = "text-end animate duration-300 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-neutral hover:text-primary hover:scale-[105%] h-full text-5xl lg:h-[calc(100vh/12)] lg:text-[calc(100vh/12)] opacity-100"
  const closeNavBar = (() => setShowMenu(false));

  return (
    <Link href={`/${linkPath}`} prefetch>
      <button className={menuLinkCSS} onClick={closeNavBar}>
        {linkName}
      </button>
    </Link>
  );
};

export default NavigationLink