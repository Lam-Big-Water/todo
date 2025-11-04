"use client"
import React from 'react'
import { useAuth } from '@/contexts/AuthContext'

const Home = () => {
  const {loading,signInWithGoogle,user} = useAuth();
  return (
    <div>
      <button className='text-black bg-amber-300 font-medium p-2 border-2 rounded-sm' disabled={loading} onClick={signInWithGoogle}>
        {loading ? "Login ing..." : "Login"}
      </button>
    </div>
  )
}

export default Home