import { Skeleton } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";
import "./overlay.css";

type Props = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  src?: string;
  overlay: ReactNode;
  height?: number;
  width?: number;
  alwaysShowOverlay?: boolean;
};

const ImageWithOverlay = ({
  onClick,
  onMouseEnter,
  src,
  overlay,
  height,
  width,
  alwaysShowOverlay,
}: Props) => {
  const [imageDimensions, setImageDimensions] = useState<{
    height: number;
    width: number;
  } | null>(null);

  const setImageSize = () => {
    const img = new Image();
    img.src = src!;
    img.onload = () => {
      if (height !== undefined && width !== undefined) {
        setImageDimensions({ height, width });
      } else if (!(height === undefined && width === undefined)) {
        let scale = 1;
        if (height !== undefined) {
          scale = height / img.height;
        } else {
          scale = width! / img.width;
        }
        setImageDimensions({
          height: img.height * scale,
          width: img.width * scale,
        });
      }
    };
  };

  useEffect(() => {
    if (src) setImageSize();
  });
  return (
    <div className="container" onMouseEnter={onMouseEnter} onClick={onClick}>
      {imageDimensions !== undefined ? (
        <img
          alt=""
          src={src}
          className="image"
          style={{
            height: imageDimensions?.height,
            width: imageDimensions?.width,
          }}
        />
      ) : (
        <Skeleton variant="rectangular" height={225} width={150} />
      )}
      <div className="overlay" style={alwaysShowOverlay ? { opacity: 1 } : {}}>
        <div className="content-parent">{overlay}</div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
