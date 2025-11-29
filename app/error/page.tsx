"use client";

import Image from "next/image";
import Link from "next/link";

export default function ErrorCustomPage() {
  return (
    <div className="min-h-screen flex flex-col text-center justify-between items-center px-6 relative">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/image/error/404.png"
          alt="Background"
          fill
          className="object-cover opacity-100"
        />
      </div>

      {/* TOP TEXT */}
      <div className="mt-30">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900">
          404
        </h1>
        <p className="text-xl text-gray-800 font-medium mt-3">
          Maaf, halaman belum jadi kak.
        </p>
      </div>

      {/* EMPTY MIDDLE SPACE */}
      <div className="flex-1"></div>

      {/* BOTTOM BUTTON */}
      <div className="mb-50">
        <Link
          href="/"
          className="bg-yellow-400 text-black font-semibold py-3 px-10 rounded-full hover:bg-black hover:text-white transition shadow-lg"
        >
          Kembali ke Beranda
        </Link>
      </div>

    </div>
  );
}
