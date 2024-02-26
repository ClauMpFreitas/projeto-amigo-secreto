import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScreenSC } from './AppStyles';
import { HomePage } from './HomePage/HomePage';
import { AddPeople } from './AddPeople/AddPeople';
import { AppProvider } from './AppContext';
import { WatchEvent } from './WatchEvent/WatchEvent';
import { CadastroParticipants } from './CadastroParticipants/CadastroParticipants';
import { PageLogin } from './PageLogin/PageLogin';

function App() {

  return (
    <Router>
      <AppProvider>
        <ScreenSC>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addpeople" element={<AddPeople />} />
            <Route path="/watchevent" element={<WatchEvent />} />
            <Route path='/cadastroparticipants' element={<CadastroParticipants/>}/>
            <Route path='/pagelogin' element={<PageLogin/>}/>
          </Routes>
        </ScreenSC>
      </AppProvider>
    </Router>
  )
}

export default App
