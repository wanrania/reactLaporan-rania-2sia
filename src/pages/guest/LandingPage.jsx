import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBars,
  FaBolt,
  FaCalendarCheck,
  FaChartLine,
  FaCheckCircle,
  FaGift,
  FaStar,
  FaTimes,
  FaTools,
  FaUsers,
} from "react-icons/fa";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "Home", href: "#home" },
    { name: "Layanan", href: "#home" },
    { name: "Membership", href: "#home" },
    { name: "Promo", href: "#home" },
    { name: "Tentang Kami", href: "#home" },
    { name: "Contact", href: "#home" },
  ];

  const handleMenuClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", href);
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a
              href="#home"
              onClick={(event) => handleMenuClick(event, "#home")}
              className="flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-2xl bg-red-500 text-white flex items-center justify-center shadow-sm shadow-red-500/30">
                <FaTools />
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                AUTO
                <span className="text-red-500">TECH</span>
              </h1>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {menus.map((menu) => (
                <a
                  key={menu.name}
                  href={menu.href}
                  onClick={(event) => handleMenuClick(event, menu.href)}
                  className="group relative text-sm font-semibold text-slate-600 hover:text-red-500 transition-all duration-300"
                >
                  {menu.name}
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/login"
                className="px-5 py-3 rounded-2xl border border-slate-200 text-slate-700 font-bold hover:border-red-200 hover:text-red-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Masuk
              </Link>

              <Link
                to="/register"
                className="px-5 py-3 rounded-2xl bg-red-500 text-white font-bold shadow-sm shadow-red-500/30 hover:bg-red-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Daftar Member
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm transition-all duration-300 hover:border-red-200 hover:text-red-500"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden pb-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-lg">
                <div className="grid gap-1">
                  {menus.map((menu) => (
                    <a
                      key={menu.name}
                      href={menu.href}
                      onClick={(event) => handleMenuClick(event, menu.href)}
                      className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                    >
                      {menu.name}
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-slate-100">
                  <Link
                    to="/login"
                    className="text-center px-4 py-3 rounded-2xl border border-slate-200 font-bold text-slate-700"
                  >
                    Masuk
                  </Link>

                  <Link
                    to="/register"
                    className="text-center px-4 py-3 rounded-2xl bg-red-500 font-bold text-white"
                  >
                    Daftar
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-white via-red-50 to-slate-50"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-white/70" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              {/* PRE-TITLE */}
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-600 px-4 py-2 text-sm font-bold border border-red-200 shadow-sm">
                <FaBolt className="text-xs" />
                Bengkel Digital Modern
              </div>

              {/* HEADLINE */}
              <h2 className="mt-7 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-slate-950">
                Servis Kendaraan
                <br />
                Lebih <span className="text-red-500">Mudah</span>
                <br />
                <span className="text-red-500">Cepat</span> dan Terpercaya
              </h2>

              {/* SUBHEADLINE */}
              <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-8 text-slate-600">
                Auto Tech menyatukan booking online, membership, reward,
                riwayat servis, dan promo dalam satu pengalaman bengkel modern
                yang rapi dan mudah dipantau.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-500 px-7 py-4 text-white font-black shadow-sm shadow-red-500/30 hover:bg-red-600 hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
                >
                  Daftar Member
                  <FaArrowRight className="text-sm" />
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 text-slate-700 font-black hover:border-red-200 hover:text-red-500 hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
                >
                  Masuk
                </Link>
              </div>

              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-600">
                  5000+ pelanggan puas mempercayakan servis di Auto Tech
                </p>
              </div>
            </div>

            {/* VISUAL DASHBOARD */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-red-200/40 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/70 bg-white/70 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl shadow-red-500/10">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-4 sm:p-5 overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                        Auto Tech CRM
                      </p>
                      <h3 className="text-white text-xl font-black mt-1">
                        Workshop Overview
                      </h3>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-3xl bg-white/10 border border-white/10 p-4 backdrop-blur-xl">
                      <div className="flex items-center justify-between">
                        <FaCalendarCheck className="text-red-300" />
                        <span className="text-green-300 text-xs font-bold">
                          +18%
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mt-4">
                        Booking Hari Ini
                      </p>
                      <h4 className="text-white text-3xl font-black">24</h4>
                    </div>

                    <div className="rounded-3xl bg-white/10 border border-white/10 p-4 backdrop-blur-xl">
                      <div className="flex items-center justify-between">
                        <FaUsers className="text-blue-300" />
                        <span className="text-blue-200 text-xs font-bold">
                          aktif
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mt-4">
                        Member Aktif
                      </p>
                      <h4 className="text-white text-3xl font-black">1.2K</h4>
                    </div>

                    <div className="col-span-2 rounded-3xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-slate-500 text-xs font-bold">
                            Grafik Servis
                          </p>
                          <h4 className="text-slate-900 text-xl font-black">
                            458 servis bulan ini
                          </h4>
                        </div>
                        <FaChartLine className="text-red-500" />
                      </div>

                      <div className="mt-6 flex items-end gap-2 h-28">
                        {[42, 65, 50, 82, 58, 74, 94, 70].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-xl bg-gradient-to-t from-red-500 to-red-300"
                              style={{ height: `${height}%` }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-3xl bg-red-500 p-4 text-white">
                      <FaGift />
                      <p className="text-red-100 text-xs mt-3">
                        Reward Point
                      </p>
                      <h4 className="text-2xl font-black">8.540</h4>
                    </div>

                    <div className="rounded-3xl bg-white/10 border border-white/10 p-4 text-white">
                      <FaCheckCircle className="text-green-300" />
                      <p className="text-slate-400 text-xs mt-3">
                        Service Selesai
                      </p>
                      <h4 className="text-2xl font-black">98%</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -left-8 top-12 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 shadow-xl animate-pulse">
                <p className="text-xs font-bold text-slate-500">
                  Booking Hari Ini
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                    <FaCalendarCheck />
                  </div>
                  <strong className="text-2xl">24</strong>
                </div>
              </div>

              <div className="hidden sm:block absolute -right-5 bottom-14 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 shadow-xl">
                <p className="text-xs font-bold text-slate-500">
                  Reward Point
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <FaGift />
                  </div>
                  <strong className="text-2xl">1.250</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
