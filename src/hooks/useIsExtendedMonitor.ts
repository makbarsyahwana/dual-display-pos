import { useEffect, useState } from 'react';

const useIsExtendedMonitor = (): boolean => {
    const [isExtendedMonitor, setIsExtendedMonitor] = useState(false);

  const detectExtendedMonitor = () => {
    const isPositionedAwayFromPrimary = window.screenLeft !== 0 || window.screenTop !== 0;
    // const isBeyondPrimaryScreen = window.screenLeft > window.screen.width || window.screenTop > window.screen.height;

    setIsExtendedMonitor(isPositionedAwayFromPrimary);
  };

  useEffect(() => {
    detectExtendedMonitor();
    window.addEventListener('move', detectExtendedMonitor);

    return () => {
      window.addEventListener('move', detectExtendedMonitor);
    };
  }, []);

  return isExtendedMonitor;
};

export default useIsExtendedMonitor;
