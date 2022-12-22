import Footer from "./Footer";
import Navbar from "./NavBar";

type LayoutProps = {
    title:string;
    description:string;
    children:any
}

const Layout = ({ title,description,children }:LayoutProps) => {
    return (
        <>
            <Navbar title={title} description={description}/>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;