import Image, { StaticImageData } from "next/image"

interface CategoryItemInterface{
  title: string;
  image: StaticImageData
}

const CategoryItem = ({title, image}: CategoryItemInterface) => {
  return (
    <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <Image
          alt={title.toLowerCase()}
          src={image}
          width={30}
          height={30}
        />

        <span className='text-xs'>{title}</span>
      </div>
  )
}

export default CategoryItem