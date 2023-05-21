import { GlobalStyle } from './components/GlobalStyle';

import { AppStyled } from './components/App/App.styled';
import { Route, Routes } from 'react-router-dom/dist';

// import { Home } from './pages/Home';
import SharedLayout from './components/SharedLayout';
import { Twits } from './pages/Twits';
import { Home } from './pages/Home';

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path='/follow_following' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/follow_following/twits' element={<Twits />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>

      <GlobalStyle />
    </AppStyled>
  );
}

export default App;
