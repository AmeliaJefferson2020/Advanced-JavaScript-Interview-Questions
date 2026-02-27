/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */


//SOLUTION 1 BRUTE FORCE


//const stringifyId = (arr) => {
  //  const idArray = arr.map(obj => obj.id);
    //const uniqueArray = [];
    //let idString = '';

    //for (let id of idArray) {
      //  if (!uniqueArray.includes(id)) {
        //    uniqueArray.push(id);
        //}
    //}

    //for (let i = 0; i <uniqueArray.length; ++i) {
      //  if (i !== uniqueArray.length - 1) {
        //    idString += `${uniqueArray[i]}, `;
        //}
        //else {
          //  idString += uniqueArray[i];
        //}
    //}

    //return idString;
//};



//SOLUTION 2 TOP TECH


const stringifyId = (arr) => {
    const idArray = arr.map((obj) => obj.id);
    const uniqueArray = [...new Set(idArray)];
    
    return uniqueArray.join(', ');
};

module.exports = stringifyId;
