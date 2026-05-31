import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-8 mb-4">
      <div className="bg-white border border-slate-100 rounded-3xl px-8 py-5 shadow-sm">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* LEFT */}
          <div>
            <h3 className="font-bold text-slate-800">
              AUTO TECH 
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Sistem Manajemen Bengkel Modern
            </p>
          </div>

          {/* CENTER */}
          <div className="flex items-center gap-3">

            <SocialButton icon={<FaFacebookF />} />

            <SocialButton icon={<FaInstagram />} />

            <SocialButton icon={<FaGithub />} />

          </div>

          {/* RIGHT */}
          <div className="text-sm text-slate-400">
            Version 1.0.0
          </div>

        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-slate-400">
            © 2026 AUTO TECH CRM. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <button className="text-slate-400 hover:text-red-500 transition">
              Privacy Policy
            </button>

            <button className="text-slate-400 hover:text-red-500 transition">
              Terms
            </button>

            <button className="text-slate-400 hover:text-red-500 transition">
              Support
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

function SocialButton({ icon }) {
  return (
    <button
      className="
        w-10 h-10
        rounded-xl
        bg-slate-50
        border border-slate-100
        hover:bg-red-50
        hover:text-red-500
        hover:border-red-100
        transition-all
        flex items-center justify-center
        text-slate-500
      "
    >
      {icon}
    </button>
  );
}