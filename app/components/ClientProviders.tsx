"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .35, ease: [0.22,1,0.36,1] }}
      >
        {/* faint slate wash on page exit */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: .08 }}
          transition={{ duration: .35 }}
          className="fixed inset-0 pointer-events-none bg-black"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
