const faker = require("faker");

// const getRandomAge = () => {
//   return faker.random.number({ min: 1, max: 99 });
// };

const getRandomWebsite = () => {
  return faker.internet.domainName();
};

const getRandomCategory = () => {
  return faker.random.arrayElement(["Health", "Technology", "Finance", ""]);
};
const getRandomLanguage = () => {
  return faker.random.arrayElement(["English", "Spain", "France"]);
};

const getRandomName = () => {
  return faker.company.companyName();
};

// const getRandomSubcategory = () => {
//   return faker.random.arrayElement(["Hormone Therapy", "Fitness", "Investing"]);
// };

// const getRandomDomainAuthority = () => {
//   return faker.random.number({ min: 1, max: 100 });
// };

// const getRandomIndexedPages = () => {
//   return faker.random.number({ min: 0, max: 1000 });
// };

// const getRandomSearchTraffic = () => {
//   return faker.random.number({ min: 0, max: 50000 });
// };

const getRandomAdNetwork = () => {
  return faker.random.arrayElement([
    "Google AdSense",
    "Media.net",
    "Amazon Advertising",
    "Youtube Media",
    "Google Media",
    "Facebook Ads",
    "Instagram Ads",
    "Bing",
  ]);
};

module.exports = {
  getRandomName,
  getRandomWebsite,
  getRandomCategory,
  getRandomLanguage,
  // getRandomSubcategory,
  // getRandomDomainAuthority,
  // getRandomIndexedPages,
  // getRandomSearchTraffic,
  getRandomAdNetwork,
};
