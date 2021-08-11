import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faHome, faList, faPhone, faShoppingBag, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'

import stylesDesktop from '../../styles/NavbarDesktop.module.css';
import stylesMobile from '../../styles/NavbarMobile.module.css';
import { faFirstOrder, faSalesforce } from '@fortawesome/free-brands-svg-icons';
 
const Navebar: React.FunctionComponent = () => {
    return (
        <>
            <nav className={stylesDesktop.navbar}>
                <ul className={stylesDesktop.navbar_list}>
                    <li className={stylesDesktop.navbar_logo}>
                        <Image src="/logo.png" alt="logo" width={110} height={27} />
                    </li>
                    <li className={stylesDesktop.navbar_item}>
                        <Link href="/"><a>Home page</a></Link>
                    </li>
                    <li className={stylesDesktop.navbar_item}>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li className={stylesDesktop.navbar_item}>
                        <span>Adriano</span>
                        <ul className={stylesDesktop.navbar_item_drop}>
                            <li>
                                <Link href="/ninjas"><a>Perfil</a></Link>
                            </li>
                            <li>
                                <Link href="/ninjas"><a>Meus Pedidos</a></Link>
                            </li>
                            <li>
                                <Link href="/ninjas"><a>Sair</a></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav className={stylesMobile.navbar}>
                <ul>
                    <li>
                        <Link href="/">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/ninjas">
                            <FontAwesomeIcon icon={faShoppingBasket} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <FontAwesomeIcon icon={faList} />
                        </Link>
                    </li>
                    <li>
                        <Link href="/ninjas/1">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
 
export default Navebar;