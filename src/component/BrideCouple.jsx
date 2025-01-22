import { motion } from "framer-motion";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

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

  const [showAlert, setShowAlert] = useState(false);
  const accountNumber = "3251808943";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening berhasil disalin!");
  };


  return (
    <motion.section
      className="flex flex-col items-center justify-center  relative"
      variants={fadeIn} // Menerapkan animasi fade-in ke elemen
      initial="hidden" // Status awal animasi (tersembunyi)
      animate="visible" // Status akhir animasi (terlihat)
    >
      {showAlert && (
        <div className="absolute -top-40 left-0 end-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50  " style={{
          zIndex : '1000',
          width : '100vw'
          ,overflow : 'hidden',
          height : '100vh'
        }}>
          <div className="bg-white w-full max-w-sm mx-auto p-4 md:p-6 rounded-lg text-center mobile:mx-10 p-10">
            <h2 className="mobile:text-3xl font-semibold mb-4 font-sacramento text-red-500">
              Rekening BCA
            </h2>
            <p className="text-sm mb-6 font-montserrat text-black">
              an Vina Novita
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="font-montserrat text-sm w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-5"
                color="#000"
                disabled
                value={accountNumber}
              />
              <button
                onClick={copyToClipboard}
                className="p-3 rounded-lg bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white h-full "
                style={{ marginTop: "-1.2rem" }}
                title="Salin nomor rekening"
              >
                <FaCopy />
              </button>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowAlert(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg w-full sm:w-auto font-montserrat"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-40 mb-20 laptop:mt-96">
        {/* Background Pelaminan */}
        <img
          src="/img/pelaminan.png" // Ganti dengan path gambar pelaminan Anda
          alt="Pelaminan"
          className="absolute -top-20 inset-0 w-full h-full object-cover scale-150" // Gambar pelaminan diperbesar dengan scale
        />

        {/* Foto Couple */}
        <img
          src="/img/wed_ilustration_no_bg.png" // Ganti dengan path gambar pasangan Anda
          alt="Foto Pengantin"
          className="absolute -top-5 inset-0 w-full h-full object-contain scale-125 laptop:h-80 " // Foto transparan dengan proporsi asli
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
      <div className="absolute bottom-0 left-0  ">
        <div className="absolute bottom-0 -right-32 flex flex-col items-center">
          {/* Quicknote */}
          <div className="relative bg-white/70 text-rose-800 font-semibold text-xs px-8 py-1 rounded-lg shadow-md mb-2">
            <span className="font-grandhotel text-base ">
              Kirim <br /> Kado
            </span>
            {/* Lancip (Segitiga) */}
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/70 rotate-45"></div>
          </div>

          {/* Gambar Kado */}
          <img
            onClick={() => setShowAlert(true)}
            src="/img/gift.gif"
            className="w-28 h-28"
            alt="Gift"
          />
        </div>
      </div>
    </motion.section>
  );
}
