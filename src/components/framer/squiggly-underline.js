import { motion } from 'framer-motion'

export default function SquigglyUnderline() {
    return (
        <motion.div className="h-1">
            <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                <motion.path
                    stroke="#fcbf34"
                    strokeWidth="2"
                    transition={{
                        duration: 1,
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                        strokeDashoffset: 0,
                    }}
                    initial={{
                        strokeDasharray: 84.20591735839844,
                        strokeDashoffset: 84.20591735839844,
                    }}
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                />
            </svg>
        </motion.div>
    )
}
