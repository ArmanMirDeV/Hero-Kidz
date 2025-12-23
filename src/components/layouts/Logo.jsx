'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: 1,
          rotate: [0, 180, -180, 0],
        }}
        transition={{
          scale: { duration: 0.5, ease: 'easeOut' },
          rotate: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.8, 
          },
        }}
      >
        <Image
          alt="logo-heroKidz"
          src="/assets/logo.png"
          width={50}
          height={40}
          priority
        />
      </motion.div>

      <h2 className="text-xl font-bold">
        Hero<span className="text-primary">Kidz</span>
      </h2>
    </Link>
  )
}

export default Logo
