
export default function SocialButton({icon,iconName, link}){
  return (
    <div className=' h-10 px-6 flex justify-center items-center rounded-full text-white 
    bg-deepNaviBlue cursor-pointer'>
        
        <a href={link} className="flex justify-center items-center text-sm tracking-wide font-light hover:text-primary transition-all ease-in" 
           target="_blank">
            <p className="text-base">{icon}</p>
            <p className='ml-2'>{iconName}</p>
        </a>

    </div>
  )
}
