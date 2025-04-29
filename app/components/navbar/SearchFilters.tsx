import React from 'react'

const SearchFilters = () => {
  return (
    <div className='h-[64px] flex flex-row items-center justify-between border border-gray-400 rounded-full'>
        <div className='hidden sm:block'>

            <div className="flex flex-row items-center justify-between">
                <div className='cursor-pointer w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className="text-xs font-semibold">Where?</p>
                    <p className="text-sm">Wanted Location</p>
                </div>

                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className="text-xs font-semibold">Check in</p>
                    <p className="text-sm">Add Dates</p>
                </div>

                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className="text-xs font-semibold">Check out</p>
                    <p className="text-sm">Add Dates</p>
                </div>

                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className="text-xs font-semibold">Who</p>
                    <p className="text-sm">Add Guests</p>
                </div>
            </div>
        </div>

        <div className="p-2">
            <div className="p-4 bg-[#ff385c] hover:bg-[#d50027] transition cursor-pointer rounded-full text-white">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 32" 
                    aria-hidden="true" 
                    role="presentation" 
                    focusable="false"
                    style={{
                        display:'block', fill:'none', height:'12px', width:'12px',
                        stroke:'currentcolor', strokeWidth:'5.33333', overflow:'visible'
                    }}
                >
                    <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                </svg>
            </div>
        </div>
        {/* <input 
            type="text" 
            id='search'
            placeholder='Search'
            className='w-full h-full px-8 rounded-full focus:border-none'
        /> */}
    </div>
  )
}

export default SearchFilters