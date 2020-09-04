import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
    margin: 100,
    padding: 100,
    border: '1px solid #DDD'
}

const Home = (props) => (
   <div>
	<Head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177224862-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-177224862-1');
</script>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
	</Head>
  	<div style={layoutStyle}>
    	<Header />
    	{props.children}
  	</div>
  </div>
)

export default Home
