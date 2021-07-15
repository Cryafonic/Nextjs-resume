import Nav from "../component/Nav";
import Head from "next/head";

// set layout for all the pages that are being render.
const Layout = ({ children }) => {
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
      <div className="container-fluid background">
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
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQHYSPZ6KC"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-NQHYSPZ6KC');
        </script>
      <style jsx>{`
        .background {
          background-color: #171717;
          height: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
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
};

export default Layout;
