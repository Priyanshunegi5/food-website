'use client'

import { motion } from 'framer-motion'

export default function Fade({ key, children }) {
    return (
        <motion.div
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            {children}
        </motion.div>
    )
}
