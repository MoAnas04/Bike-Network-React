import React from "react";
import Spinner from "../spinner/spinner.component";
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Zoom,
  MarkersDirective,
  NavigationLine,
  MarkerDirective,
  Marker,
  Inject,
} from "@syncfusion/ej2-react-maps";

const Map = ({ markers }) => {
  return (
    <>
      {markers.length > 0 ? (
        <MapsComponent
          id="maps"
          zoomSettings={{
            enable: true,
            toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"],
            shouldZoomInitially: true,
          }}
          centerPosition={{ latitude: 29.394708, longitude: -94.954653 }}
        >
          <Inject services={[Marker, NavigationLine, Zoom]} />
          <LayersDirective>
            <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png">
              <MarkersDirective>
                <MarkerDirective
                  visible={true}
                  height={25}
                  width={15}
                  dataSource={markers}
                ></MarkerDirective>
              </MarkersDirective>
            </LayerDirective>
          </LayersDirective>
        </MapsComponent>
      ) : (
        <div>
          <Spinner />
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Map;
