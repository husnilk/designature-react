import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { DocumentCreate } from './pages/DocumentCreate';
import { DocumentEdit } from './pages/DocumentEdit';
import { DocumentIndex } from './pages/DocumentIndex';
import { DocumentView } from './pages/DocumentView';
import { pdfjs } from 'react-pdf';
import { SignatureIndex } from './pages/SignatureIndex';
import { SignatureView } from './pages/SignatureView';
import { RequestIndex } from './pages/RequestIndex';

function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/docs" element={<DocumentIndex />} />
        <Route path="/docs/:id" element={<DocumentView />} />
        <Route path="/docs/:id/edit" element={<DocumentEdit />} />
        <Route path="/docs/create" element={<DocumentCreate />} />
        <Route path="/signatures" element={<SignatureIndex />} />
        <Route path="/signatures/:id" element={<SignatureView />} />
        <Route path="/requests" element={<RequestIndex />} />
        <Route path="/requests/:id" element={<RequestIndex />} />
        <Route path="/requests/:id/edit" element={<RequestIndex />} />
        <Route path="/requests/create" element={<RequestIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {}
    </>
  );
}

export default App;
