import { useEffect, useState } from 'react'
import './Hero.css'
import screenImg from '../Images/screen.png'

function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scale = 1 + scrollY * 0.001

  return (
    <section className="hero">
      <img 
        src={screenImg} 
        alt="Screen" 
        className="hero-img" 
        style={{ transform: `scale(${scale})` }}
      />
    </section>
  )
}

export default Hero