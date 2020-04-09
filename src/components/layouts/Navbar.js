import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// export class Navbar extends Component {

//     static defaultProps = {
//         title: 'Gihtub',
//         icon: 'fab fa-github'
//     }

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <nav className="navbar bg-primary">
//                     <h1>
//                     <i className={props.icon} />
//                         {props.title}
//                     </h1>
//                 </nav>
//             </div>
//         )
//     }
// }


const Navbar = ({icon, title}) => {
    return (
        <div>
            <nav className="navbar bg-success">
                <h1>
                <i className={icon}  style={navStyel} />
                    {title}
                </h1>

                <ul>
                    <li>
                        <Link to="/" > Home </Link> 
                    </li>

                    <li>
                        <Link to="/about">About </Link> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const navStyel = {
    marginRight: "10px"
}
Navbar.defaultProps = {
        title: 'Gihtub',
        icon: 'fab fa-github'
    };

Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

export default Navbar
