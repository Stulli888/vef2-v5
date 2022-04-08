import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from './event.module.scss'

function Event({event}) {
	const router = useRouter();
	const {id} = router.query
	return (
		<div>
			<Head>
				<title>{event.name}</title>
			</Head>
			<h1>{event.name}</h1>
			<ul className={styles.registrationsList}>
      		  {event.registrations.map(function(item, i){
        	   return(
          		<li key={i} className={styles.listItem}>
          			<p className={styles.listP}>{item.name}</p>
          			<p className={styles.listP}>{item.comment}</p>
 				</li>
        		)
      			})}
    		</ul>
		</div>
	)
}


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events/')
  const posts = await res.json()
  const e = posts.items

  // Get the paths we want to pre-render based on posts
  const paths = e.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${params.id}`)
  const event = await res.json()

  // Pass post data to the page via props
  return { props: { event } }
}

export default Event