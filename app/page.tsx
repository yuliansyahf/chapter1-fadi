import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // <--- ANIMATION IMPORT
import { FaInstagram, FaYoutube, FaDribbble, FaGithub, FaBehance, FaWhatsapp } from "react-icons/fa";


export default function Home() {
  return (
    <div className="min-h-screen bg-transparent !bg-transparent text-black">
      
      {/* Background Image */}
<div className="absolute inset-0 z-0">
  <Image
    src="/image/home/bg.png"
    alt="Background"
    fill
    className="object-cover" // geser sesuai kebutuhan
    priority
  />
</div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 ml-50">
          <div className="flex flex-col items-start text-left max-w-xl">

            {/* Text Content */}
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Hai, aku Fadi Al..
            </h3>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Creative Enthusiast
            </h1>

            <p className="text-gray-800 mb-8 max-w-2xl text-lg leading-relaxed">
              Siswa SMK yang passionate di dunia kreatif digital. Mengembangkan berbagai skill desain, teknologi, dan konten untuk menciptakan karya yang impactful dan penuh makna.
            </p>

            {/* Contact Info */}
            <div className="mb-8 text-gray-700 space-y-2">
              <p><span className="font-semibold">Email:</span> yuliansyah@gmail.com</p>
              <p><span className="font-semibold">Behance:</span> behance.net/fadiguanteng</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#" 
                className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-black hover:text-white transition duration-300"
              >
                Unduh CV
              </Link>
              <Link 
                href="#" 
                className="border border-black text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
              >
                Ayo Kolaborasi!
              </Link>
            </div>
          </div>

          {/* Services Section (DITURUNKAN & DIBUAT 2×2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-36 max-w-5xl mx-auto ml-35">

            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl p-6 text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Graphic Design</h4>
              <p className="text-sm text-gray-700">Desain grafis, UI/UX & editing visual</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl p-6 text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Content Creation</h4>
              <p className="text-sm text-gray-700">Konten kreatif media sosial</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl p-6 text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Motion Design</h4>
              <p className="text-sm text-gray-700">Animation and motion graphics</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl p-6 text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Video Editing</h4>
              <p className="text-sm text-gray-700">Editing video, reels, & movie</p>
            </div>

          </div>
        </div>
      </section>

      {/* NEED CREATIVE DESIGN + FOLLOW ME SECTION */}
<section className="relative py-24 bg-transparent mr-35">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <div className="w-full flex justify-center">
        <Image
          src="/image/home/creative.png"
          alt="Creative Design"
          width={900}
          height={900}
          className="rounded-3xl object-contain drop-shadow-xl"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="text-right mr-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Butuh Tangan Kreatif?
        </h2>

        <h3 className="text-2xl lg:text-3xl font-bold text-yellow-500 mb-6">
          Ada Fadi di sini!
        </h3>

        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Sebagai siswa yang aktif berkarya, saya selalu excited eksplorasi hal baru di dunia digital.
          Dari tugas sekolah sampai project personal—setiap karya adalah proses belajar dan berbagi inspirasi.
        </p>

        <Link 
          href="https://www.instagram.com/faadiial/"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          Hubungi Aku!
        </Link>

       {/* FOLLOW ME ICONS ONLY */}
<div className="mt-12">
  <div className="flex justify-end gap-4">

    {/* Instagram */}
    <Link 
      href="https://www.instagram.com/faadiial/"
      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
    >
      <i className="ri-instagram-line text-3xl" style={{ color: "#E4405F" }}></i>
    </Link>

    {/* GitHub */}
    <Link 
      href="https://github.com/yuliansyahf"
      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
    >
      <i className="ri-github-line text-3xl" style={{ color: "#000000" }}></i>
    </Link>

    {/* YouTube */}
    <Link 
      href="https://www.youtube.com/@yuliansyahFadi"
      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
    >
      <i className="ri-youtube-line text-3xl" style={{ color: "#FF0000" }}></i>
    </Link>

    {/* Dribbble */}
    <Link 
      href="https://dribbble.com/fadi-alyuliansyah"
      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
    >
      <i className="ri-dribbble-line text-3xl" style={{ color: "#EA4C89" }}></i>
    </Link>

    {/* Behance */}
    <Link 
      href="https://www.behance.net/"
      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
    >
      <i className="ri-behance-line text-3xl" style={{ color: "#1769FF" }}></i>
    </Link>

    {/* WhatsApp */}
    <Link 
      href="https://wa.me/6282228059933"
      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
    >
      <i className="ri-whatsapp-line text-3xl" style={{ color: "#25D366" }}></i>
    </Link>

  </div>
</div>


      </div>
    </div>
  </div>
</section>

 {/* DESIGN SKILLS SECTION */}
<section className="relative py-20 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/image/home/bawa.png"   // ganti dengan gambar kamu
      alt="Background Skills"
      fill
      className="object-cover opacity-60"
    />
  </div>

  <div className="container mx-auto px-4 lg:px-8">

    {/* Wrapper agar lebih sempit */}
    <div className="max-w-5xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="max-w-md">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Kemampuan Desain Saya
          </h2>

          <p className="text-gray-700 mb-10 text-lg leading-relaxed">
            Berikut adalah skill yang saya kuasai dalam bekerja sebagai kreator digital.
            Setiap desain, konten, dan visual saya buat dengan profesional, modern, 
            dan berdampak.
          </p>

          {/* AFTER EFFECTS */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800">After Effect</span>
              <span className="font-semibold text-gray-800">60%</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "60%" }}></div>
            </div>
          </div>

          {/* CAPCUT */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800">CapCut</span>
              <span className="font-semibold text-gray-800">90%</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>

          {/* FIGMA */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800">Figma</span>
              <span className="font-semibold text-gray-800">90%</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – 4 BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Graphic Design */}
          <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-5 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Graphic Design</h3>
          </div>

          {/* Content Creation (NAIK) */}
          <div className="bg-white shadow-lg rounded-2xl p-10 text-center -mt-4">
            <div className="w-20 h-20 mx-auto mb-5 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">✏️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Content Creation</h3>
          </div>

          {/* Motion Design */}
          <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-5 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🎞️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Motion Design</h3>
          </div>

          {/* Video Editing (NAIK) */}
          <div className="bg-white shadow-lg rounded-2xl p-10 text-center -mt-6">
            <div className="w-20 h-20 mx-auto mb-5 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🎬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Video Editing</h3>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>



    </div>
  );
}
