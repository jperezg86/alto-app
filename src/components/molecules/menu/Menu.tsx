import React from "react";
import MenuItem from "../../atoms/MenuItem/MenuItem";
import {
  APP_ACTIONS,
  useAppState,
} from "../../../context/AppState/AppStateProvider";

type MenuProps = {
  items: string[];
};
const Menu = ({ items }: MenuProps) => {
  const [{ activePage }, dispatch] = useAppState();

  const onMenuItemClicked = React.useCallback(
    (menuItem: string | JSX.Element | JSX.Element[]) => {
      dispatch({
        type: APP_ACTIONS.SET_ACTIVE_MENU,
        payload: menuItem,
      });
    },
    [items, dispatch]
  );

  return (
    <ul className="flex flex-row">
      {items.map((label) => (
        <MenuItem onClick={onMenuItemClicked} active={label === activePage} key={`menu-${label}`}>
          {label}
        </MenuItem>
      ))}
    </ul>
  );
};

export default Menu;
