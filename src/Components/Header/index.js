import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { UserContext } from '../../Context/context'
import './styles.css'

function Header() {
    const [inputValue, setInputValue] = useState('')
    const { cards, addNewCard } = useContext(UserContext)
    
    const showRepo = repo => {
        addNewCard(repo)
        console.log(cards)
    } 

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
                    <input 
                        id='input-field' 
                        type='text' 
                        name='repo' 
                        className='repo-input' 
                        placeholder=' '
                        onChange={e => {setInputValue(e.target.value)}}
                    />
                    <label for='input-field'>Pesquisar repositório</label>
                </form>
                <button className='get-repo-btn' onClick={e => {showRepo(inputValue)}}>
                    <span>
                        <AiOutlineSearch size={24}/>
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header