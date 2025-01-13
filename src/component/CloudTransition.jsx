import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CloudTransition() {
  const [cloudCount, setCloudCount] = useState(10); // Default jumlah awan

  // Mengatur jumlah awan berdasarkan lebar layar
  useEffect(() => {
    const calculateCloudCount = () => {
      const screenWidth = window.innerWidth;

      // Atur jumlah awan berdasarkan ukuran layar
      if (screenWidth >= 1280) {
        setCloudCount(8); // Desktop large
      } else if (screenWidth >= 768) {
        setCloudCount(5); // Tablet
      } else {
        setCloudCount(3); // Mobile
      }
    };

    // Hitung jumlah awan saat halaman dimuat dan ketika ukuran layar berubah
    calculateCloudCount();
    window.addEventListener("resize", calculateCloudCount);

    return () => {
      window.removeEventListener("resize", calculateCloudCount);
    };
  }, []);

  const clouds = [...Array(cloudCount)];

  return (
    <div className="absolute w-full h-96 overflow-hidden z-50 pointer-events-none pt-48">
      <div className="relative w-full h-full">
        {clouds.map((_, index) => (
          <motion.img
            key={index}
            className="absolute w-40 h-auto md:w-60 lg:w-80"
            style={{
              left: `${(index / cloudCount) * 95 - 3}%`, // Geser lebih ke kiri
              top: "-12rem", // Geser lebih ke atas
            }}
            src="/img/cloud.png"
            alt={`Cloud ${index}`}
            animate={{
              opacity: [0.8, 1, 0.8], // Animasi transparansi lembut
              scale: [1, 1.2, 1], // Membesar dan mengecil
            }}
            transition={{
              duration: 6, // Durasi animasi
              repeat: Infinity, // Animasi terus-menerus
              ease: "easeInOut", // Efek halus
              delay: index * 0.5, // Variasi waktu mulai tiap awan
            }}
          />
        ))}
      </div>
    </div>
  );
}
