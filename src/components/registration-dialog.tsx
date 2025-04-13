"use client"

import { useState } from "react"
import { X, Bike, Waves, Footprints} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

interface RegistrationDialogProps {
    isOpen: boolean
    onClose: () => void
    onRegister: (distance: "mini" | "sprint") => void
}

export default function RegistrationDialog({ isOpen, onClose, onRegister }: RegistrationDialogProps) {
    const [selectedDistance, setSelectedDistance] = useState<"mini" | "sprint" | null>(null)

    if (!isOpen) return null

    const handleRegister = () => {
        if (selectedDistance) {
            onRegister(selectedDistance)
            if (selectedDistance === "mini") {
                window.location.replace('https://buy.stripe.com/8wMbKUdZr45cdIk4gi')
            }else{
                window.location.replace('https://buy.stripe.com/00gbKU3kN59g5bO8wz')
            }
        }
    }

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
                        className="w-[90%] max-w-md bg-white"
                        onClick={(e) => e.stopPropagation()}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
                            <div className="w-full max-w-md bg-white" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-between border-b p-4">
                                    <h3 className="font-bold">Select Registration Distance</h3>
                                    <button onClick={onClose} className="flex h-8 w-8 items-center justify-center hover:bg-gray-100">
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <p className="mb-6 text-gray-600">Please select which distance you would like to register for:</p>

                                    <div className="mb-6 space-y-4">
                                        {/* Mini Distance Option */}
                                        <div
                                            className={`cursor-pointer border p-4 transition-colors ${
                                                selectedDistance === "mini"
                                                    ? "border-primary bg-primary/10"
                                                    : "border-gray-200 hover:border-primary/50"
                                            }`}
                                            onClick={() => setSelectedDistance("mini")}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold">Mini Distance</h3>
                                                <div className="flex items-center gap-1 text-gray-600">
                                                    <span>$10</span>
                                                </div>
                                            </div>

                                            <div className="mt-2 space-y-2 text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <Waves className="h-4 w-4 text-primary" />
                                                    <span>200m swim (4 come backs)</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Bike className="h-4 w-4 text-primary" />
                                                    <span>3km on stationary bike</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Footprints className="h-4 w-4 text-primary" />
                                                    <span>2km run (5 loops)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sprint Distance Option */}
                                        <div
                                            className={`cursor-pointer border p-4 transition-colors ${
                                                selectedDistance === "sprint"
                                                    ? "border-primary bg-primary/10"
                                                    : "border-gray-200 hover:border-primary/50"
                                            }`}
                                            onClick={() => setSelectedDistance("sprint")}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold">Sprint Distance</h3>
                                                <div className="flex items-center gap-1 text-gray-600">
                                                    <span>$12</span>
                                                </div>
                                            </div>

                                            <div className="mt-2 space-y-2 text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <Waves className="h-4 w-4 text-primary" />
                                                    <span>400m swim (8 come backs)</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Bike className="h-4 w-4 text-primary" />
                                                    <span>5km on stationary bike</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Footprints className="h-4 w-4 text-primary" />
                                                    <span>4km run (10 loops)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button
                                            className={`w-full p-3 text-center font-medium ${
                                                selectedDistance
                                                    ? "bg-primary text-white hover:bg-[#3d665e]"
                                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                            }`}
                                            onClick={handleRegister}
                                            disabled={!selectedDistance}
                                        >
                                            {selectedDistance
                                                ? `Register for ${selectedDistance === "mini" ? "Mini" : "Sprint"} Distance`
                                                : "Select a distance"}
                                        </button>

                                        <button
                                            className="w-full border border-primary p-3 text-center font-medium text-primary hover:bg-gray-50"
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
