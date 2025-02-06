import React from 'react'
import Link from 'next/link' // Import Link properly

const Logo = ({ light = false }) => {
  // Determine the logo color based on the light prop
  const colorClass = light ? "text-white" : "text-primary"

  return (
    <Link href="/" className="font-primary text-2xl tracking-[4px]">
      <span className={colorClass}>Sazzadul Islam Talha</span> {/* Fixed className usage */}
    </Link>
  )
}

export default Logo
