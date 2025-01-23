import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Body from "./Body";

export default function Header() {
  const [slideUp, setSlideUp] = useState(false);
  const [animateEnd, setAnimatedEnd] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [permission, setPermission] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleSlideComplete = () => {
    setSlideUp(true); // Mulai animasi slide up
  };

  const params = new URLSearchParams(window.location.search);
  const nama = params.get("to") || "Tamu Undangan";
  const namaPenerima = nama.replaceAll("_", " ");

  useEffect(() => {
    // Simulasi waktu loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
    // Misal waktu loading 3 detik
  }, []);

  const handlePermissionResponse = (allowed) => {
    setPermission(allowed);
    setShowAlert(false); // Tutup dialog
  };

  return (
    <>
      {animateEnd ? (
        <Body permission={permission} />
      ) : (
        <>
          {!isLoaded ? (
            <div className="fixed inset-0 bg-maroon-600 flex items-center justify-center text-white">
              {" "}
              <div className="text-center">
                {" "}
                <div className="loader"></div> <p>Loading...</p>{" "}
              </div>{" "}
            </div>
          ) : (
            <motion.div
              className="min-h-screen bg-maroon-600 flex flex-col items-center justify-center p-4 relative overflow-hidden"
              initial={{ y: 0 }}
              animate={slideUp ? { y: "-100%" } : { y: 0 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => {
                if (slideUp) {
                  setAnimatedEnd(true);
                }
              }}
            >
              {/* Dialog Alert */}
              {showAlert && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                  <div className="bg-white w-full max-w-sm mx-auto p-4 md:p-6 rounded-lg text-center mobile:mx-10">
                    <h2 className="text-lg font-semibold mb-4 font-montserrat">
                      Izinkan Memutar Lagu?
                    </h2>
                    <p className="text-sm mb-6 font-montserrat">
                      Halaman ini ingin memutar lagu. Apakah Anda mengizinkan?
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded-lg w-full sm:w-auto font-montserrat"
                        onClick={() => handlePermissionResponse(true)}
                      >
                        Izinkan
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg w-full sm:w-auto font-montserrat"
                        onClick={() => handlePermissionResponse(false)}
                      >
                        Tolak
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Background Image */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <img
                  src="/img/bg1.avif"
                  alt="background flowers"
                  className="w-full h-full object-cover opacity-50"
                />
              </motion.div>

              {/* Corner Flowers */}
              <motion.img
                src="/img/top_left_flower.svg"
                alt="Top Left Flower"
                className="absolute mobile:w-40 mobile:h-40 tablet:w-60 tablet:h-60 laptop:w-72 laptop:h-72 dekstop:w-80 dekstop:h-80"
                style={{ top: "-10px", left: "-10px" }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/img/top_right_flower.svg"
                alt="Top Right Flower"
                className="absolute mobile:w-40 mobile:h-40 tablet:w-60 tablet:h-60 laptop:w-72 laptop:h-72 dekstop:w-80 dekstop:h-80"
                style={{ top: "-10px", right: "-10px" }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/img/bottom_left_flower.svg"
                alt="Bottom Left Flower"
                className="absolute mobile:w-40 mobile:h-40 tablet:w-60 tablet:h-60 laptop:w-72 laptop:h-72 dekstop:w-80 dekstop:h-80"
                style={{ bottom: "-10px", left: "-10px" }}
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/img/bottom_right_flower.svg"
                alt="Bottom Right Flower"
                className="absolute w-24 mobile:w-40 mobile:h-40 tablet:w-60 tablet:h-60 laptop:w-72 laptop:h-72 dekstop:w-80 dekstop:h-80"
                style={{ bottom: "-10px", right: "-10px" }}
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {/* Content */}
              <div className="relative z-10 text-center text-white">
                <motion.h1
                  className="text-2xl md:text-3xl mb-4 font-playfair"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  Undangan Pernikahan
                </motion.h1>

                {/* Subtitle - Split Animation */}
                <div className="flex justify-center gap-4 items-center mb-8">
                  <motion.span
                    className="text-6xl md:text-7xl font-bold font-sacramento"
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
                    Vina
                  </motion.span>
                  <motion.span
                    className="text-5xl md:text-6xl font-bold font-sacramento"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  >
                    &
                  </motion.span>
                  <motion.span
                    className="text-6xl md:text-7xl font-bold font-sacramento"
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
                    Angga
                  </motion.span>
                </div>

                <div className="flex justify-center gap-4 items-center mb-8 mt-2">
                  <motion.p
                    className="text-base font-playfair"
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
                    Kepada Yth.Bapak/Ibu/Saudara/i <br />
                    <span className="text-lg">{namaPenerima}</span>
                  </motion.p>
                </div>

                <motion.div
                  className="mt-6 w-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
                >
                  <div className="relative w-64 h-12 bg-white rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-maroon-600 flex items-center justify-center cursor-pointer"
                      drag="x"
                      dragConstraints={{ left: 0, right: 200 }}
                      dragElastic={0.2}
                      onDragEnd={(event, info) => {
                        if (info.point.x > 150) {
                          handleSlideComplete(); // Panggil fungsi saat geseran selesai
                        }
                      }}
                      initial={{ x: -200 }}
                      animate={{ x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 1.5,
                      }}
                    >
                      <span className="text-white font-semibold px-4">
                        Geser untuk membuka
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </>
  );
}
