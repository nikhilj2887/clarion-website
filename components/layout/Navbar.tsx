'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training' },
  { label: 'For Employers', href: '/clients' },
  { label: 'For Job Seekers', href: '/job-seekers' },
  { label: 'Placements', href: '/placements' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHome = pathname === '/';
  const isTransparent = !isScrolled && isHome;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: isTransparent ? 'transparent' : '#050506',
        boxShadow: isTransparent ? 'none' : '0 2px 20px rgba(0,0,0,0.5)',
        transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/clarion.png"
              alt="Clarion Talentforge"
              width={180}
              height={60}
              className="h-9 md:h-11 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs xl:text-sm font-medium transition-colors duration-200 pb-1 group whitespace-nowrap"
                  style={{ color: isActive ? '#ED7E1A' : '#e2e8f0' }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      backgroundColor: '#ED7E1A',
                    }}
                  />
                </Link>
              );
            })}
          </nav>


          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? '24rem' : '0',
          opacity: mobileOpen ? 1 : 0,
          backgroundColor: '#050506',
        }}
      >
        <nav className="container-custom py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor: isActive ? 'rgba(4,141,209,0.15)' : 'transparent',
                  color: isActive ? '#048DD1' : '#cbd5e1',
                }}
              >
                {link.label}
                {isActive && <ChevronRight size={15} style={{ color: '#048DD1' }} />}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
