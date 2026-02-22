import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import About from '@/components/About'
import Articles from '@/components/Articles'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
