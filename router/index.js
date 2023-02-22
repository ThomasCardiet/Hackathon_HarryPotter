export class Router {
  // ROUTES

  /**
   * @param {String} name
   * @param {String} slug
   */
  static routes = {
    CHOICE: {
      name: 'Choice',
      slug: '/choice',
    },
    LOGIN: {
      name: 'Login',
      slug: '/login',
    },
    HOME: {
      name: 'Home',
      slug: '/',
    },
    PARTY: {
      name: 'Party',
      slug: '/party',
    },
    JOIN_PARTY: {
      name: 'JoinParty',
      slug: '/join-party',
    },
  };

  /**
   * GET ROUTES
   *
   * @returns {Object}
   */
  static getRoutes() {
    return this.routes;
  }

  /**
   * GET STATIC PATHS FOR ROUTING
   *
   * @returns {Array<Object>}
   */
  static getStaticPaths(param = 'slug') {
    return Object.values(this.getRoutes()).map((route) => ({
      params: { [param]: route.slug.substring(1).split('/') },
    }));
  }

  /**
   * GET PATH BY ARRAY OF PARAMS
   *
   * @returns {String}
   */
  static getPathByArray(params) {
    return params && params.length > 0 ? `/${params.join('/')}` : '/';
  }

  /**
   * GET ROUTE BY SLUG
   * @param {String} slug
   *
   * @returns {Object}
   */
  static getRouteBySlug(slug) {
    return Object.values(this.getRoutes()).find((route) => route.slug === slug);
  }
}
