import React from 'react'

interface CustomButtonInterface {
  label: string;
  onClick: () => void;
  className?: string
}

const CustomButton: React.FC<CustomButtonInterface> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 text-white rounded-xl transition cursor-pointer bg-[#ff385c] hover:bg-[#d50027] text-center ${className}`}
    >
        {label}
    </button>
  )
}

export default CustomButton