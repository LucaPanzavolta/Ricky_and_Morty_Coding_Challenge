const rickyAndMortyApiUrls = {
  baseUrl: "https://rickandmortyapi.com/api",
  get getAllCharacters() {
    return `${this.baseUrl}/character`;
  },
};

module.exports = {
  rickyAndMortyApiUrls,
};
