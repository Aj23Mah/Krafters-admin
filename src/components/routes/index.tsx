
import { Route, Routes } from 'react-router-dom'
import {PRIMARY_ROUTES} from './routes'

const PrimaryRoute = () => {
  return <Routes>
    {PRIMARY_ROUTES.map((v, key) => (
        <Route path={v.path} element={v.element} key={key} />
    ))}
  </Routes>
}

export default PrimaryRoute