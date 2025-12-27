"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { AuditModal } from "@/components/ui/AuditModal"; // Import

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pathname = usePathname();
  const isTransparentDark = pathname === "/about" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Solutions", 
      href: "/solutions", 
      hasDropdown: true,
      children: [
        { name: "The Launchpad System", href: "/solutions/launchpad", desc: "For New Creators" },
        { name: "The Growth Engine", href: "/solutions/growth-engine", desc: "For Scaling Pros" }
      ]
    },
    { name: "Free Audit", href: "#" },
    { name: "Get Started", href: "/contact" },
  ];

  const visibleNavItems = navItems.filter((item) => item.href !== pathname);

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        <Link href="/" className="relative z-50 block w-28 md:w-36 -ml-8">
           <Image 
             src={isTransparentDark ? "/logo-header-white.svg" : "/logo-header.svg"} 
             alt="Inkio Agency" 
             width={160} height={45} 
             className="w-full h-auto object-contain" priority
           />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {visibleNavItems.map((item) => {
            const textColorClass = isTransparentDark 
                ? "text-white/90 hover:text-white" 
                : "text-grey-medium hover:text-primary";

            if (item.name === "Free Audit") {
               return (
                 <button key={item.name} onClick={() => setIsModalOpen(true)} className={`text-sm font-medium transition-colors cursor-pointer ${textColorClass}`}>
                   {item.name}
                 </button>
               )
            }

            if (item.hasDropdown) {
              return (
                <div key={item.name} className="relative group">
                  <button className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${textColorClass}`}>
                    {item.name} <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-grey-light shadow-xl rounded-xl overflow-hidden p-2">
                      {item.children?.map((child) => (
                        <Link key={child.name} href={child.href} className="block px-4 py-3 hover:bg-grey-light/50 rounded-lg transition-colors">
                          <div className="text-sm font-bold text-black">{child.name}</div>
                          <div className="text-xs text-grey-medium">{child.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={item.name} href={item.href} className={`text-sm font-medium transition-colors ${textColorClass}`}>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact#book" 
            className={`text-sm py-2.5 px-6 rounded-lg font-medium transition-all hover:shadow-lg ${
                isTransparentDark ? "bg-white text-black hover:bg-white/90" : "btn-primary shadow-primary/20 hover:shadow-primary/30"
            }`}
          >Book Clarity Call</Link>
        </div>

        <button className={`md:hidden z-50 ${isTransparentDark ? "text-white" : "text-black"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-grey-light p-6 shadow-xl flex flex-col gap-6 text-black">
          {visibleNavItems.map((item) => (
             <div key={item.name} className="border-b border-grey-light pb-4 last:border-0">
               {item.hasDropdown ? (
                 <div>
                   <div className="flex items-center justify-between w-full text-lg font-medium text-black mb-2">{item.name}</div>
                   <div className="flex flex-col gap-3 pl-4 border-l-2 border-grey-light">
                     {item.children?.map((child) => (
                        <Link key={child.name} href={child.href} onClick={() => setIsMobileMenuOpen(false)} className="block">
                          <span className="text-black font-medium block">{child.name}</span>
                          <span className="text-xs text-grey-medium block">{child.desc}</span>
                        </Link>
                      ))}
                   </div>
                 </div>
               ) : item.name === "Free Audit" ? (
                  <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="text-lg font-medium text-black block hover:text-primary transition-colors text-left w-full">
                    {item.name}
                  </button>
               ) : (
                 <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-black block hover:text-primary transition-colors">
                   {item.name}
                 </Link>
               )}
             </div>
          ))}
          <Link href="https://calendar.app.google/wumQNy9mU7a87zSU9" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-center w-full mt-2 py-3">
            Book Clarity Call
          </Link>
        </div>
      )}
    </header>

    <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}