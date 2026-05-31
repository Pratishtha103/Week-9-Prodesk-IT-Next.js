import Link from "next/link";
export default function NavBar(){
    return(
        <nav className="flex gap-6 p-4 bg-zinc-900 text-white">
            <Link className='font-semibold' href = "/">Cine Stream</Link>
            <Link className=" hover:underline" href="/">Home</Link>
            <Link className=" hover:underline" href="/favorites">Favorites</Link>
        </nav>
    );
}