import React from 'react'
import { ArrowDown } from 'lucide-react'

const BtnScrollDown = () => {
  return (
    <div className="fixed bottom-10 right-5 z-50">
      <a
        href="#footer" 
        className="flex items-center justify-center w-12 h-12 bg-neutral-800 text-orange-500 rounded-full animate-bounce hover:bg-neutral-700 transition duration-200"
      >
        <ArrowDown />
      </a>
    </div>
  )
}

export default BtnScrollDown
