import { useNavigate } from 'react-router-dom'

import './styles.css';

export function Header(props) {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate('/journeys');
    }
    return (
        <div className='navigation'>
            <a onClick={handleLogoClick}><img src="/staart_logo.png" className="logo-header" alt="Logo Staart" /></a>
            <button onClick={props.onClick} id={props.id}>{props.title}</button>
        </div>
    )
}