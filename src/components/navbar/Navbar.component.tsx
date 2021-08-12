import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'

import stylesDesktop from './NavbarDesktop.module.css';
import stylesMobile from './NavbarMobile.module.css';
 
const Navebar: React.FunctionComponent = () => {
    return (
        <>
            <nav className={stylesDesktop.navbar}>
                <ul className={stylesDesktop.navbar_list}>
                    <li className={stylesDesktop.navbar_logo}>
                        <Image src="/logo.png" alt="logo" width={110} height={27} />
                    </li>
                    <li className={stylesDesktop.navbar_item}>
                        <span>Adriano</span>
                        <ul className={stylesDesktop.navbar_item_drop}>
                            <li>
                                <Link href="/ninjas" passHref>
                                    <a>Perfil</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/ninjas" passHref>
                                    <a>Meus Pedidos</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={stylesDesktop.navbar_item}>
                        <Link href="/about" passHref>
                            <a>Sair</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={stylesMobile.title}>
                <ul className={stylesMobile.title_list}>
                    <li className={stylesMobile.title_logo}>
                        <Image src="/logo.png" alt="logo" width={110} height={27} />
                    </li>
                </ul>
            </div>
            <nav className={stylesMobile.navbar}>
                <ul>
                    <li>
                        <Link href="/" passHref>
                            <div>
                                <FontAwesomeIcon icon={faHome} />
                                <span>Início</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ninjas" passHref>
                            <div>
                                <FontAwesomeIcon icon={faShoppingBasket} />
                                <span>Cestinha</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            <div>
                                <FontAwesomeIcon icon={faList} />
                                <span>Pedidos</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ninjas/1" passHref>
                            <div>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Perfil</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
 
export default Navebar;