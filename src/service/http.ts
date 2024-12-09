class HTTPCountry {
  static async getCountryByName(name: string) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,currencies,flags,coatOfArms,car`)
      .then(async (data) => {
        return data.json();
      })
      .catch((e) => {
        throw e;
      });
  }

  static async getCountryName() {
    return fetch(`https://restcountries.com/v3.1/all?fields=name`)
      .then((data) => data.json())
      .catch((e) => {
        throw e;
      });
  }
}

export default HTTPCountry;
