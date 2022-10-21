export const convertData = {
  convertToNumber(data) {
    if (data && data !== "" && data > 0) {
      return parseInt(data.toString(), 10);
    }
    return 0;
  },
  convertToString(data) {
    if (data) {
      return data.toString();
    }
    return "";
  },
};
