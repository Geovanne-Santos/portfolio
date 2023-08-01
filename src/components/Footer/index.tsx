import Link from 'next/link';
import React from 'react';
import { BsEnvelopeFill, BsGithub, BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import './style.scss';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <ul>
                <li>
                    <Link href="https://github.com/Geovanne-Santos" target='_blank' >
                        <BsGithub />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/geovanne-meloni-b2a575253/" target='_blank' >
                        <BsLinkedin />
                    </Link>
                </li>
                <li>
                    <Link href="mailto:geovamelo4431@gmail.com" target='_blank' >
                        <BsEnvelopeFill />
                    </Link>
                </li>
                <li>
                    <Link href="https://web.whatsapp.com/send?phone=5511981443833" target='_blank' >
                        <BsTelephoneFill />
                    </Link>
                </li>
            </ul>
            <p>Desenvolvido com 💜 por Geovanne Meloni dos Santos</p>
        </div>
    </footer>
  )
}

export default Footer;