import Link from 'next/link'


const Header = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/contact">
          <a >Contact Me</a>
        </Link>

        <Link href="/projects">
          <a >Project</a>
        </Link>

        <style jsx global>
        {`
            a {
                background-color: white;
                color: pink;
                padding: 1em 1.5em;
                font: 20px;
                margin: 50px;
                text-decoration: none;
                text-transform: uppercase;
            }
        
      `}
      </style>
      
    </div>
) 

export default Header