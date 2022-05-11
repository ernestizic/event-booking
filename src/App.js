import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QrCodeContextProvider from './contexts/QrCodeContext';
import IndexScreen from './screens/IndexScreen/IndexScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import TicketScreen from './screens/TicketScreen/TicketScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <QrCodeContextProvider>
          <div className='content-wrap'>
            <Routes>
              <Route exact path='/'element={<IndexScreen />} />
              <Route exact path='/register'element={<RegisterScreen />} />
              <Route exact path='/ticket'element={<TicketScreen />} />
            </Routes>
          </div>
        </QrCodeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
