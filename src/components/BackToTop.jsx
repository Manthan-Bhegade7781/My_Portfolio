import { useEffect, useState } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-5
        right-5
        sm:bottom-8
        sm:right-8
        z-50
        flex
        items-center
        justify-center
        w-12
        h-12
        sm:w-14
        sm:h-14
        rounded-full
        border
        border-border
        bg-bg-card/90
        backdrop-blur-md
        text-accent
        shadow-lg
        shadow-accent/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-accent
        hover:shadow-[0_0_25px_rgba(124,108,252,0.45)]
        active:scale-95
        ${
          showButton
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}