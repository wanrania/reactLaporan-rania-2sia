export default function UniversityGuestView({ universities }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {universities.map((uni) => (
        <div
          key={uni.id}
          className="group bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 overflow-hidden"
        >
          {/* Image */}
          <div className="relative mb-6">
            <img
              src={uni.image}
              alt={uni.name}
              className="w-full h-48 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-md">
              {uni.details.ranking}
            </div>
          </div>

          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {uni.name}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3">{uni.description}</p>

          {/* Location & Year */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2 text-blue-600">
              <span>📍</span>
              <span>{uni.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span>📅</span>
              <span>{uni.establishedYear}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">
                {uni.details.totalStudents.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">Mahasiswa</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600">
                {uni.programs.length}+
              </div>
              <div className="text-xs text-gray-600">Program</div>
            </div>
          </div>

          {/* Action Button */}
          <a
            href={uni.details.website}
            target="_blank"
            rel="noreferrer"
            className="w-full block bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-4 px-6 rounded-2xl text-center shadow-xl hover:from-blue-600 hover:to-indigo-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform"
          >
            🌐 Kunjungi Website
          </a>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-blue-100">
            {uni.faculties.slice(0, 3).map((faculty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
              >
                {faculty}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}