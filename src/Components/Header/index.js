import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai'
import './styles.css'

function Header() {
    return (
        <header>
            <div className='top-header'>
                <span>
                    <AiFillGithub size={56}/>
                </span>
                <h1>GithubWiki</h1>
            </div>
            <div className='bttom-header'>
                <form id="input-content">
                    <input id='input-field' type='text' name='repo' className='repo-input' placeholder=' '/>
                    <label for='input-field'>Pesquisar repositório</label>
                </form>
                <button className='get-repo-btn'>
                    <span>
                        <AiOutlineSearch size={24}/>
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header