import React from 'react'

const AnimatedImg = () => {
  return (
      <>
      <img
        src="/icons/AppliLogo.png"
           alt="A"
  className="inline-block align-baseline w-[1.5em] h-[1.5em] 
             [animation:floatUp_1.8s_ease-in_forwards] mr-0"
/>
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            50% { transform: translateY(-500px) scale(1.1); opacity: 0.9; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
        `}
      </style>
    </>
  )
}

export default AnimatedImg
