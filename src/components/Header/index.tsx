import './style.scss'

const Header = () => {
  return (
    <header>
        <div className="header">    
            <div className='logo'>
                <span>
                    Geovanne Meloni
                </span>
            </div>

            <nav>
                <ul className='menu'>
                    <li><a href="/">Início</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/">Projetos</a></li>
                </ul>
            </nav>

            <div className="btns">
                <button>
                    Contate-se
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header;