import {adsApi, AdsItemType} from "api/adsApi";

/**
 * receiving item from the server, handling an error in case of failure and changing the status of the application
 * @param id - id of the item to get
 * @param setAdsItem - function to save item to a state
 * @param setAdsItem - function to save item to a state
 * @param setError - function to change error status
 * @param setIsLoading - function to change status of the Loading
 */

export const fetchAdsItem = async (
  id: string,
  setAdsItem: (ads: AdsItemType) => void,
  setError: (error: boolean) => void,
  setIsLoading: (isLoading: boolean) => void
) => {

  try {
    const res = await adsApi.getAdsItem(id)
    setAdsItem(res)
  } catch (e) {
    setError(true)
  } finally {
    setIsLoading(false)
  }

}