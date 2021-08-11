import Navebar from "./navbar";
import Footer from "./footer";

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