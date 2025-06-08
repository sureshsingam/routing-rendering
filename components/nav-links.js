'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ navlinkhref, children }) {
    const path = usePathname();
    console.log("Current path:", path);
    console.log("Current navlinkhref:", navlinkhref);

    return (
        <Link href={navlinkhref}
            className={path.startsWith(navlinkhref) ? 'active' : undefined}>
            {children}
        </Link>
    );
}