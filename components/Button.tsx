import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string | 'text-black' ;
}

const Button = ({type,title, icon, variant}: ButtonProps) => {
  return (
    <button type={type} className={`flex  items-center rounded-full justify-center cursor-pointer  px-10 py-4 ${variant}`} >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className={`bold-16 whitespace-nowrap cursor-pointer`}>{title}</label>
    </button>
  )
}

export default Button