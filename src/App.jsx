import './App.css';
import { Routes, Route } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Talents from './Pages/Talents';
import Subscriptions from './Pages/Subscriptions';
import Pages from './Pages/Pages';
import Contact from './Pages/Contact';
import Error from './Pages/Error';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Talents" element={<Talents />} />
          <Route path="Subscriptions" element={<Subscriptions />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;