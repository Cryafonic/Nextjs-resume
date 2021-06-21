import layoutStyles from '../styles/Layout.module.css';
import Nav from '../component/Nav';
import Head from 'next/head';

// set layout for all the pages that are being render.
const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link   
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                        rel="stylesheet" 
                        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" 
                        crossorigin="anonymous" 
                />
            </Head>
            <Nav />
            <div className={layoutStyles.container}>
                <p>{children}</p>
            </div>
            <footer>
                <p>This site has been built with the use of nextjs.</p>
            </footer>
            <script 
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" 
                integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" 
                crossorigin="anonymous"
            />
            <style jsx>{`
                div {
                    background-color: #171717;
                    height: 100%;
                }
                footer {
                    background-color: #171717;
                    display: flex;
                    justify-content: center;
                    align-content: flex-end;
                }
                footer p {
                    color: #444444; 
                }
            `}</style>
        </>
    );
}

export default Layout