import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Seasons of Heartbreak"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="/"
              className="ml-2 w-1/2 font-Whisper leading-4 text-lg"
            >
              <span>Seasons of Heartbreak</span>
            </Link>
          </div>
          {pathname !== '/contact' && (
            <div className="flex items-center mr-5 md:m-2">
              <Link href="/contact"> Contact Us </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
