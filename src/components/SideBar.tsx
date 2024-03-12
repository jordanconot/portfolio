import Link from "next/link";
import Image from "next/image";


export default function SideBar() {
    return (
        <div className="hidden fixed -z-10 top-0 left-0 flex-col justify-center items-center ml-5 md:flex">
            <div className="w-[1px] h-40 bg-white"></div>
            <div className="flex flex-col justify-center items-center gap-4">
                <ul className="flex flex-col gap-2">
                    <li className='hover:opacity-50'><Link href='https://github.com/jordanconot' target='_blank'><Image src='/assets/svg/icon-github.svg' alt="Github" width={32} height={32} ></Image></Link></li>
                    <li className='hover:opacity-50'><Link href='https://www.linkedin.com/in/jordanconot' target='_blank'><Image src='/assets/svg/icon-linkedin.svg' alt="Linkedin" width={30} height={30} ></Image></Link></li>
                    <li className='hover:opacity-50'><Link href='mailto:jordan.conot.dev@gmail.com?subject=Demande de renseignement depuis le portfolio 🤗' target='_blank'><Image src='/assets/svg/icon-email.svg' alt="Email" width={30} height={30} ></Image></Link></li>
                </ul>
            </div>
        </div>
    )
};