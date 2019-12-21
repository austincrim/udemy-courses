import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch'

const Index = props => {
    return (
        <Layout>
            <div className="intro">
                <h1>Next.js Blog Demo</h1>
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
            </div>

            <style jsx>{`
                .intro {
                    text-align: center;
                    padding: 40px 20%;
                }
            `}</style>
        </Layout>
    );
};

export default Index;
