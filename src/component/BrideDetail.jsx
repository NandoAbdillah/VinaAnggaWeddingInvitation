import { motion } from "framer-motion"; // Perhatikan bahwa ini harus 'framer-motion'

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
          <p
            className="text-4xl mobile:text-4xl tablet:text-5xl laptop:text-6xl font-sacramento font-bold text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Vina Novita Sari
          </p>

          <p
            className="mobile:text-base laptop:text-2xl font-light mt-4 font-grandhotel"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Putri Bapak H Nurhuda & Ibu Sumianah
          </p>
        </motion.div>

        {/* Vina */}
        <motion.div
          className="absolute mobile:bottom-16 mobile:right-8 laptop:bottom-20 laptop:top-52 laptop:right-64 text-right"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <p
            className="text-4xl mobile:text-4xl laptop:text-6xl font-sacramento font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Angga Prawira
          </p>
          <p
            className="mobile:text-base laptop:text-2xl font-light mt-4 font-grandhotel"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Putra Bapak Misno & Ibu Misiyah
          </p>
        </motion.div>

        {/* Connector */}
        <p
          className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold font-sacramento"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          &
        </p>
      </div>
    </motion.header>
  );
}
