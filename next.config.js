module.exports = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
      // Georgian-American Theatrical Feast section
      {
        source: '/georgian-american-theatrical-feast/about-the-festival',
        destination: '/georgian-american-theatrical-feast/01_about-the-festival',
      },
      {
        source: '/georgian-american-theatrical-feast/press',
        destination: '/georgian-american-theatrical-feast/02_press',
      },
      {
        source: '/georgian-american-theatrical-feast/gallery',
        destination: '/georgian-american-theatrical-feast/03_gallery',
      },
      {
        source: '/georgian-american-theatrical-feast/full-productions',
        destination: '/georgian-american-theatrical-feast/04_full-productions',
      },
      {
        source: '/georgian-american-theatrical-feast/readings',
        destination: '/georgian-american-theatrical-feast/05_readings',
      },
      {
        source: '/georgian-american-theatrical-feast/special-events',
        destination: '/georgian-american-theatrical-feast/06_special-events',
      },
      {
        source: '/georgian-american-theatrical-feast/playwrights',
        destination: '/georgian-american-theatrical-feast/07_playwrights',
      },
      {
        source: '/georgian-american-theatrical-feast/cast-and-creative',
        destination: '/georgian-american-theatrical-feast/08_cast-and-creative',
      },
      {
        source: '/georgian-american-theatrical-feast/about-georgia',
        destination: '/georgian-american-theatrical-feast/09_about-georgia',
      },
      {
        source: '/georgian-american-theatrical-feast/donate',
        destination: '/georgian-american-theatrical-feast/10_donate',
      },
      // Main sections
      {
        source: '/about',
        destination: '/about',
      },
      {
        source: '/contact',
        destination: '/contact',
      }
    ];
  },
};