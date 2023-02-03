import { Link } from "react-router-dom";
import { Colors, Fonts } from "../../styles/styleVariables";

export const Footer = () => {
  return <div className='footer'>Footer goes here</div>;
};

export const NavItem = (props: any) => {
  return (
    <Link
      onClick={props.onClick}
      to={props.path}
      style={{
        textDecoration: "none",
        color: `${Colors.primary}`,
        marginBottom: 10,
        fontFamily: `${Fonts.primary}`,
      }}>
      {props.title}
    </Link>
  );
};
