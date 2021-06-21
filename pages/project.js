// Project page where im showing all my code projects.
// bootstrap is being used here and my own styling with jsx.
import Image from 'next/image';
import reactResume from '../static/images/React-resume.png';
import reactMinesweeper from '../static/images/React-Minesweeper.png';
import iTunesSearch from '../static/images/iTunes-search.png';

const project = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="container carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="https://github.com/Cryafonic/React-resume" ><Image src={reactResume} className="d-block w-100" alt="react-resume"/></a>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-muted">React resume</h5>
                        <p className="text-muted">Code: HTML5, CSS3,javascript with the reactjs library</p>
                        <p className="text-muted">Resume that was build with Reactjs</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <a href="https://github.com/Cryafonic/React-Minesweeper" ><Image src={reactMinesweeper} className="d-block w-100" alt="react-minesweeper"/></a>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-muted">React Minesweeper</h5>
                        <p className="text-muted">Code: JSX, CSS3, Sass, JavaScript with the Reactjs Library</p>
                        <p className="text-muted">Minesweeper that was build with Reactjs</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <a href="https://github.com/Cryafonic/ItunesSearch" ><Image src={iTunesSearch} className="d-block w-100" alt="iTunes-search"/></a>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-muted">React iTunes search app</h5>
                        <p className="text-muted">Code: JSX, CSS3, JavaScript with the Reactjs and nodejs Libraries</p>
                        <p className="text-muted">iTunes search app that was build with Reactjs and nodejs</p>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <h2>Project summary</h2>
                <h5 >React resume</h5>
                <p>Code: HTML5, CSS3,javascript with the reactjs library</p>
                <p>Resume that was build with Reactjs</p>
                <p>The first slide showcases my CV with basic reactjs.</p>
                <h5>React Minesweeper</h5>
                <p>Code: JSX, CSS3, Sass, JavaScript with the Reactjs Library</p>
                <p>Minesweeper that was build with Reactjs</p>
                <p>The second slide is the on we all love. A old one but still the best game ever made. Minesweeper.</p>
                <h5>React iTunes search app</h5>
                <p>Code: JSX, CSS3, JavaScript with the Reactjs and nodejs Libraries</p>
                <p>iTunes search app that was build with Reactjs and nodejs</p>
                <p>Itunes search app is very basic in its search parameters with a minimalistic look. As you can see in slide three. <br/>Its is capabale of search anything on the iTunes store
                including books, music, podcasts etc.The iTunes stores backend is build with the use of Nodejs and expressjs</p>
                <style jsx>{`
                    h5 {
                        padding-left: 2%;
                        padding-top: 2%;
                        color: #EDEDED;
                        font-weight: bold;
                    }
                    h2 {
                        color: #EDEDED;
                    }
                    p{
                        color: #EDEDED;
                        padding-left: 5%;
                    }
                    div {
                        margin-top: 3%;
                    }
                `}</style>

            </div>
        </>
    );
}

export default project