import { motion } from "framer-motion";

export default function EventMap() {
  return (
    <div className="flex justify-center items-center p-5 mobile:mx-1  ">
      <motion.div
        className="w-96 max-w-4xl rounded-lg shadow-lg border border-rose-400 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Google Maps Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.6831038416033!2d112.7251991990964!3d-7.400620353324562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e50054fc865b%3A0xd68b5cf5bd3f7f7c!2sMasjid%20Baitul%20Makmur!5e1!3m2!1sid!2sid!4v1735352729237!5m2!1sid!2sid"
            className="w-full h-[250px] border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay Text */}
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-rose-600 to-transparent text-white p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-lg font-bold font-lobstertwo">Lokasi Akad Nikah & Resepsi</h3>
            <p className="text-sm font-playfair">Jl. Mangga I No.45, Dusun Sruni, Sruni, Kec. Gedangan, Kabupaten Sidoarjo, Jawa Timur 61254</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
