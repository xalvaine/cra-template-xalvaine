import { Link } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'

export const Home = () => {
  return <Link to={PUBLIC_PATH.INFO}>info</Link>
}
