const {
  REACT_APP_BACKEND_SERVER_HOST: backendHost,
  REACT_APP_BACKEND_SERVER_PORT: backendPort,
} = process.env;

const apiUrls = {
  baseUrl: `http://${backendHost}:${backendPort}`,

  // AUTH URLS
  get signUp() { return `${this.baseUrl}/signup`; },
  get signIn() { return `${this.baseUrl}/signin`; },

  // CHARACTERS URLS
  get getAllCharacters() {
    return `${this.baseUrl}/characters`;
  },
  get favouriteCharacter() {
    return `${this.baseUrl}/favouriteCharacter`;
  },
};

export default apiUrls;
