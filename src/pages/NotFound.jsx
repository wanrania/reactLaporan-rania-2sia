import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaFrownOpen,
} from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Page Header */}
      <PageHeader 
        title="Oops! Page Not Found"
        breadcrumb={["Home", "Not Found"]}
      >
        <div className="flex space-x-2">
          <Link 
            to="/" 
            className="bg-hijau text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-hijau-dark transition"
          >
            <FaHome />
            <span>Beranda</span>
          </Link>
          <button className="bg-biru text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-biru-dark transition">
            <FaSearch />
            <span>Cari Lagi</span>
          </button>
        </div>
      </PageHeader>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12 lg:py-20">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl p-10 lg:p-16 rounded-3xl shadow-2xl border border-white/50 max-w-2xl w-full transform transition-all hover:scale-[1.02] animate-float">
          
          {/* Animated Illustration */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Kucing Tersesat Imut */}
              <svg 
                width="160" 
                height="160" 
                viewBox="0 0 160 160" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-400 drop-shadow-lg"
              >
                {/* Badan */}
                <ellipse cx="80" cy="95" rx="55" ry="45" fill="currentColor" opacity="0.15"/>
                <path d="M80 35C102 35 120 53 120 75V100C120 114 110 124 96 124H64C50 124 40 114 40 100V75C40 53 58 35 80 35Z" fill="currentColor"/>
                
                {/* Telinga */}
                <path d="M55 40Q45 25 60 20Q70 25 65 40" fill="currentColor"/>
                <path d="M105 40Q115 25 100 20Q90 25 95 40" fill="currentColor"/>
                
                {/* Mata Sedih & Bingung */}
                <circle cx="65" cy="75" r="8" fill="white"/>
                <circle cx="95" cy="75" r="8" fill="white"/>
                <circle cx="68" cy="73" r="3" fill="#3B82F6"/>
                <circle cx="98" cy="73" r="3" fill="#3B82F6"/>
                <circle cx="68" cy="78" r="2" fill="#1E40AF"/>
                <circle cx="98" cy="78" r="2" fill="#1E40AF"/>
                
                {/* Air Mata Kecil */}
                <path d="M62 85Q65 88 68 85" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M92 85Q95 88 98 85" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                
                {/* Mulut Sedih */}
                <path d="M70 105Q80 110 90 105" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
                
                {/* Tanduk Tanya (?) di Kepala */}
                <path d="M75 25Q80 15 85 25Q90 20 95 30" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <circle cx="92" cy="35" r="3" fill="#F59E0B"/>
              </svg>
              
              {/* Efek Kilau */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300/50 rounded-full blur-xl animate-ping"></div>
            </div>
          </div>

          {/* 404 Number */}
          <div className="text-center mb-8">
            <h1 className="text-8xl lg:text-9xl font-black bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent tracking-tight mb-4 drop-shadow-lg">
              404
            </h1>
            <div className="inline-flex items-center gap-2 bg-yellow-200/80 px-4 py-2 rounded-full text-sm font-bold text-yellow-900 border border-yellow-300 animate-bounce-slow">
              <FaFrownOpen />
              <span>Halaman Tersesat!</span>
            </div>
          </div>
          
          {/* Title & Description */}
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Upss... Halaman yang dicari{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                tidak ditemukan
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
              Jangan sedih ya! Halaman yang kamu cari mungkin sedang liburan 
              atau sudah pindah ke alamat baru. Mari kita pulang ke beranda dulu!
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-hijau via-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 active:scale-95 text-lg"
            >
              <FaHome className="w-6 h-6 group-hover:animate-bounce" />
              <span>Pulang ke Beranda</span>
            </Link>
            
            <Link 
              to="/orders" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-biru via-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 active:scale-95 text-lg"
            >
              <FaCompass className="w-6 h-6" />
              <span>Lihat Orders</span>
            </Link>
          </div>

          {/* Funny Suggestions */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 italic text-center mb-4">
              💡 Tips: Coba cek URL atau refresh halaman
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-center">
              <div className="p-3 bg-pink-50 rounded-xl border border-pink-100">
                <FaSearch className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <div>Periksa URL</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <FaHome className="w-6 h-6 text-biru mx-auto mb-2" />
                <div>Kembali Beranda</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 left-10 w-24 h-24 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-32 right-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default NotFound;