import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScreenSC } from './AppStyles';
import { HomePage } from './HomePage/HomePage';
import { AddPeople } from './AddPeople/AddPeople';

function App() {

  return (
    <Router>
      <ScreenSC>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addpeople" element={<AddPeople />} />
          <Route path="/watchevent" element={null} />
        </Routes>
      </ScreenSC>
    </Router>
  )
}

export default App
