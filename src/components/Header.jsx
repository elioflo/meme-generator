import logo from '../assets/troll_face.svg'
export default function(){
    return (
        <header className="header">
            <h2 className='header__logo'><img src={logo} alt="Troll face" /> Meme Generator</h2>
            <h3>React Course - Project 3</h3>
        </header>
    )
}