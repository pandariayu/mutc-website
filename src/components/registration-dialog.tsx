"use client"

import {useEffect, useState} from "react"
import {X, Bike, Waves, Footprints, AlertCircle, XCircle} from "lucide-react"
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
    miniSpots?: number
    sprintSpots?: number
    onStatusChange?: (isMiniSoldOut: boolean, isSprintSoldOut: boolean) => void;
}

export default function RegistrationDialog({
                                               isOpen,
                                               onClose,
                                               onRegister,
                                               miniSpots: initialMiniSpots = 20,
                                               sprintSpots: initialSprintSpots = 45,
                                               onStatusChange,
                                           }: RegistrationDialogProps) {
    const [miniSpots, setMiniSpots] = useState(initialMiniSpots);
    const [sprintSpots, setSprintSpots] = useState(initialSprintSpots);
    const [selectedDistance, setSelectedDistance] = useState<"mini" | "sprint" | null>(null)

    const isMiniSoldOut = miniSpots <= 0
    const isSprintSoldOut = sprintSpots <= 0
    const isLimitedMini = miniSpots > 0 && miniSpots <= 8
    const isLimitedSprint = sprintSpots > 0 && sprintSpots <= 15

    if ((selectedDistance === "mini" && isMiniSoldOut) || (selectedDistance === "sprint" && isSprintSoldOut)) {
        setSelectedDistance(null)
    }

    useEffect(() => {
        if (onStatusChange) {
            onStatusChange(isMiniSoldOut, isSprintSoldOut);
        }
    }, [miniSpots, sprintSpots, isMiniSoldOut, isSprintSoldOut, onStatusChange]);

    useEffect(() => {
        const fetchStock = async () => {
            try {
                const res = await fetch("/api/get-stock");
                if (!res.ok) {
                    throw new Error("Failed to fetch stock");
                }
                const data = await res.json();
                setMiniSpots(data.miniSpots);
                setSprintSpots(data.sprintSpots);
            } catch (error) {
                console.error("Error fetching stock:", error);
            }
        };
        fetchStock()
    }, [isOpen]);

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
                                            className={`border p-4 transition-colors ${
                                                isMiniSoldOut
                                                    ? "border-gray-200 bg-gray-100 opacity-75 cursor-not-allowed"
                                                    : selectedDistance === "mini"
                                                        ? "border-[#518581] bg-[#518581]/10 cursor-pointer"
                                                        : "border-gray-200 hover:border-[#518581]/50 cursor-pointer"
                                            }`}
                                            onClick={() => !isMiniSoldOut && setSelectedDistance("mini")}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold">Mini Distance</h3>
                                                <div className="flex items-center gap-1 text-gray-600">
                                                    <span>$10</span>
                                                </div>
                                            </div>

                                            {isMiniSoldOut ? (
                                                <div className="mt-1 flex items-center gap-1 text-red-600 text-sm font-medium">
                                                    <XCircle className="h-4 w-4" />
                                                    <span>Sold Out</span>
                                                </div>
                                            ) : (
                                                isLimitedMini && (
                                                    <div className="mt-1 flex items-center gap-1 text-amber-600 text-sm">
                                                        <AlertCircle className="h-4 w-4" />
                                                        <span>Limited space available ({miniSpots} spots left)</span>
                                                    </div>
                                                )
                                            )}

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
                                            className={`border p-4 transition-colors ${
                                                isSprintSoldOut
                                                    ? "border-gray-200 bg-gray-100 opacity-75 cursor-not-allowed"
                                                    : selectedDistance === "sprint"
                                                        ? "border-primary bg-[#518581]/10 cursor-pointer"
                                                        : "border-gray-200 hover:border-[#518581]/50 cursor-pointer"
                                            }`}
                                            onClick={() => !isSprintSoldOut && setSelectedDistance("sprint")}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold">Sprint Distance</h3>
                                                <div className="flex items-center gap-1 text-gray-600">
                                                    <span>$12</span>
                                                </div>
                                            </div>

                                            {isSprintSoldOut ? (
                                                <div className="mt-1 flex items-center gap-1 text-red-600 text-sm font-medium">
                                                    <XCircle className="h-4 w-4" />
                                                    <span>Sold Out</span>
                                                </div>
                                            ) : (
                                                isLimitedSprint && (
                                                    <div className="mt-1 flex items-center gap-1 text-amber-600 text-sm">
                                                        <AlertCircle className="h-4 w-4" />
                                                        <span>Limited space available ({sprintSpots} spots left)</span>
                                                    </div>
                                                )
                                            )}

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
                                            disabled={!selectedDistance || (selectedDistance === "mini" && miniSpots < 1) || (selectedDistance === "sprint" && sprintSpots < 1)}
                                        >
                                            {selectedDistance
                                                ? `Register for ${selectedDistance === "mini" ? "Mini" : "Sprint"} Distance`
                                                : isMiniSoldOut && isSprintSoldOut
                                                    ? "All distances sold out"
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
