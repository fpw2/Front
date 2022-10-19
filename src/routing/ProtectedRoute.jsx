import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

/**
 * Prevent to access in profile page directly into the url
 */
export default function ProtectedRoute() {
  const { userToken } = useSelector((state) => state.user)

  // show unauthorized screen if no token is found in redux store
  if (!userToken) {
    return (
      <div className="error">
        <h1>Unauthorized :(</h1>
        <NavLink to='/login'>Login</NavLink> to gain access
      </div>
    )
  }

  // returns child route elements
  return <Outlet />
}