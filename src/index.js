import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

const webmap = new WebMap({
  portalItem: {
    id: "aa1d3f80270146208328cf66d022e09c"
  }
});

const view = new MapView({
  container: "viewDiv",
  map: webmap
});



// bonus - how many bookmarks in the webmap?
