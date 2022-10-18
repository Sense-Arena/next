import { animated, useSpring } from '@react-spring/web';
import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';

export const SAImage = (props: ImageProps) => {
  const [ready, setReady] = useState(false);

  const styles = useSpring({
    opacity: ready ? 1 : 0,
    display: 'flex',
  });

  const handleLoad = () => {
    setReady(true);
  };

  return (
    <animated.div style={styles}>
      <NextImage {...props} onLoadingComplete={handleLoad} />
    </animated.div>
  );
};
