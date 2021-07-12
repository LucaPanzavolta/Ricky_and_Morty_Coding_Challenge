import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import verifyAuthenticationThunk from './redux/thunks/verifyAuthentication.thunk';

function App() {
  const [isAuthenticationStatusSettled, setIsAuthenticationStatusSettled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyAuthenticationThunk())
      .finally(() => setIsAuthenticationStatusSettled(true));
  }, []);

  return (
    <div className="App">
      { isAuthenticationStatusSettled && <Layout />}
    </div>
  );
}

export default App;
