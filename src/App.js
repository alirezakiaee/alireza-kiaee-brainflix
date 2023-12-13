import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import UploadPage from './pages/Upload/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './App.scss';

function App() {
  const { id } = useParams();
  return (
    <BrowserRouter>
      <header className="header">
        <Nav />
      </header>
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/:id" element={<Main />} />
        </Routes>
      </main> 
    </BrowserRouter>
  );
}

export default App;
