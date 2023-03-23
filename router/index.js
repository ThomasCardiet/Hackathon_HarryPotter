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
    LIST_PARTY: {
      name: 'ListParty',
      slug: '/list-party',
      props: {
        games: true,
      },
    },
    STATS: {
      name: 'Stats',
      slug: '/stats',
      props: {
        houses: true,
      },
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

    COMPTEUR: {
      name: 'Compteur',
      slug: '/compteur',
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
