'use client'
import Faq from '@/components/faq/Faq'
import FeaturedProducts from '@/components/featured-products/FeaturedProducts'
import Footer from '@/components/footer/Footer'
import Gallery from '@/components/gallery/Gallery'
import Hero from '@/components/hero/Hero'
import JoinUs from '@/components/join-us/JoinUs'
import Lore from '@/components/lore/Lore'
import NavBar from '@/components/navBar/NavBar'
import AOS from 'aos'

export default function Home() {
  AOS.init()
  return (
    <main>
      <NavBar />
      <Hero />
      <Lore />
      <Gallery />
      <FeaturedProducts />
      <JoinUs />
      <Faq />
      <Footer />
    </main>
  )
}
