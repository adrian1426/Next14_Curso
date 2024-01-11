'use client';

import { useState } from 'react';

export const ShoppingCart = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounter((current) => current + 1)}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounter((current) => current - 1)}
        >
          -1
        </button>
      </div>
    </>
  )
}