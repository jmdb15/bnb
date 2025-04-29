import { beach, window, boats, cabins, houses, islands } from '@/public'

import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
      <CategoryItem title='Beach' image={beach} />
      <CategoryItem title='Overlooking' image={window} />
      <CategoryItem title='Houses' image={houses} />
      <CategoryItem title='Island' image={islands} />
      <CategoryItem title='Boats' image={boats} />
      <CategoryItem title='Cabins' image={cabins} />
    </div>
  )
}

export default Categories