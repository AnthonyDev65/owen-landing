// Utility functions for image optimization and lazy loading

export const getOptimizedImageUrl = (src: string, _width?: number, _height?: number) => {
  // For now, return the original src
  // In the future, this could integrate with image optimization services
  return src;
};

export const getLazyLoadingProps = () => {
  return {
    loading: 'lazy' as const,
    decoding: 'async' as const,
  };
};

export const getImageSizes = (breakpoints: Record<string, string>) => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(${breakpoint}) ${size}`)
    .join(', ');
};