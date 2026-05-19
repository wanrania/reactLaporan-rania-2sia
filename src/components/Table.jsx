export default function Table({
  headers = [],
  children,
  footer,
}) {
  return (
    <div className="px-6">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

        {/* TABLE */}
        <div className="overflow-x-auto max-h-[500px]">
          <table className="w-full text-left border-collapse table-auto">

            {/* HEAD */}
            <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-bold tracking-wider border-b border-slate-200 sticky top-0 z-10">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-4"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-slate-100 text-sm">
              {children}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        {footer && (
          <div className="border-t border-slate-200 bg-slate-50/50">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}