import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import {Container} from 'react-bootstrap';
import NotFound from './components/pages/NotFound/NotFound';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:id" element={<Navigate to="/" />} />
            
          </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
