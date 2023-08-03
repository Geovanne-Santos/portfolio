"use client";
import Link from 'next/link';
import './style.scss';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import React,{ useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

const Header = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const path = usePathname();


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
                    Geovanne M.
                </span>
            </div>
            <nav>
                <ul className='menu'>
                    <li className={path === '/' ? 'active' : ''}><Link href={"/"}>Início</Link></li>
                    <li className={path === '/sobre' ? 'active' : ''}><Link href={"/sobre"}>Sobre</Link></li>
                    <li className={path === '/projetos' ? 'active' : ''}><Link href={"/projetos"}>Projetos</Link></li>
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