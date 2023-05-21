import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './navigation/Navigation.styled';

const SharedLayout = () => {
  return (
    <div>
      <div>
        <Navigation>
          <ul>
            <li>
              <NavLink to='/follow_following'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/follow_following/twits'>Twits</NavLink>
            </li>
          </ul>
        </Navigation>
      </div>

      <Outlet />
    </div>
  );
};

export default SharedLayout;
