import Navbar from '@/components/ui/navbar'
import React from 'react'
import UserProfileCard from '@/components/UserProfileCard'
import { loggedInData } from '@/utils/DataServices'

const page = () => {
  const userData = loggedInData()
  return (
    <div>
      <Navbar/>
      <UserProfileCard {...userData}/>
    </div>
  )
}

export default page