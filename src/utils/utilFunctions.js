export function filterDuplicates(arr) {
  return arr.filter(
    (item, index) => arr.findIndex((i) => i === item) === index
  );
}
export const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51NVVMNJsEZJkoRsxRDNQDBb26I5FglOzaEZNenb4094ZXlmO4gFJYGMRVZOsrSL0KomTA242yuia7ImrfapOa7590001lgHJDU";

// export const baseUrl = "https://serpsupport-d0fb33a56e3d.herokuapp.com/";
export const baseUrl = "http://localhost:4000/";

export const threeMonth = (timeNow) => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 3);

  const timeExpired = currentDate - timeNow;
  console.log(timeExpired);
  return timeExpired;
};

export function filterWithCheckbox(arr, checkerArr, languageChecker) {
  const adFilter = arr.filter((item) => {
    if (checkerArr.length > 0 && languageChecker.length > 0) {
      return (
        checkerArr.includes(item.AdNetwork) &&
        languageChecker.includes(item.Language)
      );
    } else if (checkerArr.length > 0 && languageChecker.length === 0) {
      return checkerArr.includes(item.AdNetwork);
    } else if (checkerArr.length === 0 && languageChecker.length > 0) {
      return languageChecker.includes(item.Language);
    }

    return false;
  });

  return adFilter;
}

export const getAdNetworks = (arr) => {
  const adNetworks = arr.map((item) => item.AdNetwork);
  return filterDuplicates(adNetworks);
};

export const getLanguages = (arr) => {
  const language = arr.map((item) => item.Language);
  return filterDuplicates(language);
};

const rand = () => {
  return Math.floor(Math.random() * 100000);
};
export const randomToken = () => {
  return rand() + rand() + rand();
};
