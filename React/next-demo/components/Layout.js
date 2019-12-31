import Navbar from "./Navbar";

const Layout = props => {
    return (
        <div>
            <Navbar />
            {props.children}

            <style jsx>{`
                @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
                font-family: "Roboto", sans-serif;
                text-align: center;
            `}</style>
        </div>
    );
};

export default Layout;
