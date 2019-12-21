import Navbar from './Navbar'

const Layout = props => {

    return (
        <div>
            <Navbar />
            {props.children}

            <style jsx>{`
                font-family: sans-serif;

            `}</style>
        </div>
    )
}

export default Layout;