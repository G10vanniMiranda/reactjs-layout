import "./NavBar.css"
import { Link } from "react-router-dom"

export function NavBar(){
    var logo = "https://miro.medium.com/v2/resize:fit:400/1*iraHUBVOkD3HnTLYoRWYDQ.png"
    return(
        <div className="nav-bar">
            <img width={100} src={logo} alt="" />
            
            <ul>
                <li> <Link to="/login2" > Login 2 </Link></li>
                <li> <Link to="/product" > Produtos </Link></li>
                <li> <Link to="/services" > Serviços </Link></li>
                <li> <Link to="/training" > Treinamentos </Link></li>
            </ul>

            <button>
                <Link to="/login" > Sair </Link> 
            </button>
        </div>
    )
}