import { motion } from "framer-motion";

const FallingFlowers = () => {
  const flowers = Array.from({ length: 20 }); // Jumlah bunga yang akan jatuh

  const imagePath = [
    '/img/sakurafall.png',
    '/img/sakurafall2.png'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((_, index) => {
        const randomX = Math.random() * 100; // Posisi horizontal
        const duration = Math.random() * 3 + 5; // Durasi jatuh
        const delay = Math.random() * 2; // Delay awal
        const flowerPath = imagePath[Math.floor(Math.random() * imagePath.length)];

        return (
          <motion.div
            key={index}
            className="absolute top-0"
            style={{
              left: `${randomX}%`,
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "110vh", opacity: 1 }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img
              src={flowerPath} // Path gambar bunga
              alt="flower"
              className="w-10 h-10 " // Ukuran bunga
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FallingFlowers;
