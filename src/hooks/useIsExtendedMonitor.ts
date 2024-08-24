import { useEffect, useState } from 'react';

const useIsExtendedMonitor = (): boolean => {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const detectExtendedMonitor = () => {
    const { screenLeft, screenTop, screen } = window;
    if (screenLeft !== 0 || screenTop !== 0) {
      setIsExtended(true);
    } else if (screen.availWidth !== screen.width || screen.availHeight !== screen.height) {
      setIsExtended(true);
    } else {
      setIsExtended(false);
    }
  };

  useEffect(() => {
    detectExtendedMonitor();
    window.addEventListener('resize', detectExtendedMonitor);

    return () => {
      window.removeEventListener('resize', detectExtendedMonitor);
    };
  }, []);

  return isExtended;
};

export default useIsExtendedMonitor;
