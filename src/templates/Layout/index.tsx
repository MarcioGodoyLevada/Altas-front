import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Menu from '../../components/Menu';

import { useSession } from '../../contexts/session';

import * as S from './styles';

const Layout = () => {
  const { user } = useSession();

  const navigate = useNavigate();

  const [expandable, setExpandable] = useState(false);

  return (
    <S.Wrapper>
      <S.SideMenuExpandable expandable={expandable}>
        <S.LogoWrapper onClick={() => navigate('/friends')}>
          <S.UserName>{user?.name}</S.UserName>
        </S.LogoWrapper>

        <Menu
          expandable={expandable}
          onClick={() => {
            setExpandable(!expandable);
          }}
          logout={logout}
        />
      </S.SideMenuExpandable>

      <S.WrapperContent expandable={expandable}>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default Layout;
