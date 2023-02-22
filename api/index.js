export class Api {
  static path = '/';

  static routes = {
    GET_USERS: 'users',
  };

  static getPath() {
    return this.path;
  }

  static getRoutes() {
    return this.routes;
  }

  /**
   * CREATE REQUEST HEADERS
   *
   * @param {Object} params
   *
   * @return {Headers}
   */
  static getHeaders(params = {}) {
    const headers = new Headers();

    Object.values(params).forEach(([key, value]) => {
      headers.append(key, value);
    });

    return headers;
  }

  /**
   * FETCH API
   *
   * @param {String} path
   * @param {Object} body
   * @param {String} method
   *
   * @return {Promise<Object>}
   */
  static async fetchApi(path, body = {}, method = 'GET') {
    const request = {
      method,
      headers: this.getHeaders(),
    };

    if (Object.keys(body).length > 0) request.body = JSON.stringify(body);

    return await fetch(
      `${process.env.API_HOST}${this.getPath()}${path}`,
      request
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return {
          status: 400,
          message: error.message,
        };
      });
  }

  /**
   * GET ALL USERS
   */
  static async getAllUsers() {
    return await this.fetchApi(this.getRoutes().GET_USERS);
  }
}
