import Link from 'next/link';
import { Search, User, Menu } from 'lucide-react'; 

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Halaman', href: '/error' }, // testing
  { name: 'Blog', href: '/error' },
  { name: 'Portofolio', href: '/error' },
  { name: 'Toko', href: '/error' },
  { name: 'Kontak', href: 'https://wa.me/6282228059933' }, // ✔ langsung ke WA
];

export default function Navbar() {
  // Dalam implementasi nyata, Anda akan menggunakan state (useState) untuk mengontrol menu mobile

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-lg shadow-sm">

      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-black">
          {/* Ganti dengan Image logo kustom jika ada */}
          <div className="w-6 h-6 border-2 border-yellow-400 rounded-full"></div> 
          <span>FADI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-700 hover:text-yellow-400 transition duration-150"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons & Contact Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block p-2 rounded-full hover:bg-gray-100 transition">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          <button className="hidden md:block p-2 rounded-full hover:bg-gray-100 transition">
            <User className="w-5 h-5 text-gray-700" />
          </button>
          
          <Link 
  href="https://www.instagram.com/faadiial/" 
  target="_blank"
  className="hidden lg:block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-black hover:text-white transition duration-300 shadow-md"
>
  Hubungi Saya
</Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Perlu logika state tambahan) */}
      {/* <div className="lg:hidden absolute top-0 left-0 w-full bg-white transition-transform duration-300">
        ... konten menu mobile ...
      </div> 
      */}
    </header>
  );
}
