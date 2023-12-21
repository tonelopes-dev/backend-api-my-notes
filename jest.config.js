module.exports = {
  bail: true, // se um test falhar o test para de rodar
  coverageProvider: "v8",

  //Informar qual é o padrão dos arquivos de test
  //dentro de qualquer pasta, qualquer arquivo que tenha spec.js
  //<rootDir>/src/ especionar apenas o que estiver dentro do src
  //ignorando a pasta node_modules
  testMatch: ["**/*.spec.js"],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
};
