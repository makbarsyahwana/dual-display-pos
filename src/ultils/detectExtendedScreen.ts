const detectExtendedMonitor = (): boolean => {
    const screenLeft = window.screenLeft || window.screenX;
    const screenTop = window.screenTop || window.screenY;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const availWidth = window.screen.width;
    const availHeight = window.screen.height;

    console.log('screenLeft', screenLeft)
    console.log('screenTop', screenTop)
    console.log('screenWidth', screenWidth)
    console.log('screenHeight', screenHeight)
    console.log('availWidth', availWidth)
    console.log('availHeight', availHeight)

    // Check if the window is within the primary monitor's bounds
    const isWithinPrimaryBounds =
      screenLeft >= 0 &&
      screenTop >= 0 &&
      screenLeft + screenWidth <= availWidth &&
      screenTop + screenHeight <= availHeight;

    // If it's outside these bounds, it's likely on an extended monitor
    const isExtendedMonitor = !isWithinPrimaryBounds;

      
    return isExtendedMonitor
};

export default detectExtendedMonitor;