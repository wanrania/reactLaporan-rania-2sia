import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import {
  FaHome,
  FaExclamationTriangle,
  FaShieldAlt,
  FaLock,
  FaUserSlash,
  FaTools,
} from "react-icons/fa";

const ErrorPage = ({ 
  code = "404", 
  description = "Halaman tidak ditemukan", 
}) => {

  const errorConfig = {
    "400": {
      icon: FaExclamationTriangle,
      title: "Bad Request",
      color: "from-orange-400 to-red-500",
      badge: "Input Bermasalah!",
    },
    "401": {
      icon: FaUserSlash,
      title: "Unauthorized",
      color: "from-yellow-400 to-orange-500",
      badge: "Belum Login!",
    },
    "403": {
      icon: FaShieldAlt,
      title: "Forbidden",
      color: "from-red-400 to-orange-600",
      badge: "Akses Ditolak!",
    },
    "404": {
      icon: FaLock,
      title: "Not Found",
      color: "from-slate-400 to-slate-600",
      badge: "Halaman Tidak Ada!",
    },
    "500": {
      icon: FaExclamationTriangle,
      title: "Server Error",
      color: "from-red-500 to-orange-600",
      badge: "Server Error!",
    },
  };

  const config = errorConfig[code] || errorConfig["404"];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-orange-900 text-white">
      
      {/* HEADER */}
      <PageHeader
        title={`${code} - ${config.title}`}
        breadcrumb={["Home", "Error", code]}
      >
        <div className="flex gap-2">
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <FaHome />
            <span>Beranda</span>
          </Link>
        </div>
      </PageHeader>

      {/* CONTENT */}
      <div className="flex items-center justify-center px-4 py-16">
        
        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl max-w-lg w-full text-center">
          
          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
              <Icon className="text-white text-3xl" />
            </div>
          </div>

          {/* BADGE */}
          <div className="mb-4">
            <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
              {config.badge}
            </span>
          </div>

          {/* CODE */}
          <h1 className={`text-7xl font-black bg-gradient-to-r ${config.color} bg-clip-text text-transparent mb-4`}>
            {code}
          </h1>

          {/* TITLE */}
          <h2 className="text-2xl font-bold mb-2">
            {config.title}
          </h2>

          {/* DESC */}
          <p className="text-slate-400 mb-8">
            {description}
          </p>

          {/* BUTTON */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold hover:scale-105 transition"
          >
            <FaTools />
            <span>Kembali ke Dashboard</span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;