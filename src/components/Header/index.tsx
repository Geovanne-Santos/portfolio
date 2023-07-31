"use client";
import Link from 'next/link';
import './style.scss';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import React,{ useEffect, useState } from 'react';

const Header = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  
  useEffect(() => {
    setMounted(true)
  }, [])


  if(!mounted) {
    return null
  }

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
                    <li><Link href={"https://www.facebook.com/"}>Projetos</Link></li>
                </ul>
            </nav>

            <div className="btns">
                <Link href={'/'}>
                    Artigos
                </Link>
                
                {theme === 'dark' ? (
                    <BsSunFill focusable={'true'} onClick={() => setTheme("light")} />        
                ) : (
                    <BsMoonStarsFill focusable={'true'} onClick={() => setTheme("dark")}/>
                )
            }
            </div>
        </div>
    </header>
  )
}

export default Header;