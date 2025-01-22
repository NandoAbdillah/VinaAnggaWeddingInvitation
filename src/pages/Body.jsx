import { motion } from "framer-motion";
import MusicPlayer from "../component/MusicPlayer";
import BrideCouple from "../component/BrideCouple";
import BrideDetail from "../component/BrideDetail";
import WeddingCountdown from "../component/WeddingCountdown";
import WeddingDetail from "../component/WeddingDetail";
import BackToTop from "../component/BackToTop";
import CoupleStory from "../component/CoupleStory";
import CommentForm from "../component/CommentForm";
import CommentList from "../component/CommentList";
import QuranSection from "../component/QuranSection";
import CloudTransition from "../component/CloudTransition";
import EventMap from "../component/EventMap";
import FallingFlowers from "../component/FallingFlower";

export default function Body({ permission }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="text-white relative overflow-x-hidden">

      {permission && <MusicPlayer permission={permission} />}
      <FallingFlowers/>

      {/* Background Section 1 */}
      <motion.div
        className="min-h-screen bg-cover bg-center py-12  background-crop-top z-30"
        style={{ backgroundImage: "url('/img/bg3.png')" }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Bride Detail */}
        <BrideDetail fadeIn={fadeIn} />

        {/* Wedding Detail */}
        <WeddingDetail />

        <EventMap />

        {/* Wedding Countdown */}
        <WeddingCountdown />

        <QuranSection />

        {/* Foto Pengantin Section */}
        <BrideCouple />

        <CloudTransition />
      </motion.div>

      {/* Gambar Awan untuk Transisi */}

      {/* Background Section 2 */}
      <motion.div
        className="min-h-screen bg-cover bg-center py-12  relative z-20"
        style={{ backgroundImage: "url('/img/bg5.png')" }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <CoupleStory />

        

        <div className="">
          <CloudTransition />
        </div>
      </motion.div>

      <motion.div
        className="min-h-screen bg-cover bg-center py-12 px-4 relative z-10 "
        style={{ backgroundImage: "url('/img/bg7.png')" }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div>
          <h1
            className="text-center text-5xl font-bold mb-8 font-sacramento mt-40"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Wedding Wishes
          </h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <CommentForm />
            <CommentList />
          </div>
        </div>
      </motion.div>

      {/* CoupleStory with Transparent Background */}
      <BackToTop />
    </div>
  );
}
