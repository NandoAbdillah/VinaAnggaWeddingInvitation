import { motion } from "framer-motion";
// import { EventMap } from "./EventMap";

export default function WeddingDetail() {
  return (
    <motion.section
      className="px-4 py-8 md:px-10 lg:px-16 text-center "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p
        className="text-sm md:text-base lg:text-lg text-white mb-6 font-lobstertwo"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Assalamu'alaikum Warahmatullahi Wabarakatuh
        <br />
        Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan.
        <br />
        Dengan ini kami mengundang Bapak/Ibu/Saudara/I pada acara pernikahan
        kami.
      </p>

      {/* Grid Kartu Akad Nikah dan Resepsi */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Kartu Akad Nikah */}
        <motion.div
          className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 
                      shadow-xl rounded-2xl p-4 w-[250px] md:w-[200px] text-rose-800"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base md:text-xl font-semibold mb-2 text-center font-grandhotel">
            Akad Nikah
          </h2>
          <p className="text-xs md:text-sm text-center font-playfair">
            Sabtu, 15 Februari 2024
          </p>
          <p className="text-xs md:text-sm text-center font-playfair">
            08:00 – 10:00 WIB
          </p>
        </motion.div>

        {/* Kartu Resepsi */}
        <motion.div
          className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 
                      shadow-xl rounded-2xl p-4 w-[250px] md:w-[200px] text-rose-800"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base md:text-xl font-semibold mb-2 text-center font-grandhotel">
            Resepsi
          </h2>
          <p className="text-xs md:text-sm text-center font-playfair">
            Sabtu, 15 Februari 2024
          </p>
          <p className="text-xs md:text-sm text-center font-playfair">
            15:00 – 21:00 WIB
          </p>
        </motion.div>
      </div>

      {/* Ucapan Penutup */}
      <p
        className="text-sm md:text-base lg:text-lg text-white mt-8 font-lobstertwo "
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/I
        <br />
        berkenan hadir untuk memberikan do’a restu kepada kedua mempelai.
        <br />
        Atas kehadiran dan do’a kami ucapkan terima kasih.
        <br />
        Wassalamu'alaikum Warahmatullahi Wabarakatuh.
      </p>

      {/* Lokasi */}

      
    </motion.section>
  );
}