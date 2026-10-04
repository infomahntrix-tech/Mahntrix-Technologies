import Link from "next/link";
import Image from "next/image";

export default function BrandLogo({ className = "", isFooter = false }) {
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center text-paper hover:opacity-95 transition-opacity group ${className}`}
      aria-label="Mahntrix Technologies home"
    >
      <div className={`relative flex items-center ${isFooter ? "h-14 sm:h-16 md:h-20" : "h-10 sm:h-12 md:h-14"}`}>
        <Image
          src="/images/mahntrix-logo-dark.png"
          alt="Mahntrix Technologies"
          width={450}
          height={150}
          priority
          className={`${
            isFooter ? "h-14 sm:h-16 md:h-20" : "h-10 sm:h-12 md:h-14"
          } w-auto object-contain drop-shadow-[0_0_18px_rgba(0,180,255,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_28px_rgba(0,180,255,0.65)]`}
        />
      </div>
    </Link>
  );
}



