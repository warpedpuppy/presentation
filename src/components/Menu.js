import { Link } from 'react-router-dom';
import './Menu.css'
export default function Menu() {
    return (
        <div>
            <nav>
                <Link to='/'>welcome</Link> |
                <Link to='/section-1'>1</Link> |
                <Link to='/section-2'>2</Link> |
                <Link to='/section-3'>3</Link> |
                <Link to='/section-4'>4</Link> |
                <Link to='/section-5'>5</Link> |
                <Link to='/section-6'>6</Link> 
            </nav>
        </div>
    )
}
