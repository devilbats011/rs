import store from '@/vuex/store'

// hantar value ke other application
export default async function travelmerchantPayload () {
  return await store.getters.fecthTravelMerchant.then((result) => {
    // eslint-disable-next-line prefer-const
    let payload = []
    const travelmerchantTemp = result.data.bundleItems
    // console.log(travelmerchantTemp, 'wefde')
    for (let index = 0; index < travelmerchantTemp.length; index++) {
      const onepack = JSON.parse(travelmerchantTemp[index])
      payload[index] = onepack
    }
    return payload
  }).catch((err) => console.warn(err))
}
