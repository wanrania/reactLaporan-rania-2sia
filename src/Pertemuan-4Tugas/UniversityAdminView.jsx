export default function UniversityAdminView({ universities }) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-100 overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <tr>
              <th className="px-8 py-6 text-left font-bold text-lg">#</th>
              <th className="px-6 py-6 text-left font-bold text-lg">Nama Universitas</th>
              <th className="px-6 py-6 text-left font-bold text-lg hidden md:table-cell">Lokasi</th>
              <th className="px-6 py-6 text-center font-bold text-lg">Ranking</th>
              <th className="px-6 py-6 text-center font-bold text-lg">Mahasiswa</th>
              <th className="px-6 py-6 text-center font-bold text-lg">Tahun</th>
              <th className="px-6 py-6 text-center font-bold text-lg">Program</th>
              <th className="px-6 py-6 text-center font-bold text-lg">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-100">
            {universities.map((uni, index) => (
              <tr
                key={uni.id}
                className="hover:bg-blue-50/50 transition-colors duration-200 group"
              >
                <td className="px-8 py-6 font-semibold text-gray-800">
                  {index + 1}
                </td>
                <td className="px-6 py-6 font-bold text-xl text-gray-800 max-w-0">
                  <div className="truncate group-hover:text-blue-600">
                    {uni.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                    {uni.description}
                  </div>
                </td>
                <td className="px-6 py-6 text-gray-700 hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{uni.location}</span>
                  </div>
                </td>
                <td className="px-6 py-6 text-center">
                  <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-full text-sm">
                    {uni.details.ranking}
                  </span>
                </td>
                <td className="px-6 py-6 text-center font-semibold text-blue-600">
                  {uni.details.totalStudents.toLocaleString()}
                </td>
                <td className="px-6 py-6 text-center text-gray-600">
                  {uni.establishedYear}
                </td>
                <td className="px-6 py-6 text-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {uni.programs.length}+
                  </span>
                </td>
                <td className="px-6 py-6 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <a
                      href={uni.details.website}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors"
                      title="Website"
                    >
                      🌐
                    </a>
                    <button className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-xl transition-colors">
                      ✏️
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-100 rounded-xl transition-colors">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}