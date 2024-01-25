import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link href={href} className="block py-2 pl-4 pr-4 text-[#ADB7BE] sm:text-1xl rounded md:p-0 hover:text-purple-600">
            {title}
        </Link>
                
    )
}

export default NavLink;