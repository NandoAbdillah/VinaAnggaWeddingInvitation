import { motion } from "framer-motion";

export default function BrideCouple() {
  const fadeIn = {
    // Animasi untuk efek fade-in saat komponen muncul di layar
    hidden: { opacity: 0, y: 50 }, // Awal posisi elemen tersembunyi dan lebih rendah
    visible: {
      opacity: 1, // Elemen muncul sepenuhnya
      y: 0, // Posisi elemen kembali ke tempat semula
      transition: { duration: 0.8, ease: "easeOut" }, // Durasi dan kehalusan animasi
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center  relative"
      variants={fadeIn} // Menerapkan animasi fade-in ke elemen
      initial="hidden" // Status awal animasi (tersembunyi)
      animate="visible" // Status akhir animasi (terlihat)
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-40 mb-20 laptop:mt-96">
        {/* Background Pelaminan */}
        {/* <img
          src="/img/pelaminan.png" // Ganti dengan path gambar pelaminan Anda
          alt="Pelaminan"
          className="absolute inset-0 w-full h-full object-cover scale-150" // Gambar pelaminan diperbesar dengan scale
        /> */}

        {/* Foto Couple */}
        <img
          src="/img/wed_ilustration_no_bg.png" // Ganti dengan path gambar pasangan Anda
          alt="Foto Pengantin"
          className="absolute inset-0 w-full h-full object-contain scale-150 laptop:h-80 " // Foto transparan dengan proporsi asli
        />

        {/* Overlay Dekorasi */}
        {/* <motion.img
          src="/img/center_2_flower.svg" // Ganti dengan path dekorasi Anda
          alt="Dekorasi Bunga"
          className="absolute inset-0 w-full h-full object-contain" // Dekorasi bunga menyesuaikan proporsi
          initial={{ opacity: 0 }} // Awalnya transparan
          animate={{ opacity: 1 }} // Perlahan muncul
          transition={{ duration: 1 }} // Durasi transisi 1 detik
        /> */}
      </div>

      {/* Nama atau Deskripsi */}
      {/* <div className="mt-8 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
          Nama Pengantin
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          "Kutipan atau deskripsi singkat tentang pengantin."
        </p>
      </div> */}
    </motion.section>
  );
}
