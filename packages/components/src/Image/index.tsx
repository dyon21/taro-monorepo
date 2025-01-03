import { Image as TaroImage, ImageProps } from "@tarojs/components";
import { useEffect, useState } from "react";

export const Image = (props: ImageProps & { fallback?: string }) => {
  const [innerSrc, setInnerSrc] = useState<string>(props.src);

  useEffect(() => {
    setInnerSrc(props.src || props.fallback || "");
  }, [props.src, props.fallback]);

  return (
    <TaroImage
      {...props}
      src={innerSrc}
      onError={(e) => {
        if (props.fallback) {
          setInnerSrc(props.fallback);
        }
        props.onError?.(e);
      }}
    />
  );
};
