import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Eye } from 'lucide-react'

const content = {
  mission: {
    title: "Misión",
    icon: Compass
  },
  vision: {
    title: "Visión",
    icon: Eye
  }
}

export function TabSelector({ activeTab, setActiveTab, setIsHovering }) {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(content).map(([key, { title, icon: Icon }]) => (
        <motion.button
          key={key}
          onClick={() => setActiveTab(key)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`p-6 rounded-xl text-left w-1/2 transition-all ${activeTab === key ? 'bg-white text-blue-900' : 'bg-blue-800 bg-opacity-90 text-white'}`}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="flex items-center gap-4"
            initial={false}
            animate={{ x: activeTab === key ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon size={32} />
            <span className="text-2xl font-semibold">{title}</span>
          </motion.div>
        </motion.button>
      ))}
    </div>
  )
}
