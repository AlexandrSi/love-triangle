/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var i=0, j=0;

  for (i=0;i<=preferences.length;i++) {
      if ((i+1==preferences[preferences[preferences[i]-1]-1]&preferences[i]!=preferences[preferences[preferences[i]-1]-1])){
            j++;
      }
  }
  return j/3;
};
