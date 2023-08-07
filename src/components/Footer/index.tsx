import Link from 'next/link';
import { BsEnvelopeFill, BsGithub, BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import './style.scss';

const Footer = () => (
    <footer>
        <div className="footer">
            <ul>
                <li>
                    <Link 
                        href="https://github.com/Geovanne-Santos" 
                        target='_blank'
                        aria-label='Veja meu repositório no Github'
                        prefetch={true}
                    >
                        <BsGithub />
                    </Link>
                </li>
                <li>
                    <Link 
                        href="https://www.linkedin.com/in/geovanne-meloni-b2a575253/" 
                        target='_blank'
                        aria-label='Veja minha conta do Linkedin'
                        prefetch={true}
                    >
                        <BsLinkedin />
                    </Link>
                </li>
                <li>
                    <Link 
                        href="mailto:geovamelo4431@gmail.com" 
                        target='_blank'
                        aria-label='Contate-me pelo e-mail'
                        prefetch={true}
                    >
                        <BsEnvelopeFill />
                    </Link>
                </li>
                <li>
                    <Link 
                        href="https://web.whatsapp.com/send?phone=5511981443833" 
                        target='_blank'
                        aria-label='Contate-me por mensagem'
                        prefetch={true}
                    >
                        <BsTelephoneFill />
                    </Link>
                </li>
            </ul>
            <p>Desenvolvido com 💜 por Geovanne Meloni dos Santos</p>
        </div>
    </footer>
  );

export default Footer;