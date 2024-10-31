import Hero from './Hero';
import NewItems from './NewItems';
const Home = ({ user }) => {
    return (
        <div>
            <Hero />
            <NewItems user={user} />
        </div>
    );
};

export default Home;
