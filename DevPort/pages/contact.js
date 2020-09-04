import Link from 'next/link'
import Home from '../components/Home'
import Image from 'react-bootstrap/Image'

export default ()=> (
    <div>
        <Link href="/contact">
            <a>Contact me</a>
        </Link>
        <Home>
            <Image src="/static/contact.png/" thumbnail />

            <ul> 
                <li>
                    Email: caronjohanneswd@gmail.com

                </li>
                <li>
                    Contact Number : 021 933 2120
                </li>
                <li>
                    LinkedIn:https://www.linkedin.com/in/caron-johannes-4947131b1/
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