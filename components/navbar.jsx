// built in link from next.js that is optimized for SSR
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                Home
            </Link>{' || '}

            <Link href='/about'>
                About Me
            </Link>
        </nav>
    )
}