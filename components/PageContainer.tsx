import HeaderMenu from "./HeaderMenu";
import Footer from "./Footer";
import { FC, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {

  return (
    <div className="secondary-bg">
      <HeaderMenu />
        {children}
      <Footer />
    </div>
  );
};

export default PageContainer;