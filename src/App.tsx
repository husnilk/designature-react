import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { DocumentCreate } from './pages/DocumentCreate';
import { DocumentEdit } from './pages/DocumentEdit';
import { DocumentIndex } from './pages/DocumentIndex';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/docs" element={<DocumentIndex />} />
        <Route path="/docs/:id/edit" element={<DocumentEdit />} />
        <Route path="/docs/create" element={<DocumentCreate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
