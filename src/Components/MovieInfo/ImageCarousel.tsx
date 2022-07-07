type Props = { children: React.ReactNode[] };

const ImageCarousel = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", overflow: "scroll" }}>
      {children}
    </div>
  );
};

export default ImageCarousel;
