import { LinkContainer ,HomeContainer} from './home.styles';

const Home = () => {
    return (
        <HomeContainer>
            <LinkContainer to='/vendors' >
                رستوران ها
            </LinkContainer>
        </HomeContainer>
    );
};

export default Home;