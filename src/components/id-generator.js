var latestId = 0;
var latestByType = {};
var latestById = {};
export const getFormItemId = function (type, id) {
  if (id !== undefined) {
    if (latestById[id] === undefined) {
      latestById[id] = 0;
      return id;
    }
    latestById[id]++;
    return id + "-" + latestById[id];
  }
  if (type !== undefined) {
    if (latestByType[type] === undefined) {
      latestByType[type] = 0;
      return "form-id-" + type;
    }
    latestByType[type]++;
    return "form-id-" + type + "-" + latestByType[type];
  }
  latestId++;
  return "form-id-" + latestId;
};
