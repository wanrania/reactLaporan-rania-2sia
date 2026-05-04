// pages/Error400.jsx
import ErrorPage from "../components/ErrorPage";

export default function Error400() {
  return (
    <ErrorPage 
      code="400"
      description="Permintaan tidak valid. Periksa parameter, format data, atau header yang dikirim."
      image="broken-robot"
      suggestion="Perbaiki request dan coba lagi"
    />
  );
}