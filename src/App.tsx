import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OperatorScreen from './components/pages/OperatorScreen';
import CustomerScreen from './components/pages/CustomerScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import useIsExtendedMonitor from './hooks/useIsExtendedMonitor';
import LoadingSpinner from './components/atoms/LoadingSpinner';

const App: React.FC = () => {
  const isExtendedMonitor = useIsExtendedMonitor();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={isExtendedMonitor ? <CustomerScreen /> : <OperatorScreen />} />
            <Route path="/operator" element={<OperatorScreen />} />
            <Route path="/customer" element={<CustomerScreen />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
