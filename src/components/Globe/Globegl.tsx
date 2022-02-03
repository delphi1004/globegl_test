import React, { useRef } from 'react'
import { GlobeContainer } from './Globegl.styles'
import Globe, { GlobeMethods } from 'react-globe.gl'
import { useSelector } from 'react-redux'
import {RootState} from '../../store'
import places from '../../data/places'

let LAT_OFFSET = -2

const Globegl = () => {
  const isCaseVisible = useSelector((state: RootState) => state.systemState.isCaseVisible)
  const globRef = useRef<GlobeMethods>()

  const globeClickHandler = (lat: any,lng: any) => {
    console.log('lat', lat)
    console.log('lng', lng)
    console.log('isCaseVisible', isCaseVisible)
    if(globRef.current){
      LAT_OFFSET = isCaseVisible ? -4:-2
      globRef.current.pointOfView({ lat: lat + LAT_OFFSET, lng: lng, altitude: 0.4 }, 4000)
    }
  }

  const labelClickHandler = (e:any, label:any,lat: any, lng: any) => {
    console.log('lat', lat)
    console.log('lng', lng)
    console.log('label', label)
    globeClickHandler(lat,lng)
  }

  return (
    <GlobeContainer>
      <Globe
        ref={globRef}
        onGlobeClick={({ lat, lng }) => globeClickHandler(lat, lng)}
        onLabelClick={(label,event,{ lat, lng }) => labelClickHandler(event,label, lat, lng)}
        globeImageUrl='//unpkg.com/three-globe/example/img/earth-day.jpg'
        labelsData={places}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.name}
        labelSize={(d: any) => 0.5 + d.size}
        labelDotRadius={(d: any) => 0.5 + d.size}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={2}
      />
    </GlobeContainer>
  )
}


export default Globegl
export { Globegl }