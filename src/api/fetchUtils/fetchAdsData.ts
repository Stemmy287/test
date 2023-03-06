import {adsApi, AdsDataResponseType} from "api/adsApi";

/**
 * receiving data from the server, handling an error in case of failure and changing the status of the application
 * @param page - data page number
 * @param state - current data
 * @param setState - function to save data to a state
 * @param setError - function to change error status
 * @param setIsInitialized - function to change status of the application
 */

export const fetchAdsData = async (
  page: number,
  state: AdsDataResponseType,
  setState: (state: AdsDataResponseType) => void,
  setError: (error: boolean) => void,
  setIsInitialized?: (isInitialized: boolean) => void
) => {

  try {
    const res = await adsApi.getAdsData(page)
    setState({
      ...res,
      items: [...state.items, ...res.items]
    })
  } catch (e) {
    setError(true)
  } finally {
      setIsInitialized && setIsInitialized(false)
  }

}