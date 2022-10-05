import React, { useEffect, useState } from 'react';
import ReactGlobe from 'react-globe';
import { getProximities } from '../api/proximity';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

function Globe() {
  const defaultLat = 29.7604;
  const defaultLon = -95.3698;
  const defaultLimit = 100;
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!markers.length) {
      getProximities({
        lat: defaultLat,
        lon: defaultLon,
        limit: defaultLimit,
        callback: setMarkers,
      });
    }
  }, [markers, defaultLat, defaultLon, defaultLimit]);

  const options = {
    markerTooltipRenderer: (marker) => `${marker.coordinates} - ${marker.name}`,
  };

  return (
    markers.length && (
      <ReactGlobe
        height="100vh"
        width="100vw"
        markers={markers}
        options={options}
        initialCoordinates={[defaultLat, defaultLon]}
      />
    )
  );
}

export default Globe;
