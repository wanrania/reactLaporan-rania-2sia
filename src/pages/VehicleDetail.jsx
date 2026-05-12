import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import vehiclesData from "../data/vehicle.json";

export default function VehicleDetail() {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundVehicle = vehiclesData.find((v) => v.id === id);

    if (!foundVehicle) {
      setError("Data kendaraan tidak ditemukan");
      return;
    }

    setVehicle(foundVehicle);
  }, [id]);

  if (error) {
    return <div className="text-red-600 p-6">{error}</div>;
  }

  if (!vehicle) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-xl mx-auto overflow-hidden">

        <img
          src={vehicle.image}
          alt={vehicle.brand}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {vehicle.brand}
          </h2>

          <p className="text-slate-500 mb-6">
            Detail kendaraan pelanggan bengkel
          </p>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-slate-500">ID Kendaraan</span>
              <span className="font-semibold text-slate-800">
                {vehicle.id}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-slate-500">Pemilik</span>
              <span className="font-semibold text-slate-800">
                {vehicle.owner}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-slate-500">Jenis</span>

              <span
                className={`px-3 py-1 rounded-lg text-sm font-bold ${
                  vehicle.type === "Mobil"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {vehicle.type}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-slate-500">Plat Nomor</span>

              <span className="font-mono bg-slate-100 px-3 py-1 rounded border border-slate-200">
                {vehicle.plate}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-slate-500">Tahun</span>
              <span className="font-semibold text-slate-800">
                {vehicle.year}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}