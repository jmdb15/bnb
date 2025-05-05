import React from 'react'
import Conversation from '../components/inbox/Conversation'

const page = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
      <h1 className='my-6 text-2xl'>Inbox</h1>
      
      <Conversation id={1}/>
      <Conversation id={2}/>
      <Conversation id={3}/>
    </main>
  )
}

export default page