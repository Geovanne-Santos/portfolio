"use client";
import Link from 'next/link';
import './style.scss';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import React,{ useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

const Header = () => {

    const [mounted, setMounted] = useState(false);
    const [sticky, setSticky] = useState(false);
    const { theme, setTheme } = useTheme();
    const path = usePathname();
  
    const isSticky = () => {
      const header: HTMLElement | null = document.querySelector('header');
      const scrollTop = window.scrollY;
      if (header && scrollTop > 0) {
        if (!sticky) {
          setSticky(true);
        }
      } else {
          setSticky(false);
      }
    };
  
    useEffect(() => {
      setMounted(true);
      window.addEventListener('scroll', isSticky);
      return () => {
        window.removeEventListener('scroll', isSticky);
      };
    }, []);
  
    if (!mounted) {
      return null;
    }
  

  return (
    <header className={sticky ? 'sticky' : ''}>
        <div className="header">    
            <div className='logo'>
                <span className='title'>
                    Geovanne M.
                </span>
            </div>
            <nav>
                <ul className='menu'>
                    <li className={path === '/' ? 'active' : ''}><Link href={"/"} prefetch={true}>Início</Link></li>
                    <li className={path === '/sobre' ? 'active' : ''}><Link href={"/sobre"} prefetch={true}>Sobre</Link></li>
                    <li className={path === '/projetos' ? 'active' : ''}><Link href={"/projetos"} prefetch={true}>Projetos</Link></li>
                </ul>
            </nav>

            <div className="btns">
                <Link href={'/'}>
                    Artigos
                </Link>
                
                {theme === 'dark' ? (
                    <BsSunFill tabIndex={0} onClick={() => setTheme("light")} />        
                ) : (
                    <BsMoonStarsFill tabIndex={0} onClick={() => setTheme("dark")}/>
                )
            }
            </div>
        </div>
    </header>
  )
}

export default Header;