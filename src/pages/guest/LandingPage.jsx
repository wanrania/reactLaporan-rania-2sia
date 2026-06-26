import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBars,
  FaBell,
  FaBolt,
  FaCalendarCheck,
  FaCarSide,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaGift,
  FaHistory,
  FaStar,
  FaTimes,
  FaTools,
  FaUserCheck,
  FaUsers,
  FaWrench,
} from "react-icons/fa";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "Home", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Membership", href: "#membership" },
    { name: "Promo", href: "#home" },
    { name: "Tentang Kami", href: "#home" },
    { name: "Contact", href: "#home" },
  ];

  const services = [
    {
      icon: FaTools,
      title: "Servis Berkala",
      desc: "Perawatan rutin untuk menjaga performa kendaraan tetap stabil.",
    },
    {
      icon: FaWrench,
      title: "Tune Up",
      desc: "Pengecekan dan penyetelan mesin agar kendaraan lebih responsif.",
    },
    {
      icon: FaCalendarCheck,
      title: "Booking Online",
      desc: "Atur jadwal servis lebih mudah tanpa harus antre lama.",
    },
    {
      icon: FaGift,
      title: "Reward Point",
      desc: "Dapatkan point setiap transaksi servis sebagai member Auto Tech.",
    },
    {
      icon: FaHistory,
      title: "Riwayat Servis",
      desc: "Simpan catatan servis kendaraan secara rapi dan digital.",
    },
    {
      icon: FaChartLine,
      title: "Monitoring Kendaraan",
      desc: "Pantau aktivitas servis dan kebutuhan kendaraan secara terukur.",
    },
  ];

  const stats = [
    {
      icon: FaUsers,
      value: "5.000+",
      label: "Total Customer",
    },
    {
      icon: FaCarSide,
      value: "8.400+",
      label: "Kendaraan Diservis",
    },
    {
      icon: FaUserCheck,
      value: "1.200+",
      label: "Member Aktif",
    },
    {
      icon: FaStar,
      value: "98%",
      label: "Tingkat Kepuasan",
    },
  ];

  const workflows = [
    {
      icon: FaCalendarCheck,
      title: "Booking",
      desc: "Member memilih layanan, kendaraan, dan jadwal servis.",
    },
    {
      icon: FaCarSide,
      title: "Datang ke Bengkel",
      desc: "Kendaraan masuk sesuai jadwal yang sudah dikonfirmasi.",
    },
    {
      icon: FaTools,
      title: "Servis",
      desc: "Tim teknisi mengerjakan servis sesuai kebutuhan kendaraan.",
    },
    {
      icon: FaCheckCircle,
      title: "Selesai",
      desc: "Riwayat servis tersimpan dan member memperoleh reward point.",
    },
  ];

  const memberBenefits = [
    {
      icon: FaGift,
      title: "Reward Point",
      desc: "Kumpulkan point dari setiap transaksi servis.",
    },
    {
      icon: FaStar,
      title: "Promo Eksklusif",
      desc: "Akses penawaran khusus untuk member Auto Tech.",
    },
    {
      icon: FaHistory,
      title: "Riwayat Servis Digital",
      desc: "Semua catatan servis kendaraan tersimpan rapi.",
    },
    {
      icon: FaCalendarCheck,
      title: "Booking Prioritas",
      desc: "Dapatkan pengalaman booking yang lebih cepat.",
    },
    {
      icon: FaBell,
      title: "Reminder Servis",
      desc: "Pengingat jadwal perawatan kendaraan berikutnya.",
    },
    {
      icon: FaClipboardList,
      title: "Dashboard Member",
      desc: "Pantau kendaraan, point, dan aktivitas servis dalam satu tempat.",
    },
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

      {/* SERVICES */}
      <section id="layanan" className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-widest text-red-500">
              Layanan Bengkel
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
              Semua layanan utama bengkel dalam pengalaman digital yang rapi.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Auto Tech membantu pelanggan melakukan servis kendaraan dengan
              proses yang lebih mudah, transparan, dan terhubung dengan member
              dashboard.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-red-200 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="bg-slate-50 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-red-500">
                  Statistik Bengkel
                </p>

                <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
                  Performa bengkel yang bisa dilihat secara cepat.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-500">
                  Data ringkas untuk menunjukkan skala layanan dan kepercayaan
                  pelanggan terhadap Auto Tech.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                        <Icon />
                      </div>

                      <h3 className="mt-6 text-4xl font-black text-slate-950">
                        {stat.value}
                      </h3>

                      <p className="mt-2 font-bold text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-black uppercase tracking-widest text-red-500">
              Cara Kerja
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
              Alur servis dibuat sederhana dari booking sampai selesai.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-5">
            {workflows.map((workflow, index) => {
              const Icon = workflow.icon;

              return (
                <div key={workflow.title} className="relative">
                  {index < workflows.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] right-[-2.5rem] h-px bg-red-200" />
                  )}

                  <div className="relative h-full rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="mx-auto h-16 w-16 rounded-3xl bg-red-500 text-white flex items-center justify-center text-xl shadow-sm shadow-red-500/30">
                      <Icon />
                    </div>

                    <span className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 text-sm font-black">
                      {index + 1}
                    </span>

                    <h3 className="mt-4 text-xl font-black text-slate-900">
                      {workflow.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-500">
                      {workflow.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFIT MEMBER */}
      <section id="membership" className="bg-slate-50 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-widest text-red-500">
                Benefit Member
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
                Member Auto Tech mendapatkan pengalaman servis yang lebih
                personal.
              </h2>
            </div>

            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white border border-slate-200 px-6 py-4 font-black text-slate-700 hover:border-red-200 hover:text-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Daftar Member
              <FaArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:bg-red-500 hover:border-red-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900 group-hover:text-white transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500 group-hover:text-red-50 transition-colors duration-300">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
