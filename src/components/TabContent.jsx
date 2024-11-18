import React from "react";
import { motion } from 'framer-motion'

export function TabContent({ activeTab, content }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-8">
        <motion.img 
          src={content[activeTab].icon} 
          alt={content[activeTab].title} 
          className="w-24 h-24 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <h3 className="text-3xl font-bold text-blue-800 mb-4 text-center">{content[activeTab].title}</h3>
        <p className="text-gray-600 leading-relaxed">{content[activeTab].content}</p>
      </div>
    </div>
  )
}
