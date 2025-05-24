import { useEffect, useState } from 'react';
import { isMobileScreen } from './mobileScreen';

export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(isMobileScreen());

  useEffect(() => {
    const resize = () => {
      setIsMobile(isMobileScreen());
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return isMobile;
}