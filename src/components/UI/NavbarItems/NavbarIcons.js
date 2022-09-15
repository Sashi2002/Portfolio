const NavbarIcon = (props) => {
  const Icon = props.icon;
  return (
    <li className={props.className + " px-3 pt-1 text-2xl"}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <Icon />
      </a>
    </li>
  );
};

export default NavbarIcon;
