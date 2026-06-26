import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowUp,
  FaBars,
  FaBell,
  FaBolt,
  FaCalendarCheck,
  FaCarSide,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaGift,
  FaHistory,
  FaInstagram,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaStar,
  FaTag,
  FaTimes,
  FaTools,
  FaUserCheck,
  FaUsers,
  FaWhatsapp,
  FaWrench,
} from "react-icons/fa";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const menus = [
    { name: "Home", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Membership", href: "#membership" },
    { name: "Promo", href: "#promo" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Contact", href: "#contact" },
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

  const promos = [
    {
      icon: FaTools,
      badge: "Hemat 20%",
      title: "Diskon Servis Berkala",
      desc: "Paket perawatan rutin lebih hemat untuk kendaraan harian.",
    },
    {
      icon: FaCarSide,
      badge: "Gratis",
      title: "Gratis Cuci Kendaraan",
      desc: "Cuci kendaraan gratis setelah transaksi servis tertentu.",
    },
    {
      icon: FaMoneyBillWave,
      badge: "Cashback",
      title: "Cashback Member",
      desc: "Dapatkan cashback point khusus untuk member aktif.",
    },
    {
      icon: FaGift,
      badge: "Bonus",
      title: "Bonus Reward Point",
      desc: "Tambahan reward point untuk booking servis melalui portal.",
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      avatar: "BS",
      rating: 5,
      comment:
        "Booking servis jadi lebih cepat. Saya bisa cek riwayat kendaraan tanpa menyimpan nota manual.",
    },
    {
      name: "Rina Amelia",
      avatar: "RA",
      rating: 5,
      comment:
        "Dashboard membernya rapi dan mudah dipahami. Reminder servis sangat membantu untuk kendaraan keluarga.",
    },
    {
      name: "Andi Saputra",
      avatar: "AS",
      rating: 5,
      comment:
        "Reward point dan promo membernya terasa berguna. Proses servis juga transparan dari awal sampai selesai.",
    },
  ];

  const heroStats = [
    "⭐ 4.9 Rating",
    "🚗 5000+ Servis",
    "👥 1000+ Member",
    "🛠 10 Tahun Pengalaman",
  ];

  useEffect(() => {
    const sectionIds = ["home", "layanan", "membership", "promo", "contact", "about"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 40);
      setShowBackToTop(scrollY > 400);

      const currentSection =
        sectionIds.find((id) => {
          const section = document.getElementById(id);

          if (!section) return false;

          const rect = section.getBoundingClientRect();

          return rect.top <= 120 && rect.bottom > 120;
        }) || "home";

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToTop = () => {
    const target = document.querySelector("#home");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", "#home");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 border-b border-slate-200 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
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
                  className={`group relative text-sm font-semibold transition-all duration-300 ${
                    activeSection === menu.href.replace("#", "")
                      ? "text-red-500"
                      : "text-slate-600 hover:text-red-500"
                  }`}
                >
                  {menu.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-red-500 rounded-full transition-all duration-300 ${
                      activeSection === menu.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
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
                      className={`rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                        activeSection === menu.href.replace("#", "")
                          ? "bg-red-50 text-red-500"
                          : "text-slate-600 hover:bg-red-50 hover:text-red-500"
                      }`}
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

              <div className="mt-6 flex flex-wrap gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-black text-slate-700 shadow-sm backdrop-blur-xl hover:border-red-200 hover:text-red-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {stat}
                  </div>
                ))}
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
                  <div className="h-14 w-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
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
                      className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
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

                  <div className="group relative h-full rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="mx-auto h-16 w-16 rounded-3xl bg-red-500 text-white flex items-center justify-center text-xl shadow-sm shadow-red-500/30 group-hover:scale-110 transition-all duration-300">
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
                  <div className="h-14 w-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-300">
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

      {/* PROMO UNGGULAN */}
      <section id="promo" className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-widest text-red-500">
                Promo Unggulan
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
                Promo aktif untuk pengalaman servis yang lebih hemat.
              </h2>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-black text-red-600">
              Khusus Member Auto Tech
            </div>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promos.map((promo) => {
              const Icon = promo.icon;

              return (
                <div
                  key={promo.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-red-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon />
                    </div>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-black text-red-500 border border-red-100">
                      {promo.badge}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-slate-900">
                    {promo.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {promo.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="bg-slate-50 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-black uppercase tracking-widest text-red-500">
              Testimoni Pelanggan
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
              Dipercaya pelanggan yang ingin servis lebih praktis.
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-red-500 text-white flex items-center justify-center font-black shadow-sm shadow-red-500/30 group-hover:scale-110 transition-all duration-300">
                      {testimonial.avatar}
                    </div>

                    <div>
                      <h3 className="font-black text-slate-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-bold text-slate-500">
                        Member Auto Tech
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-1 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-red-500 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-red-500/20">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-red-700/20 blur-2xl" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-red-100">
                  Gabung Sekarang
                </p>

                <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
                  Siap menjadi Member Auto Tech?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-red-50">
                  Daftar sebagai member untuk menikmati booking prioritas,
                  reward point, promo eksklusif, dan riwayat servis digital.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-red-600 font-black shadow-sm hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
                >
                  Daftar Member
                  <FaArrowRight className="text-sm" />
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-7 py-4 text-white font-black hover:bg-red-600 hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about" className="bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-red-500 text-white flex items-center justify-center shadow-sm shadow-red-500/30">
                  <FaTools />
                </div>

                <h3 className="text-2xl font-black tracking-tight text-white">
                  AUTO
                  <span className="text-red-500">TECH</span>
                </h3>
              </div>

              <p className="mt-5 leading-7">
                Auto Tech CRM adalah platform bengkel modern untuk mengelola
                servis, pelanggan, kendaraan, membership, dan reward.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FaClock className="mt-1 text-red-400" />
                <div>
                  <p className="font-black text-white">Jam Operasional</p>
                  <p className="mt-1 text-sm">Senin - Sabtu, 08.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-black text-white">Menu</h4>

              <div className="mt-5 grid gap-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Layanan", href: "#layanan" },
                  { name: "Membership", href: "#membership" },
                  { name: "Promo", href: "#promo" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(event) => handleMenuClick(event, item.href)}
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div id="contact">
              <h4 className="font-black text-white">Kontak</h4>

              <div className="mt-5 grid gap-4">
                <p className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-red-400" />
                  hello@autotech.id
                </p>

                <p className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 text-red-400" />
                  0822 8666 7590
                </p>

                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-red-400" />
                  Jl. Auto Tech No. 10, Pekanbaru
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-black text-white">Media Sosial</h4>

              <div className="mt-5 flex gap-3">
                {[
                  { name: "Instagram", icon: FaInstagram, href: "#contact" },
                  { name: "Facebook", icon: FaFacebookF, href: "#contact" },
                  {
                    name: "WhatsApp",
                    icon: FaWhatsapp,
                    href: "https://wa.me/6282286667590?text=Halo%20Admin%20Auto%20Tech,%20saya%20ingin%20bertanya%20mengenai%20layanan%20bengkel.",
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  const isWhatsApp = social.name === "WhatsApp";

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      onClick={
                        isWhatsApp
                          ? undefined
                          : (event) => handleMenuClick(event, social.href)
                      }
                      target={isWhatsApp ? "_blank" : undefined}
                      rel={isWhatsApp ? "noreferrer" : undefined}
                      className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:-translate-y-1 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-sm">
            <p>© 2026 Auto Tech CRM. All rights reserved.</p>
            <p>Modern Workshop Management System</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/6282286667590?text=Halo%20Admin%20Auto%20Tech,%20saya%20ingin%20bertanya%20mengenai%20layanan%20bengkel."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat Admin Bengkel"
        className="group fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-green-500/30 animate-pulse hover:bg-green-600 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300"
      >
        <FaWhatsapp />

        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-2xl bg-slate-900 px-4 py-2 text-sm font-bold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          Chat Admin Bengkel
        </span>
      </a>

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 h-12 w-12 rounded-full border border-slate-200 bg-white text-red-500 flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
