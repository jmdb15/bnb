'use client';

type MenuLinkInterface = {
  label: string;
  onClick: () => void
}

const MenuLink = ({ label, onClick }: MenuLinkInterface) => {
  return (
    <div
      onClick={onClick}
      className="px-5 py-2 transition cursor-pointer hover:bg-gray-100">
      {label}
    </div>
  )
}

export default MenuLink