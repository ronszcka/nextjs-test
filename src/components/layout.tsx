import Navebar from "./navbar";
import Footer from "./footer";

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <div className="content">
            <Navebar/>
            { children }
            <Footer/>
        </div>
    );
}
 
export default Layout;