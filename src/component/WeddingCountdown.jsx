import Countdown from "react-countdown";
import { motion } from "framer-motion";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex justify-center space-x-4">
      {/* Kotak Hari */}
      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center 
                      bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 
                      shadow-xl rounded-2xl">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-rose-700 font-playfair">
          {days}
        </span>
        <p className="text-sm md:text-base lg:text-lg text-white/80 font-lobstertwo mt-2" >Hari</p>
      </div>
      {/* Kotak Jam */}
      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center 
                      bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 
                      shadow-xl rounded-2xl">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-rose-700 font-playfair">
          {hours}
        </span>
        <p className="text-sm md:text-base lg:text-lg text-white/80 font-lobstertwo mt-2">Jam</p>
      </div>
      {/* Kotak Menit */}
      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center 
                      bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 
                      shadow-xl rounded-2xl">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-rose-700 font-playfair">
          {minutes}
        </span>
        <p className="text-sm md:text-base lg:text-lg text-white/80 font-lobstertwo mt-2">Menit</p>
      </div>
      {/* Kotak Detik */}
      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center 
                      bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 
                      shadow-xl rounded-2xl">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-rose-700 font-playfair">
          {seconds}
        </span>
        <p className="text-sm md:text-base lg:text-lg text-white/80 font-lobstertwo mt-2">Detik</p>
      </div>
    </div>
  );
};

export default function WeddingCountdown({ fadeIn }) {
  const weddingDate = new Date("2025-02-15T00:00:00");

  return (
    <motion.section
      className="text-center mb-12 px-4 md:px-8 mt-20"
      variants={fadeIn}
    >
      <h2 className="text-2xl font-bold text-rose-700 mb-8 font-lobstertwo">
        Hitung Mundur Pernikahan
      </h2>
      
      <Countdown date={weddingDate} renderer={renderer} />
      {/* <p className="text-lg md:text-xl text-rose-600 mt-4">
        Sampai acara pernikahan
      </p> */}
    </motion.section>
  );
}
