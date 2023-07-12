export function filterDuplicates(arr) {
  return arr.filter(
    (item, index) => arr.findIndex((i) => i === item) === index
  );
}

export const baseUrl = "https://b3df-2a0b-6204-31eb-cb00-c4be-47ce-b5b6-a0de.ngrok-free.app/";

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
