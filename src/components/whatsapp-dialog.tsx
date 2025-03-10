"use client"

import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface WhatsAppDialogProps {
  isOpen: boolean
  onClose: () => void
  groupDescription: string
  inviteLink: string
}

const fadeIn = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export default function WhatsAppDialog({
                                         isOpen,
                                         onClose,
                                         groupDescription,
                                         inviteLink,
                                       }: WhatsAppDialogProps) {
  return (
      <AnimatePresence mode="wait">
        {isOpen && (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
              <motion.div
                  className="w-full max-w-md bg-white"
                  onClick={(e) => e.stopPropagation()}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
              >
                <div className="flex items-center justify-between border-b p-4">
                  <h2 className="text-xl font-bold">Join Our WhatsApp Group</h2>
                  <button onClick={onClose} className="flex h-8 w-8 items-center justify-center hover:bg-gray-100">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>

                <div className="p-6">
                  <p className="mb-6 text-gray-600">{groupDescription}</p>
                  <div className="flex flex-col gap-3">
                    <button
                        className="w-full bg-[#4d8076] p-3 text-center font-medium text-white hover:bg-[#3d665e]"
                        onClick={() => window.open(inviteLink, "_blank")}
                    >
                      Join via Link
                    </button>
                    <button
                        className="w-full border border-[#4d8076] p-3 text-center font-medium text-[#4d8076] hover:bg-gray-50"
                        onClick={onClose}
                    >
                      No thanks
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
  )
}
