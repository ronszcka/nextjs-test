import Navebar from "../navbar/Navbar.component";
//import Footer from "./footer";

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <div className="grid">
            <Navebar/>
            { children }
            {/* <Footer/> */}
        </div>
    );
}
 
export default Layout;