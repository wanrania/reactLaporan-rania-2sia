import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        
        {/* TOP ACCENT */}
        <div className="h-1 w-full bg-gradient-to-r from-red-500 via-orange-400 to-red-500"></div>

        <div className="px-8 py-7 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* LEFT */}
          <div className="flex items-center gap-5">
            {/* LOGO */}
            <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shadow-sm">
              <span className="text-2xl">🔧</span>
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-800">
                AUTO TECH
              </h2>

              <p className="text-slate-500 font-medium text-sm">
                Sistem Manajemen Bengkel Modern
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex items-center gap-3">
            <SocialButton icon={<FaFacebookF />} />
            <SocialButton icon={<FaInstagram />} />
            <SocialButton icon={<FaGithub />} />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <span>Made with</span>

              <FaHeart className="text-red-500 animate-pulse" />

              <span>
                by <b className="text-slate-700">Rania</b>
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-100 bg-slate-50/70 px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-slate-400 font-medium">
            © 2026 AUTO TECH. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-slate-400">
            <button className="hover:text-red-500 transition">
              Privacy Policy
            </button>

            <button className="hover:text-red-500 transition">
              Terms
            </button>

            <button className="hover:text-red-500 transition">
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* SOCIAL BUTTON */
function SocialButton({ icon }) {
  return (
    <button
      className="
        w-11 h-11 rounded-2xl
        border border-slate-200
        bg-slate-50
        hover:bg-red-50
        hover:border-red-200
        hover:text-red-500
        hover:-translate-y-1
        transition-all duration-300
        flex items-center justify-center
        text-slate-600
        shadow-sm
      "
    >
      {icon}
    </button>
  );
}