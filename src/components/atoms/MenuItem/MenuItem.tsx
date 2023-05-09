import React from "react";
type MenuItemProps = {
  className?: string;
  active?: boolean;
  children: string | JSX.Element | JSX.Element[];
  onClick: (menuItem: string | JSX.Element | JSX.Element[]) => void;
};
const MenuItem = ({ active, children, onClick, className }: MenuItemProps) => {
  const onItemClicked = React.useCallback(() => {
    onClick(children);
  }, [children, onClick]);

  const theClassName = `${className} text-primary hover:text-secondary ${active && 'text-dark'} cursor-pointer p-3`;
  return (
    <li className={theClassName} onClick={onItemClicked}>
      {children}
    </li>
  );
};

export default MenuItem;
