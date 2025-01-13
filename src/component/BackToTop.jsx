import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa"; // Ikon sesuai gambar referensi

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 1000 }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 bg-rose-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-rose-700 transition duration-300"
          style={{ position: "fixed", zIndex: 1000 }}
        >
          <FaChevronUp className="w-5 h-5 mx-0 my-2" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
