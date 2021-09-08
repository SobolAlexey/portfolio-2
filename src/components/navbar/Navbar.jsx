import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (<div className="navbar">
  <nav>
     <NavLink className="nav__item" to='/AlexSobol'><div>ГЛАВНАЯ</div></NavLink> 
     <NavLink className="nav__item" to='/skils'><div>НАВЫКИ</div></NavLink> 
     <NavLink className="nav__item" to='/project'><div>ПРОЕКТЫ</div></NavLink> 
     <NavLink className="nav__item" to='/contacts'><div>КОНТАКТЫ</div></NavLink> 
    <div className='nav__emptyItem'></div>
  </nav>
    </div>)
   
    
}
export default Navbar