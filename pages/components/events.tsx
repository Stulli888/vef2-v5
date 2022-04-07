import Link from 'next/link'
import styles from './events.module.css'

export function Events({e}) {
   return(
    <ul className={styles.events}>
      {e.map(function(event, i){
        return(
          <li key={i} className={styles.listItem}>
            <Link href={`/event/${event.id}`}>
              <a>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}