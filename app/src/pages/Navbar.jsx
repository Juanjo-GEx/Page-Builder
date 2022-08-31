import { useQuery } from '@tanstack/react-query'
import { NavLink } from "react-router-dom"
import fetchData from '../services/fetchData'
import { GetMenuQuery } from '../graphql/HomeQueries'
import { v4 as uuidv4} from 'uuid';

const Navbar = () => {

    const { data: menus, isSuccess, isError, error } = useQuery(["menus"], async () => await fetchData(GetMenuQuery, 'menus'));
    
    if (isError) return `Error: ${error}`

    const navBarStyles = ( {isActive} ) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    
    return (
        <nav className="flex gap-6">
            { isSuccess && menus.menu_items.map(link => 
                <NavLink 
                    key={uuidv4()}
                    style={navBarStyles}
                    to={link.url}
                >
                    {link.label}
                </NavLink>
            )}
        </nav>
    )
}

export default Navbar;