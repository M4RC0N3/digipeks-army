import './style/index.css'
import Lottie from 'react-lottie';
import data from '../../../assets/animations/web-dev.json'
const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="home-container">
            <h1>Section in development</h1>
            <div className="container">
                <Lottie
                options={defaultOptions}
                />
            </div>
        </div>
    );
}

export default Home;
