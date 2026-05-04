// pages/Error403.jsx
import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage 
      code="403"
      description="Anda tidak memiliki akses untuk melihat halaman ini."
      image="sad-cloud"
      suggestion="Hubungi administrator sistem"
    />
  );
}