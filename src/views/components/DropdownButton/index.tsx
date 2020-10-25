import React, { FC, useState } from 'react';

import { Button } from 'views/components/Button';

import { DropdownContainer, DropdownMenu, DropdownItem, AngleIcon } from './styled';

interface DropdownProps {
  active?: boolean;
  firstElement?: string;
  children: string;
  menuItems: string[];
  onMenuItemSelect?: (menuItem: string) => void;
}

export const DropdownButton: FC<DropdownProps> = ({
  active,
  children,
  firstElement,
  menuItems,
  onMenuItemSelect,
}) => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  function handleItemSelect(value: string) {
    return () => {
      onMenuItemSelect!(value);
      setMenuVisibility(false);
    };
  }

  return (
    <DropdownContainer
      onMouseEnter={() => setMenuVisibility(true)}
      onMouseLeave={() => setMenuVisibility(false)}
    >
      <Button active={active || isMenuVisible}>
        {children}
        <AngleIcon />
      </Button>

      <DropdownMenu hidden={!isMenuVisible}>
        {firstElement && (
          <DropdownItem active onClick={handleItemSelect('')}>
            {firstElement}
          </DropdownItem>
        )}

        {menuItems.map((menuItem) => (
          <DropdownItem key={menuItem} onClick={handleItemSelect(menuItem)}>
            {menuItem}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

DropdownButton.defaultProps = {
  active: false,
  children: '',
  menuItems: [],
  onMenuItemSelect: () => {},
};
