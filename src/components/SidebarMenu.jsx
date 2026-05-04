import React from "react";
import { Link } from "react-router-dom";
import { 
  FaExclamationTriangle, 
  FaUserSlash, 
  FaShieldAlt 
} from "react-icons/fa";

export const ErrorMenuItems = () => {
  return (
    <>
      {/* TITLE */}
      <div className="px-3 py-2 mb-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center">
          🔧 Error Testing
        </span>
      </div>

      {/* 400 */}
      <li>
        <Link
          to="/error/400"
          className="flex items-center px-3 py-2 text-sm text-slate-400 hover:bg-orange-500/10 hover:text-orange-400 rounded-lg transition-all group"
        >
          <FaExclamationTriangle className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
          <span>Bad Request (400)</span>
          <span className="ml-auto text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">
            TEST
          </span>
        </Link>
      </li>

      {/* 401 */}
      <li>
        <Link
          to="/error/401"
          className="flex items-center px-3 py-2 text-sm text-slate-400 hover:bg-yellow-500/10 hover:text-yellow-400 rounded-lg transition-all group"
        >
          <FaUserSlash className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
          <span>Unauthorized (401)</span>
          <span className="ml-auto text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">
            TEST
          </span>
        </Link>
      </li>

      {/* 403 */}
      <li>
        <Link
          to="/error/403"
          className="flex items-center px-3 py-2 text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-all group"
        >
          <FaShieldAlt className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
          <span>Forbidden (403)</span>
          <span className="ml-auto text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
            TEST
          </span>
        </Link>
      </li>

      {/* DIVIDER */}
      <li className="my-5">
        <div className="h-px bg-white/10"></div>
      </li>
    </>
  );
};