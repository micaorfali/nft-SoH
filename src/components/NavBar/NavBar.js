import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
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
            <span className="ml-2 w-1/2 font-Whisper">
              Seasons of Heartbreak
            </span>
          </div>

          <div className="flex items-center">
            <Link href="/contact"> Contact Us </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
