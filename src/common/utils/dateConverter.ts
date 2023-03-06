/**
 * Returns a date in the format (xx.xx.xxxx, xx.xx)
 * @param date - date in the format - (xxxx-xx-xxTxx:xx:xx -xx:xx)
 * @example
 * initial (2015-10-24T07:23:53 -05:00);
 * return 24.10.2015, 15.23;
 */

export const dateConverter = (date: string) => {

  const localDate = new Date(date.replace(/ /g, ''))

  return localDate.toLocaleDateString() + ', ' + localDate.toLocaleTimeString().slice(0, 5).replace(/[^0-9]/gi, '.')

}