import { MenuArrowOutline, MenuOutline } from '@styled-icons/evaicons-outline';

import MenuItem from '../MenuItem';
import { menuItems } from './menuItems';

import * as S from './styles';

export type MenuProps = {
  expandable?: boolean;
  path?: string;
  onClick?: () => void;
  logout?: () => void;
};

const Menu = ({ expandable, onClick, logout }: MenuProps) => {
  return (
    <>
      <S.Nav>
        <S.Icon
          expandable={expandable}
          as={!expandable ? MenuOutline : MenuArrowOutline}
          onClick={onClick}
        />
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            onClick={onClick}
          ></MenuItem>
        ))}
      </S.Nav>
    </>
  );
};

export default Menu;
