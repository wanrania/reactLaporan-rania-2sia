import "./assets/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Tambahkan ini
import React from "react";
import Loading from "./components/Loading";
import { Suspense } from "react";

function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"))
  const Customers = React.lazy(() => import("./pages/Customers"))
  const Error400 = React.lazy(() => import("./pages/Error400"))
  const Error401 = React.lazy(() => import("./pages/Error401"))
  const Error403 = React.lazy(() => import("./pages/Error403"))
  const Login = React.lazy(() => import("./pages/auth/Login"))
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
  const Register = React.lazy(() => import("./pages/auth/Register"))
  const ErrorPage = React.lazy(() => import("./components/ErrorPage"))
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
  const Kendaraan = React.lazy(() => import("./pages/Kendaraan"))
  const Services = React.lazy(() => import("./pages/Services"))
  const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"))
  const VehicleDetail = React.lazy(() => import("./pages/VehicleDetail"))
  // const Loading = React.lazy(() => import("./components/Loading"))
  
  return (
    <BrowserRouter> {/* Wrap dengan BrowserRouter */}
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout/>}>
              {/* Error Routes */}
              <Route path="/error/400" element={<Error400 />} />
              <Route path="/error/401" element={<Error401 />} />
              <Route path="/error/403" element={<Error403 />} />
              
              {/* Main Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/kendaraan" element={<Kendaraan />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:id" element={<CustomerDetail />} />
              <Route path="/kendaraan/:id" element={<VehicleDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<ErrorPage code="404" />} />
        </Route>
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
            </Routes>
</Suspense>
    </BrowserRouter>
  );
}

export default App;
