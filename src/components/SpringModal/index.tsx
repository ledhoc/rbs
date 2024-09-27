import SuccessIcon from "@/components/SpringModal/SuccessIcon";
import { AnimatePresence, motion } from "framer-motion";

const SpringModal = ({ isOpen, setIsOpen, onCancel, onNextAction }) => {
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
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg  bg-white bg-gradient-to-br p-6 text-white shadow-xl"
          >
            <div className="relative z-10">
              <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-indigo-600">
                <SuccessIcon />
              </div>
              <h3 className="mb-2 text-center text-3xl font-bold text-green">
                Success
              </h3>
              <p className="mb-6 text-center text-gray-light">
                Thanks for being awesome! First of all, thank you for contacting
                us.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={onCancel}
                  className="w-full rounded bg-transparent py-2 font-semibold text-gray-light transition-colors hover:bg-white/10"
                >
                  Close
                </button>
                <button
                  onClick={onNextAction}
                  className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-90"
                >
                  Home
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
