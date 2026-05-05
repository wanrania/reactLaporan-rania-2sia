import React from "react";
import { FaTools } from "react-icons/fa";

export default function PageHeader({ 
  title = "Dashboard", 
  breadcrumb = [], 
  children 
}) {

  const breadcrumbItems = typeof breadcrumb === "string"
    ? [breadcrumb]
    : Array.isArray(breadcrumb)
    ? breadcrumb
    : [];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6">
      
      {/* LEFT */}
      <div className="flex flex-col">
        
        {/* TITLE */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg text-red-500 border border-red-100">
            <FaTools className="text-lg" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            {title}
          </h1>
        </div>

        {/* BREADCRUMB */}
        {breadcrumbItems.length > 0 && (
          <div className="flex items-center text-sm mt-3 space-x-2 ml-1">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                
                {index > 0 && (
                  <span className="text-slate-300 font-medium">/</span>
                )}

                <span className={`cursor-pointer transition-colors ${
                  index === breadcrumbItems.length - 1
                    ? "text-red-600 font-semibold"
                    : "text-slate-500 font-medium hover:text-slate-900"
                }`}>
                  {item}
                </span>

              </React.Fragment>
            ))}
          </div>
        )}

      </div>

      {/* RIGHT ACTION */}
      {children && (
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {children}
        </div>
      )}

    </div>
  );
}