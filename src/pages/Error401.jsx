// pages/Error401.jsx
import ErrorPage from "../components/ErrorPage";

export default function Error401() {
  return (
    <ErrorPage 
      code="401"
      description="Anda belum login atau token autentikasi tidak valid."
      image="locked-door"
      suggestion="Silakan login terlebih dahulu"
    />
  );
}