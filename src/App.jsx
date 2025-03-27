import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ManualCryptoCounter from './components/ManualCryptoCounter';
import LiveTracker from './components/LiveTracker';


function NavigationButtons () {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/manual')}>Manual Crypto</button>
      <button onClick={() => navigate('/live')}>Live Crypto</button>
    </div>
  );
}

function AppRoutes() {
  return (
    <>
    <NavigationButtons />
    <Routes>
      <Route path="/manual" element={<ManualCryptoCounter />} />
      <Route path="/live" element={<LiveTracker />} />
    </Routes>
    </>
  );
}

function App() {
  return(
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;