"use client";
import { loggedInData } from '@/utils/DataServices'
import React from 'react'

const page = () => {
  console.log(loggedInData())
  return (
    <div>Explore</div>
  )
}

export default page