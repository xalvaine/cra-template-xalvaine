import { Link } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'

export const Info = () => {
  return <Link to={PUBLIC_PATH.HOME}>home</Link>
}
