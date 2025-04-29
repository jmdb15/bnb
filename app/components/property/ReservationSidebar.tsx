
const ReservationSidebar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">$200 per night</h2>

      <div className="mb-6 p-3 border border-gray-300 rounded-xl">
        <label htmlFor="" className="mb-2 block font-semibold text-xs">Guests</label>
        <select 
          name=""
          id=""
          className="w-full -ml-1"
        >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>

      <div className="cursor-pointer w-full mb-6 py-6 text-center text-white bg-[#ff385c] hover:bg-[#d50027] rounded-xl">Book</div>

      <div className="mb-4 flex justify-between align-center">
        <p>$200 * 4 nights</p>

        <p>$800</p>
      </div>

      <div className="pb-4 mb-4 flex justify-between align-center border-b border-gray-200">
        <p>Djangobnb fee</p>

        <p>$40</p>
      </div>

      <div className="mt-4 flex justify-between align-center">
        <p><strong>Total</strong></p>

        <p>$840</p>
      </div>
    </aside>
  )
}

export default ReservationSidebar