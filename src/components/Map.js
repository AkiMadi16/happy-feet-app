import { useQuery } from '@tanstack/react-query'

function Map() {
  const { isLoading, data } = useQuery(['quoteMapData'], () =>
  fetch('http://dev.virtualearth.net/REST/v1/Locations?addressLine=${baker.address}&key={BingMapsKey}').then(res =>
    res.json()
  )
)

  if (isLoading) {
    return(<div className='loading'>Loading....</div>)
  }
}



export default Map;