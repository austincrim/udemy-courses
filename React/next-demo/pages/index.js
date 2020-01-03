import Layout from "../components/Layout";

const Index = () => {
    return (
        <Layout>
            <div className="intro">
                <h1>Next.js Users Demo</h1>
                <p>
                    This small project was developed to better understand
                    Next.js and its capabilities.
                </p>
                <p>
                    Next.js is a React Framework offering server-side rendering,
                    static exporting, code splitting, and much more.
                </p>
                <p>
                    Read more here: <a href="https://nextjs.org">Next.js Official Website</a>
                </p>
                <p>
                    This demo retrieves random user data from the <a href="https://randomuser.me">Random User Generator API</a>
                </p>
            </div>

            <style jsx>{`
                .intro {
                    padding: 40px 20%;
                }
            `}</style>
        </Layout>
    );
};

export default Index;
