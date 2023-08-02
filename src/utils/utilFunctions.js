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
        checkerArr.includes(item.adNetwork) &&
        languageChecker.includes(item.language)
      );
    } else if (checkerArr.length > 0 && languageChecker.length === 0) {
      return checkerArr.includes(item.adNetwork);
    } else if (checkerArr.length === 0 && languageChecker.length > 0) {
      return languageChecker.includes(item.language);
    }

    return false;
  });

  return adFilter;
}
// export function filterWithLanguage(arr, checkerArr) {
//   return arr.filter((item) => checkerArr.includes(item.language));
// }

export const getAdNetworks = (arr) => {
  const adNetworks = arr.map((item) => item.adNetwork);
  return filterDuplicates(adNetworks);
};

export const getLanguages = (arr) => {
  const language = arr.map((item) => item.language);
  return filterDuplicates(language);
};
