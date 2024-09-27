import './Navbar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
    
    return (
        <nav className="nav">
            <ul id="menu">
                <a href="/" className="logo" onClick={(e) => e.preventDefault()}>
                        Cian.
                </a>
                <Link to="/" className="hac">Home</Link>
                <CustomLink to="/about" className="hac">About</CustomLink>
                <CustomLink to="/contact" className="hac">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end : true })
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )   
}

