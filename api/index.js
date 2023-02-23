import axios from "axios";

const LOCAL_STORAGE_AUTH = 'auth';

export class Api {
  static path = '/';

  static routes = {
    GET_USERS: 'users',
    AUTH_LOGIN: 'auth/log-in',
    AUTH_REGISTER: 'auth/register',
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
   * @return {Object}
   */
  static getHeaders(params = {}) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    Object.values(params).forEach(([key, value]) => {
      headers[key] = value;
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

  /**
   * LOGIN USER
   *
   * @param {Object} credentials
   */
  static async loginUser(credentials) {
    if (this.isLoggedUser())
      return {
        statusCode: 500,
        message: 'Vous êtes déjà connecté',
      };
    return await this.fetchApi(
      this.getRoutes().AUTH_LOGIN,
      credentials,
      'POST'
    );
  }

  /**
   * LOGOUT USER
   *
   * @param {Object} credentials
   */
  static LogoutUser(setState = null) {
    if (!this.isLoggedUser()) {
      return {
        statusCode: 400,
        message: "Vous n'êtes pas connecté",
      };
    }

    this.unStoreUser();
    if (setState) setState(null);

    return {
      statusCode: 200,
      message: 'Vous avez été déconnecté',
    };
  }

  // AUTH

  /**
   * STORE USER
   *
   */
  static storeUser(credentials) {
    localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(credentials));
  }

  /**
   * UNSTORE USER
   *
   */
  static unStoreUser() {
    localStorage.removeItem(LOCAL_STORAGE_AUTH);
  }

  /**
   * EXIST LOGGED USER
   *
   */
  static isLoggedUser() {
    return localStorage.getItem(LOCAL_STORAGE_AUTH) ? true : false;
  }

  /**
   * GET CURRENT LOGGED USER
   *
   */
  static getLoggedUser() {
    if (!this.isLoggedUser()) return null;
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH));
    if (!local.user) return null;
    return local.user;
  }
  
  static postNewGame = async(data) =>{
    if (!this.isLoggedUser()) return null;
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH));
    console.log(local.token)
    const request = await axios.post('https://hp-api-iim.azurewebsites.net/matches/start' ,data,{
      headers: {
        'Authorization': "Bearer " +  local.token,
        'Content-Type' : "application/json"
      }
    })
  
    console.log(request)
  }
  
}
