import { AnimatePresence, motion } from "framer-motion";

const LoadingModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative  max-w-lg cursor-default overflow-hidden rounded-lg  bg-gradient-to-br text-white shadow-xl"
          >
            <div className="relative z-10">
              <div className="flex aspect-square w-24 flex-col items-center justify-center bg-white">
                <div className="flex justify-center">
                  <svg
                    className="animate-spin border-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g id="Group 1000003698">
                      <circle
                        id="Ellipse 713"
                        cx="19.9997"
                        cy="19.9277"
                        r="15"
                        stroke="#E5E7EB"
                        stroke-width="2"
                      />
                      <path
                        id="Ellipse 714"
                        d="M26.3311 33.528C29.9376 31.8488 32.7294 28.8058 34.0923 25.0683C35.4552 21.3308 35.2775 17.2049 33.5984 13.5984C31.9193 9.99189 28.8762 7.20011 25.1387 5.83723C21.4012 4.47434 17.2754 4.652 13.6689 6.33112"
                        stroke="url(#paint0_linear_13416_7408)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_13416_7408"
                        x1="0.0704424"
                        y1="12.6622"
                        x2="12.7327"
                        y2="39.8591"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4F46E5" />
                        <stop offset="1" stop-color="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm font-normal leading-snug text-black">
                  Loading...
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingModal;
