// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
      setIsBouncing(true);
    } else {
      setShowScrollButton(false);
      setIsBouncing(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <hr className="border-black"/>
    <footer className="bg-zinc-100  py-4 relative">
      
      <div className="text-center text-black">
        <p>&copy; Ari Rahmadaya. All rights reserved.</p>
      </div>

      {/* Tombol Arrow Up */}
      {showScrollButton && (
        <div
          className={`fixed bottom-10 right-10 bg-[#17CF97] border border-spacing-2 border-blue-500 shadow-sm text-white sm:p-2 p-3 rounded-full cursor-pointer hover:bg-emerald-600 transition-all ${isBouncing ? 'bounce' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronDoubleUpIcon className="h-5 w-5" aria-hidden="true" />
        </div>
      )}

      <style >{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </footer>
    </>
  );
}
