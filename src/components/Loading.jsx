import { FaTools } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-50 text-slate-900">
      
      {/* Spinner */}
      <div className="relative mb-6">
        {/* Lingkaran Loading */}
        <div className="w-16 h-16 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin shadow-sm"></div>
        
        {/* Icon di tengah lingkaran */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-1.5 rounded-full shadow-sm">
            <FaTools className="text-red-500 text-sm animate-pulse" />
          </div>
        </div>
      </div>

      {/* Text */}
      <p className="text-slate-800 text-lg font-bold tracking-wide">
        Memuat Sistem Bengkel...
      </p>

      {/* Subtext */}
      <p className="text-slate-500 font-medium text-sm mt-2">
        Mohon tunggu sebentar
      </p>

    </div>
  );
}