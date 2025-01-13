import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function MusicPlayer({ permission }) {
  const [showDetails, setShowDetails] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeTimeout = useRef(null);

  // Function to reset the fade timeout
  const resetFadeTimeout = () => {
    clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => setShowDetails(false), 3000);
  };

  useEffect(() => {
    if (permission && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Error playing audio:", err);
        });
    }

    // Set initial fade timeout
    resetFadeTimeout();

    return () => clearTimeout(fadeTimeout.current);
  }, [permission]);

  const handleMouseEnter = () => {
    setShowDetails(true);
    resetFadeTimeout();
  };

  const handleMouseLeave = () => {
    resetFadeTimeout();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowDetails(true); // Ensure details are shown when interacting
    resetFadeTimeout(); // Reset the fade timeout on interaction
  };

  const handleVinylClick = () => {
    setShowDetails(true); // Show details explicitly
    resetFadeTimeout(); // Reset the fade timeout
    togglePlayPause(); // Play or pause the music
  };

  const getResponsiveStyles = () => {
    if (window.innerWidth >= 1201) {
      return { vinylSize: '8rem', textSize: 'text-lg' };
    } else if (window.innerWidth >= 1025) {
      return { vinylSize: '7rem', textSize: 'text-base' };
    } else if (window.innerWidth >= 769) {
      return { vinylSize: '6rem', textSize: 'text-sm' };
    } else if (window.innerWidth >= 481) {
      return { vinylSize: '5rem', textSize: 'text-xs' };
    } else {
      return { vinylSize: '4rem', textSize: 'text-xs' };
    }
  };

  const { vinylSize, textSize } = getResponsiveStyles();

  return (
    <div
      className="fixed bottom-4 left-4 flex items-center justify-center "
      style={{ zIndex : "99" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative bg-transparent rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        style={{
          width: vinylSize,
          height: vinylSize,
        }}
        onClick={handleVinylClick} // Handle vinyl click
      >
        <img
          src="/img/vinyl.png"
          alt="Piring Hitam"
          className="absolute w-full h-full rounded-full"
        />
        <AnimatePresence>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                className="absolute text-white/50 text-2xl"
                style={{ top: "50%", left: "50%" }}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0.8, 0],
                  scale: [1, 1.5],
                  x: [0, (index - 1) * 20],
                  y: [0, -50],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: index * 0.5,
                  repeat: Infinity,
                }}
              >
                🎵
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className={`ml-4 p-2 bg-maroon-600  text-white rounded-lg shadow-lg ${textSize} flex items-center`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.8, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="ms-3 my-1">
              <p className="font-semibold">Anugerah Terindah</p>
              <p>Andmesh</p>
            </div>
            <button
              className="ml-4 p-2  text-white rounded-full hover:bg-maroon-100 transition me-2"
              onClick={togglePlayPause}
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <audio ref={audioRef} src="/song/anugerah_terindah.mp3" loop hidden />
    </div>
  );
}
