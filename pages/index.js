import indexStyles from '../styles/index.module.css';
import Image from 'next/image';
import html5 from '../static/images/HTML5.png';
import css3 from '../static/images/css3.png';
import javaScript from '../static/images/javascript.png';
import react from '../static/images/react.png';
import jest from '../static/images/jest.png';
import express from '../static/images/express.png';
import node from '../static/images/node.png';
import next from '../static/images/next.png';
import jquery from '../static/images/jquery.png';
import bootstrap from '../static/images/bootstrap.png';
import mongodb from '../static/images/mongodb.png';

// landing page of the developer protofio
// using my jsx to style the page.
export default function Home() {
  return (
    <>
      <div >
        <h2>Brendon van der nest</h2>
        <span className="summary">
          <p>I have a pleasant, friendly personality and enjoy challenges. Honesty, dedication, and loyalty are some of my strong points. I am a hard worker and a fast learner. I believe in code ethics and solving issues efficiently. It&apos;s a feature, not a bug. Learning new things every day is the main reason why I decided to pursue a career in software development.</p>
        </span>
        <span>
          <h2 className={indexStyles.center}>Skills</h2>
          <div className="images">
            <span>
              <Image 
                src={html5} 
                alt="HTML5" 
                width={200}
                height={200}
              />
              <h2>HTML5</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={css3} 
                alt="CSS3" 
                width={200}
                height={200}
              />
              <h2>CSS3</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={javaScript} 
                alt="JavaScript" 
                width={200}
                height={200} 
              />
              <h2>JavaScript</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={react} 
                alt="Reactjs" 
                width={200}
                height={200}
              />
              <h2>Reactjs</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={jest} 
                alt="Jestjs" 
                width={200}
                height={200}
              />
              <h2>Jestjs</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={express} 
                alt="Expressjs" 
                width={200}
                height={200}
              />
              <h2>Expressjs</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={node} 
                alt="Nodejs" 
                width={200}
                height={200}
              />
              <h2>Nodejs</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={next} 
                alt="Nextjs" 
                width={200}
                height={200}
              />
              <h2>Nextjs</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={jquery} 
                alt="jQuery" 
                width={200}
                height={200} 
              />
              <h2>jQuery</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={bootstrap} 
                alt="Bootstrap" 
                width={200}
                height={200}
                />
              <h2>Bootstrap</h2>
              <p>+-1 year</p>
            </span>
            <span>
              <Image 
                src={mongodb} 
                alt="MongoDb" 
                className="size" 
                width={200}
                height={200}
              />
              <h2>MongoDb</h2>
              <p>+-1 year</p>
            </span>
          </div>
        </span>
      </div>
      <style jsx>{`
            .images {
              display: flex;
              flex-flow: row wrap;
              justify-content: space-evenly;
              border: 5px solid black;
              border-radius: 25px;
            }
            .size {
              margin-top: 10%;
              height: 1rem;
              width: 11rem;
            }
            div div{
              background-color: #444444;
            }
            div span h2 {
              display: flex;
              justify-content: center;
            }
            div span p {
              display: flex;
              justify-content: center;
            }
            p {
              color: #EDEDED;
              font-weight: bold;
            }
            h1 , h2 {
              color: #EDEDED;
            }
            .summary {
              display: flex;
              margin: 1%;
            }
          `}</style>
    </>
  )
}
