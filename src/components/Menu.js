import { Link } from 'react-router-dom';
import './Menu.css'
export default function Menu() {
    return (
        <div>
            <nav>
                <Link to='/'>home</Link>
                <Link to='/section-1'>section 1</Link>
                <Link to='/section-2'>section 2</Link>
                <Link to='/section-3'>section 3</Link>
                <Link to='/section-4'>section 4</Link>
                <Link to='/section-5'>section 5</Link>
            </nav>
        </div>
    )
}
