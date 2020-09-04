import Link from 'next/link'
import Home from '../components/Home'
import Image from 'react-bootstrap/Image'

export default ()=> (
    <div>
        <Link href="/projects">
            <a>My projects</a>
        </Link>

        <Home>
            <Image src="/static/projects.jpeg/" thumbnail />

            <ul> 
                <li>
                https://github.com/CaronJay/iTunes.git    
                </li>
                <li>https://github.com/CaronJay/Hangman.git
                </li>
            </ul> 
        </Home>
        <style jsx global>
        {`
            li {
                color: black;
                padding: 1em 1.5em;
                font: 75px;
                margin: 25px;
                text-decoration: none;
            }
        
      `}
      </style>
     </div>
)