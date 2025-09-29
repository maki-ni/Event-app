
import Home from './pages/Home'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import ErrorPage from './pages/ErrorPage'
import AdminPage from './pages/AdminPage'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import CreateEvent from './pages/CreateEvent'
import CreateAdmin from './pages/CreateAdmin'
import AdminDelete from './pages/AdminDelete'
import EditEvent from './pages/EditEvent'

function App() {
  return (
    <>
      <Routes>
        <Route path='/event' element={<Home />}></Route>
        <Route path='/' element={<Navigate to="/event" replace />} />       
       
        <Route path='/admin' element={< AdminPage />} />
        <Route path='/admin/dashboard' element={<ProtectedRoute><AdminDashboard /> </ProtectedRoute>}></Route>
        <Route path="/event/create" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>}></Route>
        
        <Route path="/admin/create" element={<ProtectedRoute><CreateAdmin /></ProtectedRoute>}></Route>
        <Route path="/admin/delete" element={<ProtectedRoute><AdminDelete /></ProtectedRoute>} />
        <Route path="/event/edit/:id" element={<ProtectedRoute><EditEvent /></ProtectedRoute>} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
      
      
    </>
  )
}

export default App
