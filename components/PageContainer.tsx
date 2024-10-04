import HeaderMenu from "./HeaderMenu";
import Footer from "./Footer";
import { FC, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string; 
}

const PageContainer: FC<PageContainerProps> = ({ children, className }) => {
  const containerClass = className || 'bg-secondary-color';
  // Use passed className or default to 'bg-secondary-color'

  return (
    <div className={containerClass}>
      <HeaderMenu />
        {children}
      <Footer />
    </div>
  );
};

export default PageContainer;