import Banner from "../components/Banner";
import Flow from "../components/Flow";
import Footer from "../components/Footer";
import Page from "../components/Page";

const Home = ({ stars }) => (
    <Page>
        <div>
            <Banner stars={stars} />
            <Flow />
        </div>
        <Footer />
    </Page>
);

export default Home;
