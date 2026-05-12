import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import customersData from "../data/customers.json";

export default function CustomerDetail() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundCustomer = customersData.find((c) => c.id === id);

    if (!foundCustomer) {
      setError("Customer tidak ditemukan");
      return;
    }

    setCustomer(foundCustomer);
  }, [id]);

  if (error) {
    return <div className="text-red-600 p-6">{error}</div>;
  }

  if (!customer) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 max-w-xl mx-auto overflow-hidden">
        
        {/* HEADER */}
        <div className="bg-red-500 px-6 py-8 text-white">
          <h2 className="text-3xl font-bold">{customer.name}</h2>
          <p className="text-red-100 mt-1">
            Customer ID: {customer.id}
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4">

          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-semibold text-slate-700">
              {customer.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Nomor HP</p>
            <p className="font-semibold text-slate-700">
              {customer.phone}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Alamat</p>
            <p className="font-semibold text-slate-700">
              {customer.address}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Kendaraan</p>
            <p className="font-semibold text-slate-700">
              {customer.vehicle}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Loyalty</p>

            <span
              className={`inline-block mt-1 px-3 py-1 rounded-lg text-sm font-bold ${
                customer.loyalty === "Gold"
                  ? "bg-amber-100 text-amber-700"
                  : customer.loyalty === "Silver"
                  ? "bg-slate-200 text-slate-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {customer.loyalty}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}