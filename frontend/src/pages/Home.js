import title from '../Assest/title_background';

const Home = () => {
    return (  
        <div className="Home">
            <div className="content">
                <img src={title} alt="title_background" height = {{width: fit-content, height: 100}}/>
                <div className="para">
                    <p>
                    The Website aims to develop a machine learning model for the identification and classification of medicinal plants from images and create a user-friendly application to provide valuable information about the plants.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;