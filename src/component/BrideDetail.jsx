import { motion } from "framer-motion"; // Perhatikan bahwa ini harus 'framer-motion'
import { FaInstagram } from "react-icons/fa";
FaInstagram

export default function BrideDetail() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 }, // Muncul dari kiri
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 }, // Muncul dari kanan
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <motion.header className="text-center laptop:mb-40">
      <div className="mt-60 flex flex-col items-center relative w-full h-96 md:h-80 lg:h-72">
        {/* Angga */}
        <motion.div
          className="absolute mobile:top-16 mobile:left-8 laptop:top-16 laptop:left-72 text-left"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-4xl mobile:text-4xl tablet:text-5xl laptop:text-6xl font-sacramento font-bold text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}

          >
            Vina Novita Sari
          </motion.p>
          
          
          <motion.a
            href="https://www.instagram.com/itsmevinanov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 flex items-center gap-2 font-lobstertwo ms-5 font-bold cursor-pointer"
            style={{
              textShadow: "2px 2px 4px rgba(255, 255, 255, 0.2)"
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
             <FaInstagram /> <span>
              itsmevinanov </span>
          </motion.a>


          <p
            className="mobile:text-base laptop:text-2xl font-light mt-4 font-grandhotel"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            
          >
            Putri Bapak H Nurhuda & Ibu Sumianah
          </p>
        </motion.div>

        {/* Vina */}
        <motion.div
          className="absolute mobile:bottom-12 mobile:right-8 laptop:bottom-20 laptop:top-52 laptop:right-64 text-right "
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-4xl mobile:text-4xl laptop:text-6xl font-sacramento font-bold mb-2"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            initial={{ opacity: 0, x:   100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Angga Prawira
          </motion.p>

          <motion.a
            href="https://www.instagram.com/anggawirrr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 flex items-center gap-2 font-lobstertwo ms-5 font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            
          >
             <FaInstagram /> <span>
             anggawirrr </span>
          </motion.a>
          <p
            className="mobile:text-base laptop:text-2xl font-light mt-4 font-grandhotel"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Putra Bapak Misno & Ibu Misiyah
          </p>
        </motion.div>

        {/* Connector */}
        <motion.p
          className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold font-sacramento"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          &
        </motion.p>
      </div>
    </motion.header>
  );
}
