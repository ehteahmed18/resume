import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Work/>   
    </>
  )
}
