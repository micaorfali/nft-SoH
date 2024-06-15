'use client'
import Button from '@/components/Button/Button'
import Faq from '@/components/Faq/Faq'
import FeaturedProducts from '@/components/Featured Products/FeaturedProducts'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import JoinUs from '@/components/JoinUs/JoinUs'
import Lore from '@/components/Lore/Lore'
import NavBar from '@/components/NavBar/NavBar'

export default function Home() {
  const handleClick = () => {
    alert('Button Clicked!')
  }
  return (
    <main>
      <NavBar />
      <Hero />
      <Lore />
      <FeaturedProducts />
      <JoinUs />
      <Faq />
      <Footer />
    </main>
  )
}
