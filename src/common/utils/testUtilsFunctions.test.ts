import {dateConverter} from "common/utils/dateConverter";
import {generationArray} from "common/utils/generationArray";

test('parse date', () => {
  const date = dateConverter('2015-10-24T07:23:53 -05:00')
  expect(date).toBe('24.10.2015, 15.23')
})

test('get array', () => {
  const array = generationArray(8)
  expect(array.length).toBe(8)
  expect(array).toEqual([0,1,2,3,4,5,6,7])
})