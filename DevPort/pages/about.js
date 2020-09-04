import Link from 'next/link'
import Home from '../components/Home'
import Image from 'react-bootstrap/Image'

export default ()=> (
    <div>

        <Link href="/about">
            <a>About</a>
        </Link>
         <Home>
            <Image src="/static/about.png/" thumbnail />
            <p>
             I am Caron Johannes. Currently a full stack web developer student.
            I matriculated in 2014, then attended Stellenbosch University to study Bcom(Financial Accounting)
            After this, I decided to travel the world by working onboard MSC for two consecitive years.
            I am passionate about learning almost everything that has to with programming.
            I love working with any related to computers because it is always a challenge.
            
            </p>
                
        </Home>
        <style jsx global>
        {`
            p {
                color: black;
                padding: 1em 1.5em;
                font: 40px;
                margin: 50px;
                text-decoration: none;
            }
        
      `}
      </style>
     </div>
)