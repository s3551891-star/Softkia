
export default function Container({
  children,
  className = "",
  as: Component = "div",
  fluid = false,
  ...props
}) {
  const classes = [
    "container",
    fluid ? "container--fluid" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
