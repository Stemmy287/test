/**
 * Returns an array with given number of elements
 * @param itemsCount - number of array elements
 * @example
 * initial (8);
 * return [0,1,2,3,4,5,6,7];
 */


export const generationArray = (itemsCount: number) => {

  const arr = []

  for (let i = 0; i < itemsCount; i++) {
    arr.push(i)
  }

  return arr
}