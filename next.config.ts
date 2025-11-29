// next.config.js atau next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan bagian ini untuk mengizinkan gambar dari hostname eksternal
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Hostname yang harus Anda daftarkan
        port: '',
        pathname: '/b3XQXXv/ameli-nimbus.jpg', // Opsional, jika Anda ingin membatasi path tertentu
        // Jika Anda ingin mengizinkan SEMUA gambar dari i.ibb.co, 
        // Anda bisa hapus 'pathname' atau ganti menjadi '/**'
      },
    ],
    // Jika Anda menggunakan Next.js versi LAMA (sebelum 13.3)
    // Anda mungkin menggunakan 'domains' daripada 'remotePatterns':
    // domains: ['i.ibb.co'], 
  },
};

module.exports = nextConfig;