import { useMediaQuery } from 'react-responsive';

export default function useIsMobile() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return isMobile;
}

// Sample use case - below

// import useIsMobile from './useIsMobile';

// export default function ComponentName() {
  
//   const isMobile = useIsMobile();

//   return (
//     <>
//       {isMobile && <p>mobile only text</p>}
//     </>
//   )
// }