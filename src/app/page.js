'use client'
import Button from '@/components/button/Button'
import Faq from '@/components/faq/Faq'
import FeaturedProducts from '@/components/featured-products/FeaturedProducts'
import Footer from '@/components/footer/Footer'
import Gallery from '@/components/gallery/Gallery'
import Hero from '@/components/hero/Hero'
import JoinUs from '@/components/join-us/JoinUs'
import Lore from '@/components/lore/Lore'
import NavBar from '@/components/navbar/NavBar'

export default function Home() {
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
