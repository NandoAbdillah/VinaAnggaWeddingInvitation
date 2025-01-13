import { motion } from "framer-motion"; // Pastikan Anda menggunakan framer-motion
import { FaHeart, FaRing } from "react-icons/fa";

export default function CoupleStory() {
  return (
    <div className="p-6 px-4 rounded-lg shadow-lg max-w-4xl mx-auto sm:p-8 mt-28">
      <h2 className="mobile:text-4xl laptop:text-5xl font-bold text-center text-pink-600 mb-20  font-sacramento ">
        Our Love Story
      </h2>
      <div className="space-y-12">
        {/* Section 2019 */}
        <motion.div
          className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <img
              src="/img/ponpes.jpeg"
              alt="2019 Memory"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full shadow-md hover:scale-105 transform transition-all duration-500"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl font-lobstertwo">2019</h3>
            <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base font-lobstertwo">
              Kami pertama kali bertemu di Pondok Ubaidah, Kertosono pada saat Tes 2. Saat itu, 
              kami dikenalkan melalui kerabat dan mulai saling mengenal, 
              memahami satu sama lain, serta mendapatkan restu dari orang tua.
            </p>
          </div>
        </motion.div>

        {/* Section 2024 */}
        <motion.div
          className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <img
              src="/img/2024.jpg"
              alt="2024 Proposal"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full shadow-md hover:scale-105 transform transition-all duration-500"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl font-lobstertwo">2024</h3>
            <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base font-lobstertwo">
              Pada bulan Maret, dia datang dari Medan ke Sidoarjo untuk meminta izin 
              dan restu kepada orang tua untuk meminangku. Dengan penuh rasa syukur, 
              orang tua memberi restu dan ridho untuk kita melangkah ke jenjang 
              yang lebih serius.
            </p>
          </div>
        </motion.div>

        {/* Section 2025 */}
        <motion.div
          className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <img
              src="/img/vina-angga.png"
              alt="2025 Wedding"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full shadow-md hover:scale-105 transform transition-all duration-500"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl font-lobstertwo">2025</h3>
            <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base font-lobstertwo">
              Di bulan Februari, kami memutuskan untuk menikah. Dengan penuh harapan 
              dan cinta, kami siap memulai kehidupan baru bersama yang Sakinnah Mawaddah Warahmah.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Icon Footer */}
      <div className="mt-8 text-center text-pink-600">
        <motion.div
          className="inline-block mx-4"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
        >
          <FaHeart className="text-4xl" />
        </motion.div>
        <motion.div
          className="inline-block mx-4"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
        >
          <FaRing className="text-4xl" />
        </motion.div>
      </div>
    </div>
  );
}