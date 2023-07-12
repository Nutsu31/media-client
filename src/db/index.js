const {
  getRandomName,
  getRandomWebsite,
  getRandomCategory,
  // getRandomSubcategory,
  // getRandomDomainAuthority,
  // getRandomIndexedPages,
  // getRandomSearchTraffic,
  getRandomLanguage,
  getRandomAdNetwork,
} = require("./handlers/index");

function generateFakeData(elementSize = 4000) {
  const documents = [];

  for (let i = 0; i < elementSize; i++) {
    const document = {
      name: getRandomName(),
      website: getRandomWebsite(),
      category: getRandomCategory(),
      language: getRandomLanguage(),
      // subcategory: getRandomSubcategory(),
      // domainAuthority: getRandomDomainAuthority(),
      // indexedPages: getRandomIndexedPages(),
      // searchTraffic: getRandomSearchTraffic(),
      adNetwork: getRandomAdNetwork(),
    };

    documents.push(document);
  }

  return documents;
}

const res = generateFakeData(1000);

module.exports = res;
