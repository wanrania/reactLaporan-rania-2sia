import "./assets/tailwind.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Tambahkan ini
import React from "react";
import Loading from "./components/Loading";
import { Suspense } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const ServiceHistory = React.lazy(
    () => import("./pages/operational/ServiceHistory"),
  );
  const Customers = React.lazy(() => import("./pages/crm/Customers"));
  const Error400 = React.lazy(() => import("./pages/Error400"));
  const Error401 = React.lazy(() => import("./pages/Error401"));
  const Error403 = React.lazy(() => import("./pages/Error403"));
  const Login = React.lazy(() => import("./pages/auth/Login"));
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
  const Register = React.lazy(() => import("./pages/auth/Register"));
  const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
  const Kendaraan = React.lazy(() => import("./pages/operational/Kendaraan"));
  const Services = React.lazy(() => import("./pages/operational/Services"));
  const CustomerDetail = React.lazy(() => import("./pages/crm/CustomerDetail"));
  const VehicleDetail = React.lazy(
    () => import("./pages/operational/VehicleDetail"),
  );
  const Membership = React.lazy(() => import("./pages/crm/Membership"));
  const Feedback = React.lazy(() => import("./pages/crm/Feedback"));
  const FollowUp = React.lazy(() => import("./pages/crm/FollowUp"));
  const Booking = React.lazy(() => import("./pages/operational/Booking"));
  const Reward = React.lazy(() => import("./pages/marketing/Reward"));
  const Promo = React.lazy(() => import("./pages/marketing/Promo"));
  const Users = React.lazy(() => import("./pages/admin/Users"));

  // const Loading = React.lazy(() => import("./components/Loading"))

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      {" "}
      {/* Wrap dengan BrowserRouter */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
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
            <Route path="/service-history" element={<ServiceHistory />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/follow-up" element={<FollowUp />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/reward" element={<Reward />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<ErrorPage code="404" />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
