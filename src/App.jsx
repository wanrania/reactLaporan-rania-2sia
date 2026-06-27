import "./assets/tailwind.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";

/* PUBLIC */
const LandingPage = React.lazy(() => import("./pages/guest/LandingPage"));

/* AUTH */
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

/* LAYOUT */
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

/* ADMIN */
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Users = React.lazy(() => import("./pages/admin/Users"));

const Customers = React.lazy(() => import("./pages/crm/Customers"));
const CustomerDetail = React.lazy(() => import("./pages/crm/CustomerDetail"));
const Membership = React.lazy(() => import("./pages/crm/Membership"));
const Feedback = React.lazy(() => import("./pages/crm/Feedback"));
const FollowUp = React.lazy(() => import("./pages/crm/FollowUp"));

const Kendaraan = React.lazy(() => import("./pages/operational/Kendaraan"));
const VehicleDetail = React.lazy(
  () => import("./pages/operational/VehicleDetail"),
);
const Services = React.lazy(() => import("./pages/operational/Services"));
const ServiceHistory = React.lazy(
  () => import("./pages/operational/ServiceHistory"),
);
const Booking = React.lazy(() => import("./pages/operational/Booking"));

const Reward = React.lazy(() => import("./pages/marketing/Reward"));
const Promo = React.lazy(() => import("./pages/marketing/Promo"));

/* MEMBER */
const DashboardMember = React.lazy(
  () => import("./pages/member/DashboardMember"),
);
const MemberLayout = React.lazy(() => import("./layouts/MemberLayout"));
const BookingMember = React.lazy(() => import("./pages/member/BookingMember"));
const KendaraanMember = React.lazy(
  () => import("./pages/member/KendaraanMember"),
);
const RiwayatMember = React.lazy(() => import("./pages/member/RiwayatMember"));
const RewardMember = React.lazy(() => import("./pages/member/RewardMember"));
const ProfilMember = React.lazy(() => import("./pages/member/ProfilMember"));

/* ERROR */
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* ==========================
              GUEST / PUBLIC
          ========================== */}
          <Route path="/" element={<LandingPage />} />

          {/* ==========================
              AUTH
          ========================== */}
          <Route element={<AuthLayout />}>
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate
                    to={user.role === "admin" ? "/admin" : "/member"}
                    replace
                  />
                ) : (
                  <Login />
                )
              }
            />

            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>

          {/* ==========================
              ADMIN
          ========================== */}
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/admin" element={<Dashboard />} />

            {/* CRM */}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetail />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/follow-up" element={<FollowUp />} />

            {/* OPERASIONAL */}
            <Route path="/kendaraan" element={<Kendaraan />} />
            <Route path="/kendaraan/:id" element={<VehicleDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-history" element={<ServiceHistory />} />
            <Route path="/booking" element={<Booking />} />

            {/* MARKETING */}
            <Route path="/reward" element={<Reward />} />
            <Route path="/promo" element={<Promo />} />

            {/* USER */}
            <Route path="/users" element={<Users />} />

            {/* ERROR */}
            <Route path="/error/400" element={<Error400 />} />
            <Route path="/error/401" element={<Error401 />} />
            <Route path="/error/403" element={<Error403 />} />
          </Route>

          {/* ==========================
              MEMBER
          ========================== */}
          <Route
            element={
              <ProtectedRoute>
                <MemberLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/member" element={<DashboardMember />} />

            <Route path="/member/booking" element={<BookingMember />} />

            <Route path="/member/kendaraan" element={<KendaraanMember />} />

            <Route path="/member/riwayat" element={<RiwayatMember />} />

            <Route path="/member/reward" element={<RewardMember />} />

            <Route path="/member/profile" element={<ProfilMember />} />
          </Route>

          {/* ==========================
              404
          ========================== */}
          <Route path="*" element={<ErrorPage code="404" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
