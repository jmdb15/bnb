import Link from "next/link"

type ConversationInterface = {
  id: Number;
}

const Conversation = ({ id }: ConversationInterface) => {
  return (
    <div className='px-6 py-4 border border-gray-300 rounded-xl'>
      <p className="mb-6 text-xl">John Doe</p>

      <Link
        href={`inbox/${id}/`} 
        className='text-[#d50027] cursor-pointer hover:contrast-125'
      >
        Go to conversation
      </Link>
    </div>
  )
}

export default Conversation