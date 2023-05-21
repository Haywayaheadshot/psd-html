import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HistoryPage from './components/HistoryPage/HistoryPage';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <div>
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  </div>
);

export default App;
