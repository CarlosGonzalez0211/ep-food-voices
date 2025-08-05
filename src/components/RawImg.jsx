export default function RawImg({ image, alt, width, height, ...props }) {
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}
