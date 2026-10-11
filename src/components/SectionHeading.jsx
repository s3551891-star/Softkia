
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  as: HeadingTag = "h2",
}) {
  const classes = [
    "section-heading",
    `section-heading--${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow && (
        <span className="section-heading__eyebrow">
          {eyebrow}
        </span>
      )}

      <HeadingTag className="section-heading__title">
        {title}
      </HeadingTag>

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
}
