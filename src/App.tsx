import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScreenSC } from './AppStyles';
import { HomePage } from './HomePage/HomePage';
import { AddPeople } from './AddPeople/AddPeople';
import { AppProvider } from './AppContext';
import { WatchEvent } from './WatchEvent/WatchEvent';

function App() {

  return (
    <Router>
      <AppProvider>
        <ScreenSC>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addpeople" element={<AddPeople />} />
            <Route path="/watchevent" element={<WatchEvent />} />
          </Routes>
        </ScreenSC>
      </AppProvider>
    </Router>
  )
}

export default App
