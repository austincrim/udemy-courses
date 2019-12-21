import Layout from "../components/Layout";

const About = () => {
    return (
        <Layout>
            <div className="intro">
                <h1>Hey there, I'm Austin.</h1>
                <h4>I'm a software engineer at Principal Financial Group</h4>
                <p>I like to code, play music, and spend time with family.</p>
                <p>Have a look around and don't hesitate to reach out.</p>
            </div>

            <style jsx>{`
                .intro {
                    text-align: center;
                    padding: 40px;
                }
            `}</style>
        </Layout>
    );
};

export default About;
