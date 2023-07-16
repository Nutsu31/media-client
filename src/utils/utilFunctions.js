export function filterDuplicates(arr) {
  return arr.filter(
    (item, index) => arr.findIndex((i) => i === item) === index
  );
}

export const baseUrl = "http://localhost:4000/";

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
