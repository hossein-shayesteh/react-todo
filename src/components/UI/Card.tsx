import "./Card.scss";

interface props {
  children?: React.ReactNode;
  className?: string;
}
const Card = (props: props) => {
  const classes = `${props.className} card`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
