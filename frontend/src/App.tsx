import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./features/navbar"
import Footer from "./features/footer"
import CheckSymptoms from "./pages/check-symptoms"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check-symptoms" element={<CheckSymptoms />} />

        {/* <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
    
          />
        </Route> */}

        {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App