export default function RawImg({ image, alt, width, height, className, style, ...props }) {
  const mergedStyle = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    ...style,
  };

  return (
    <img
      src={image}
      alt={alt}
      className={className}
      style={mergedStyle}
      {...props}
    />
  );
}
