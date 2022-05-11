// import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InfoIcon from '@mui/icons-material/Info';


export const MenuItems = [
    {
        title: 'Cart',
        url: '#',
        cName: 'nav-links',
        icon: <ShoppingCartIcon fontSize='large' />
    },
    {
        title: 'Contact',
        url: 'mailto:rachelscox.art@gmail.com',
        cName: 'nav-links',
        icon: <EmailOutlinedIcon fontSize='large' />
    },
    {
        title: 'Info',
        url: '#',
        cName: 'nav-links',
        icon: <InfoIcon fontSize='large' />
    }
]