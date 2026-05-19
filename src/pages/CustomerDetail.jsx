import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaUserCog,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCar,
  FaArrowLeft,
} from "react-icons/fa";

import customersData from "../data/customers.json";

export default function CustomerDetail() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundCustomer = customersData.find(
      (c) => c.id === id
    );

    if (!foundCustomer) {
      setError("Customer tidak ditemukan");
      return;
    }

    setCustomer(foundCustomer);
  }, [id]);

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

  if (!customer) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          Loading...
        </div>
      </div>
    );
  }

  const loyaltyStyle =
    customer.loyalty === "Gold"
      ? "bg-amber-50 text-amber-600 border-amber-200"
      : customer.loyalty === "Silver"
      ? "bg-slate-100 text-slate-600 border-slate-200"
      : "bg-orange-50 text-orange-600 border-orange-200";

  return (
    <div className="p-6">
      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">
            Detail Customer
          </h1>

          <p className="text-slate-500 mt-1">
            Informasi lengkap pelanggan bengkel
          </p>
        </div>

        {/* BACK BUTTON */}
        <Link
          to="/customers"
          className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <FaArrowLeft />
          Kembali
        </Link>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-red-500 to-red-400 px-8 py-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* AVATAR */}
            <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center text-4xl shadow-lg">
              <FaUserCog />
            </div>

            {/* INFO */}
            <div>
              <h2 className="text-4xl font-bold">
                {customer.name}
              </h2>

              <p className="text-red-100 mt-2 font-medium">
                Customer ID : {customer.id}
              </p>

              {/* BADGE */}
              <div
                className={`inline-flex items-center justify-center mt-4 px-4 py-1.5 rounded-xl border text-sm font-bold ${loyaltyStyle}`}
              >
                {customer.loyalty}
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* EMAIL */}
          <InfoCard
            icon={<FaEnvelope />}
            title="Email"
            value={customer.email}
          />

          {/* PHONE */}
          <InfoCard
            icon={<FaPhoneAlt />}
            title="Nomor HP"
            value={customer.phone}
          />

          {/* ADDRESS */}
          <InfoCard
            icon={<FaMapMarkerAlt />}
            title="Alamat"
            value={customer.address}
          />

          {/* VEHICLE */}
          <InfoCard
            icon={<FaCar />}
            title="Kendaraan"
            value={customer.vehicle}
          />
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