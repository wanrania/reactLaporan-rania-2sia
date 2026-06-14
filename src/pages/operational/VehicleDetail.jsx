import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCar,
  FaMotorcycle,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";

import vehiclesData from "../../data/vehicle.json";

export default function VehicleDetail() {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundVehicle = vehiclesData.find(
      (v) => v.id === id
    );

    if (!foundVehicle) {
      setError("Data kendaraan tidak ditemukan");
      return;
    }

    setVehicle(foundVehicle);
  }, [id]);

  /* ERROR */
  if (error) {
    return (
      <div className="p-6">
        <div className="bg-white border border-red-200 rounded-2xl p-6 shadow-sm">
          <p className="text-red-500 font-semibold">
            {error}
          </p>
        </div>
      </div>
    );
  }

  /* LOADING */
  if (!vehicle) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">
            Detail Kendaraan
          </h1>

          <p className="text-slate-500 mt-1">
            Informasi lengkap kendaraan pelanggan
          </p>
        </div>

        {/* BACK BUTTON */}
        <Link
          to="/kendaraan"
          className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden max-w-5xl mx-auto">
        
        {/* IMAGE */}
        <div className="relative">
          <img
            src={vehicle.image}
            alt={vehicle.brand}
            className="w-full h-[320px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* TITLE */}
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-4xl font-bold">
              {vehicle.brand}
            </h2>

            <p className="text-slate-200 mt-1">
              Kendaraan pelanggan bengkel
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* ID */}
          <InfoCard
            icon={<FaCar />}
            title="ID Kendaraan"
            value={vehicle.id}
          />

          {/* OWNER */}
          <InfoCard
            icon={<FaUser />}
            title="Pemilik"
            value={vehicle.owner}
          />

          {/* TYPE */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-lg">
                {vehicle.type === "Mobil" ? (
                  <FaCar />
                ) : (
                  <FaMotorcycle />
                )}
              </div>

              <h3 className="font-bold text-slate-700 text-lg">
                Jenis Kendaraan
              </h3>
            </div>

            <span
              className={`inline-flex items-center justify-center px-4 py-1.5 rounded-xl text-sm font-bold border ${
                vehicle.type === "Mobil"
                  ? "bg-blue-50 text-blue-600 border-blue-200"
                  : "bg-red-50 text-red-600 border-red-200"
              }`}
            >
              {vehicle.type}
            </span>
          </div>

          {/* YEAR */}
          <InfoCard
            icon={<FaCalendarAlt />}
            title="Tahun"
            value={vehicle.year}
          />

          {/* PLATE */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-slate-700 text-lg mb-4">
              Plat Nomor
            </h3>

            <div className="inline-flex items-center justify-center bg-white border-2 border-slate-300 rounded-xl px-6 py-3 text-2xl font-bold tracking-widest text-slate-800 shadow-sm">
              {vehicle.plate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INFO CARD */
function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-lg">
          {icon}
        </div>

        <h3 className="font-bold text-slate-700 text-lg">
          {title}
        </h3>
      </div>

      <p className="text-slate-600 font-medium">
        {value}
      </p>
    </div>
  );
}