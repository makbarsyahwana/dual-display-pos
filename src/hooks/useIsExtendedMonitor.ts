import { useState, useEffect } from 'react';
import detectExtendedMonitor from '../ultils/detectExtendedScreen';

const useIsExtendedMonitor = (): any => {
    const [isExtendedMonitor, setIsExtendedMonitor] = useState(Boolean);
    
    useEffect(() => {
        // setIsExtendedMonitor(detectExtendedMonitor());
        window.addEventListener('move', detectExtendedMonitor);

        return () => {
            window.removeEventListener('move', detectExtendedMonitor);
        }
    }, []);
  
    return detectExtendedMonitor();
};
  
export default useIsExtendedMonitor;
