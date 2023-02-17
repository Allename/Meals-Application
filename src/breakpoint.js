const sizes = {
  mobile: '600px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
  tv: '1400px',
};

export const device = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
  tv: `(min-width: ${sizes.tv})`
};