import universitiesData from "./universities.json";
import { useState } from "react";
import UniversityGuestView from "./UniversityGuestView";
import UniversityAdminView from "./UniversityAdminView";

export default function UniversityDirectory() {
  const [viewMode, setViewMode] = useState("guest"); // "guest" or "admin"
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    locationFilter: "",
    rankingFilter: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Filter logic
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _locationFilter = dataForm.locationFilter.toLowerCase();
  const _rankingFilter = dataForm.rankingFilter.toLowerCase();
  
  const filteredUniversities = universitiesData.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(_searchTerm) ||
      uni.description.toLowerCase().includes(_searchTerm) ||
      uni.location.toLowerCase().includes(_searchTerm);

    const matchesLocation = _locationFilter
      ? uni.location.toLowerCase().includes(_locationFilter)
      : true;

    const matchesRanking = _rankingFilter
      ? uni.details.ranking.toLowerCase().includes(_rankingFilter)
      : true;

    return matchesSearch && matchesLocation && matchesRanking;
  });

  // Get unique locations and rankings for filters
  const uniqueLocations = [...new Set(universitiesData.map(uni => uni.location))];
  const uniqueRankings = [...new Set(universitiesData.map(uni => uni.details.ranking))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            🎓 University Directory 🎓
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Temukan universitas terbaik kamu di Indonesia
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-1 shadow-xl border border-blue-100">
            <button
              onClick={() => setViewMode("guest")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                viewMode === "guest"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-200"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              👥 Guest View
            </button>
            <button
              onClick={() => setViewMode("admin")}
              className={`px-6 py-3 rounded-xl font-semibold ml-1 transition-all duration-300 ${
                viewMode === "admin"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-200"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              ⚙️ Admin View
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                name="searchTerm"
                value={dataForm.searchTerm}
                placeholder="🔍 Cari nama universitas, lokasi, atau deskripsi..."
                className="w-full px-6 py-4 border-2 border-blue-200 rounded-2xl bg-white/50 text-gray-800 placeholder-gray-500 shadow-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
                onChange={handleChange}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 text-xl">
                🔍
              </div>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <select
                name="locationFilter"
                value={dataForm.locationFilter}
                className="w-full px-6 py-4 border-2 border-blue-200 rounded-2xl bg-white/50 text-gray-800 shadow-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 transition-all duration-300 hover:border-blue-300 hover:shadow-xl appearance-none cursor-pointer"
                onChange={handleChange}
              >
                <option value="">📍 Semua Lokasi</option>
                {uniqueLocations.map((location, index) => (
                  <option key={index} value={location}>
                    📍 {location}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-blue-400">
                ▼
              </div>
            </div>

            {/* Ranking Filter */}
            <div className="relative">
              <select
                name="rankingFilter"
                value={dataForm.rankingFilter}
                className="w-full px-6 py-4 border-2 border-blue-200 rounded-2xl bg-white/50 text-gray-800 shadow-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 transition-all duration-300 hover:border-blue-300 hover:shadow-xl appearance-none cursor-pointer"
                onChange={handleChange}
              >
                <option value="">🏆 Semua Ranking</option>
                {uniqueRankings.map((ranking, index) => (
                  <option key={index} value={ranking}>
                    🏆 {ranking}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-blue-400">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {viewMode === "guest" ? (
            <UniversityGuestView universities={filteredUniversities} />
          ) : (
            <UniversityAdminView universities={filteredUniversities} />
          )}
        </div>

        {/* Results count */}
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 bg-white/50 px-8 py-4 rounded-2xl inline-block backdrop-blur-md border border-blue-100">
            📊 Menampilkan <span className="font-bold text-blue-600">{filteredUniversities.length}</span> dari {universitiesData.length} universitas
          </p>
        </div>
      </div>
    </div>
  );
}