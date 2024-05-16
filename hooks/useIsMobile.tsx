import { useMediaQuery } from '@react-hook/media-query';

export const useIsMobile = (): boolean => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile;
};

// Sample use case - below

// import { useIsMobile } from './useIsMobile';
// const LeComponent = () => {
//     const isMobile = useIsMobile();
//     return(
//         <>
//             {isMobile ? (<p>mobile stuff</p>) : (<p>desktop stuff</p>)}
//         </>
//     )
// }
// export default LeComponent;
