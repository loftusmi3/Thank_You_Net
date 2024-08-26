import { Link } from "react-router-dom";

const Home = () => {

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>Welcome to Thank You Net!</p>
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/register">Register</Link>
        </section>
    )
}

export default Home
