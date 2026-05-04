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
    <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
      
      {/* LEFT */}
      <div className="flex flex-col">
        
        {/* TITLE */}
        <div className="flex items-center gap-3">
          <FaTools className="text-orange-400 text-xl" />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            {title}
          </h1>
        </div>

        {/* BREADCRUMB */}
        {breadcrumbItems.length > 0 && (
          <div className="flex items-center text-sm mt-2 space-x-2">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                
                {index > 0 && (
                  <span className="text-slate-500">/</span>
                )}

                <span className={`cursor-pointer transition ${
                  index === breadcrumbItems.length - 1
                    ? "text-orange-400 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}>
                  {item}
                </span>

              </React.Fragment>
            ))}
          </div>
        )}

      </div>

      {/* RIGHT ACTION */}
      <div>
        {children}
      </div>

    </div>
  );
}