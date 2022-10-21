export const objectUtils = {
  fetchDataByPageNo({ pageNo = 1, limit = 10, data = [] }) {
    const allData = data;
    if (allData.length > 0) {
      let lastIndex = pageNo * limit;
      let firstIndex = lastIndex - limit;
      return allData.slice(firstIndex, lastIndex);
    }
    return allData;
  },
};
