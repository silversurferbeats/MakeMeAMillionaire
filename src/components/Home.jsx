

const Home = () => {

    return (
        <div className="home-container">
            <div className="section1">container1</div>
            <div className="section2">container2</div>
            <div className="section3">
                <button onClick={() => alert("the space has been purchased")}>Buy Space</button>
            </div>
        </div>
    )
}

export default Home