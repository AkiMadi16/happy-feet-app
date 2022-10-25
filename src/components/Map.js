import { useQuery } from '@tanstack/react-query'

function Map() {
  const { isLoading, data } = useQuery(['quoteMapData'], () =>
  fetch('http://dev.virtualearth.net/REST/v1/Locations?countryRegion={countryRegion}&key={BingMapsKey}').then(res =>
    res.json()
  )
)

if (isLoading) {
  return(<div className='loading'>Loading....</div>)
}

}

export default Map;