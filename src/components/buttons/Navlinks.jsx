'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const underlineAnimation = {
  active: {
    scaleX: [0, 1, 0],
  },
  inactive: {
    scaleX: 0,
  },
}

const underlineTransition = {
  duration: 1.5,
  ease: 'easeInOut',
  repeat: Infinity,
}

const Navlinks = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div className="relative inline-block">
      <Link
        href={href}
        className={`relative font-semibold ${
          isActive ? 'text-primary' : 'text-gray-500'
        }`}
      >
        {children}

        {/* Underline */}
        <div className="absolute left-0 -bottom-1 flex w-full">
          {/* Left underline */}
          <motion.span
            className="h-[2px] w-1/2 bg-current origin-right"
            animate={isActive ? 'active' : 'inactive'}
            variants={underlineAnimation}
            transition={isActive ? underlineTransition : { duration: 0 }}
          />

          {/* Right underline */}
          <motion.span
            className="h-[2px] w-1/2 bg-current origin-left"
            animate={isActive ? 'active' : 'inactive'}
            variants={underlineAnimation}
            transition={isActive ? underlineTransition : { duration: 0 }}
          />
        </div>
      </Link>
    </div>
  )
}

export default Navlinks
