import { motion } from "motion/react";

export default function QuranSection() {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

    return (
        <motion.section className="mt-5 text-center mb-12 w-auto" variants={fadeIn}>
        <p className="text-lg md:text-2xl mb-4 font-semibold font-playfair">Ar-Rum Ayat 21</p>
        <p className="mobile:text-xs tablet:text-sm laptop:text-base dekstop:text-lg  mb-4 font-playfair mobile:mx-10 tablet:mx-28 laptop:mx-32 dekstop:mx-52">
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
          terdapat tanda-tanda bagi kaum yang berpikir.”
        </p>
      </motion.section>
    );
}