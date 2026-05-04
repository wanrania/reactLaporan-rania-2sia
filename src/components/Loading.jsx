import { FaTools } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-orange-900 text-white">
      
      {/* Spinner */}
      <div className="relative mb-6">
        <div className="w-14 h-14 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
        
        {/* Icon tengah */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FaTools className="text-orange-400 text-lg animate-pulse" />
        </div>
      </div>

      {/* Text */}
      <p className="text-orange-400 text-lg font-semibold tracking-wide">
        Memuat Sistem Bengkel...
      </p>

      {/* Subtext */}
      <p className="text-slate-400 text-sm mt-2">
        Mohon tunggu sebentar
      </p>

    </div>
  );
}