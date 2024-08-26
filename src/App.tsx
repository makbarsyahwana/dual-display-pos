import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import OperatorScreen from './components/pages/OperatorScreen';
import CustomerScreen from './components/pages/CustomerScreen';
import RouterScreen from './components/pages/RouterScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import useIsExtendedMonitor from './hooks/useIsExtendedMonitor';


const App = () => {
  const isExtendedMonitor = useIsExtendedMonitor();
  console.log('isExtendedMonitor', isExtendedMonitor);
  // window.addEventListener('move', () => isExtendedMonitor);
  // window.addEventListener('resize', () => isExtendedMonitor);
  
  // useEffect(() => {
    
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouterScreen />} />
            <Route path="/operator" element={<OperatorScreen />} />
            <Route path="/customer" element={<CustomerScreen />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;