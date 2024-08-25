import React, { useEffect } from 'react';
import { BrowserRouter as  Router, Route, Routes, Navigate } from 'react-router-dom';
import OperatorScreen from './components/pages/OperatorScreen';
import CustomerScreen from './components/pages/CustomerScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import useIsExtendedMonitor from './hooks/useIsExtendedMonitor';
import LoadingSpinner from './components/atoms/LoadingSpinner';


const App: React.FC = () => {
  const isExtendedMonitor = useIsExtendedMonitor();

  // useEffect(() => {
  //   if (isExtendedMonitor) {
  //     window.location.href = '/customer';
  //   } else {
  //     window.location.href = '/operator';
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            {isExtendedMonitor ? (
              <Route path="/" element={<Navigate to="/customer" />} />
            ) : (
              <Route path="/" element={<Navigate to="/operator" />} />
            )}
            <Route path="/operator" element={<OperatorScreen />} />
            <Route path="/customer" element={<CustomerScreen />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;