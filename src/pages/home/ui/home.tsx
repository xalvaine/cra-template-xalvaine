import { Logo } from 'shared/assets'

import styles from './home.module.scss'

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <p>
        Edit <code>app/ui.tsx</code> and save to reload.
      </p>
      <a
        className={styles.link}
        href='https://reactjs.org'
        rel='noopener noreferrer'
        target='_blank'
      >
        Learn React
      </a>
    </div>
  )
}
