"use client";

import cn from "@/utils/cn";
import { NavLinks } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-7">
            {NavLinks.map(({ path, text }) => (
                <Link
                    href={path}
                    key={text}
                    className={cn(
                        "font-medium rounded-md cursor-pointer transition-all text-zinc-500 hover:text-zinc-600",
                        pathname === path && "text-zinc-900"
                    )}
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
