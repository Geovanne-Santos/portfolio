"use client";
import Link from 'next/link';
import './style.scss';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {

    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  
  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <header>
        <div className="header">    
            <div className='logo'>
                <span className='title'>
                    Geovanne Meloni
                </span>
            </div>

            <nav>
                <ul className='menu'>
                    <li><Link href={"/"}>Início</Link></li>
                    <li><Link href={"/sobre"}>Sobre</Link></li>
                    <li><Link href={"/"}>Projetos</Link></li>
                </ul>
            </nav>

            <div className="btns">
                <Link href={'/'}>
                    ARTIGOS
                </Link>
                
                {theme === 'dark' ? (
                    <BsSunFill onClick={() => setTheme("light")} />        
                ) : (
                    <BsMoonStarsFill onClick={() => setTheme("dark")}/>
                )
            }
            </div>
        </div>
    </header>
  )
}

export default Header;