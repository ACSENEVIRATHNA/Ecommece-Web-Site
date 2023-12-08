import Header from "../components/Header";
import Nav from "../components/Nav";

const Home = () =>{
    return (
        <div className="home">
            <div className="header">
                <Header/>
            </div>
            <h1>Home page</h1>
            <div className="navigation bar">
                <Nav/>
            </div>
        </div>
    )
}

export default Home;