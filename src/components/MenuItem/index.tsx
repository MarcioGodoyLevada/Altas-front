import React, { useState } from 'react';
import * as S from './styles';

export type MenuItemProps = {
  icon?: React.ComponentType;
  disabled?: boolean;
  expanded?: boolean;
  expandable?: boolean;
  path?: string;
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const MenuItem = ({
  disabled,
  expanded = false,
  expandable,
  title = '',
  children,
  path,
  onClick,
}: MenuItemProps) => {
  const [expandedState, setExpandedState] = useState(expanded);

  function handleClick() {
    if (disabled) {
      return;
    }

    if (onClick) {
      onClick();
      return;
    }

    setExpandedState(!expandedState);
  }

  return (
    <S.Wrapper>
      <S.Item
        onClick={handleClick}
        expandable={expandable}
        data-testid="expandable-button"
      >
        <div>
          <p>{title}</p>
        </div>
      </S.Item>
    </S.Wrapper>
  );
};

export default MenuItem;
