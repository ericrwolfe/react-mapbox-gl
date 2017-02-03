// tslint:disable
export default `
  .mapboxgl-map {
      font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
      overflow: hidden;
      position: relative;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .mapboxgl-ctrl-top-left,
  .mapboxgl-ctrl-top-right,
  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right  { position:absolute; }
  .mapboxgl-ctrl-top-left      { top:0; left:0; }
  .mapboxgl-ctrl-top-right     { top:0; right:0; }
  .mapboxgl-ctrl-bottom-left   { bottom:0; left:0; }
  .mapboxgl-ctrl-bottom-right  { right:0; bottom:0; }

  .mapboxgl-ctrl { clear:both; }
  .mapboxgl-ctrl-top-left .mapboxgl-ctrl { margin:10px 0 0 10px; float:left; }
  .mapboxgl-ctrl-top-right .mapboxgl-ctrl{ margin:10px 10px 0 0; float:right; }
  .mapboxgl-ctrl-bottom-left .mapboxgl-ctrl { margin:0 0 10px 10px; float:left; }
  .mapboxgl-ctrl-bottom-right .mapboxgl-ctrl { margin:0 10px 10px 0; float:right; }

  .mapboxgl-ctrl-group {
      border-radius: 4px;
      -moz-box-shadow: 0px 0px 2px rgba(0,0,0,0.1);
      -webkit-box-shadow: 0px 0px 2px rgba(0,0,0,0.1);
      box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.1);
      overflow: hidden;
      background: #fff;
  }
  .mapboxgl-ctrl-group > button {
      width: 30px;
      height: 30px;
      display: block;
      padding: 0;
      outline: none;
      border: none;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      background-color: rgba(0,0,0,0);
      cursor: pointer;
  }
  .mapboxgl-ctrl > button::-moz-focus-inner {
      border: 0;
      padding: 0;
  }
  .mapboxgl-ctrl > button:last-child {
      border-bottom: 0;
  }
  .mapboxgl-ctrl > button:hover {
      background-color: rgba(0,0,0,0.05);
  }
  .mapboxgl-ctrl-icon,
  .mapboxgl-ctrl-icon > div.arrow {
      speak: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out {
      padding: 5px;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27m%207%2C9%20c%20-0.554%2C0%20-1%2C0.446%20-1%2C1%200%2C0.554%200.446%2C1%201%2C1%20l%206%2C0%20c%200.554%2C0%201%2C-0.446%201%2C-1%200%2C-0.554%20-0.446%2C-1%20-1%2C-1%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A");
  }
  .mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in  {
      padding: 5px;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27M%2010%206%20C%209.446%206%209%206.4459904%209%207%20L%209%209%20L%207%209%20C%206.446%209%206%209.446%206%2010%20C%206%2010.554%206.446%2011%207%2011%20L%209%2011%20L%209%2013%20C%209%2013.55401%209.446%2014%2010%2014%20C%2010.554%2014%2011%2013.55401%2011%2013%20L%2011%2011%20L%2013%2011%20C%2013.554%2011%2014%2010.554%2014%2010%20C%2014%209.446%2013.554%209%2013%209%20L%2011%209%20L%2011%207%20C%2011%206.4459904%2010.554%206%2010%206%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A");
  }
  .mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate  {
      padding: 5px;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27M13%2C7%20L10.5%2C11.75%20L10.25%2C10%20z%20M13.888%2C6.112%20C13.615%2C5.84%2013.382%2C6.076%2012.5%2C6.5%20C10.14%2C7.634%206%2C10%206%2C10%20L9.5%2C10.5%20L10%2C14%20C10%2C14%2012.366%2C9.86%2013.5%2C7.5%20C13.924%2C6.617%2014.16%2C6.385%2013.888%2C6.112%27%2F%3E%3C%2Fsvg%3E");
  }

  .mapboxgl-ctrl-icon.mapboxgl-ctrl-compass > div.arrow {
      width: 20px;
      height: 20px;
      margin: 5px;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2020%2020%27%3E%0A%09%3Cpolygon%20fill%3D%27%23333333%27%20points%3D%276%2C9%2010%2C1%2014%2C9%27%2F%3E%0A%09%3Cpolygon%20fill%3D%27%23CCCCCC%27%20points%3D%276%2C11%2010%2C19%2014%2C11%20%27%2F%3E%0A%3C%2Fsvg%3E");
      background-repeat: no-repeat;
  }

  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
      padding: 0 5px;
      background-color: rgba(255,255,255,0.5);
      margin: 0;
  }
  .mapboxgl-ctrl-attrib a {
      color: rgba(0,0,0,0.75);
      text-decoration: none;
  }
  .mapboxgl-ctrl-attrib a:hover {
      color: inherit;
      text-decoration: underline;
  }
  .mapboxgl-ctrl-attrib .mapbox-improve-map {
      font-weight: bold;
      margin-left: 2px;
  }

  .mapboxgl-marker {
      position: absolute;
      top: 0;
      left: 0;
      display: -webkit-flex;
      display: flex;
      will-change: transform;
  }

  .mapboxgl-popup {
      position: absolute;
      top: 0;
      left: 0;
      display: -webkit-flex;
      display: flex;
      will-change: transform;
      pointer-events: none;
  }
  .mapboxgl-popup-anchor-center,
  .mapboxgl-popup-anchor-top,
  .mapboxgl-popup-anchor-top-left,
  .mapboxgl-popup-anchor-top-right {
      -webkit-flex-direction: column;
      flex-direction: column;
  }
  .mapboxgl-popup-anchor-bottom,
  .mapboxgl-popup-anchor-bottom-left,
  .mapboxgl-popup-anchor-bottom-right {
      -webkit-flex-direction: column-reverse;
      flex-direction: column-reverse;
  }
  .mapboxgl-popup-anchor-left {
      -webkit-flex-direction: row;
      flex-direction: row;
  }
  .mapboxgl-popup-anchor-right {
      -webkit-flex-direction: row-reverse;
      flex-direction: row-reverse;
  }
  .mapboxgl-popup-tip {
      width: 0;
      height: 0;
      border: 10px solid transparent;
      z-index: 1;
  }
  .mapboxgl-popup-anchor-center .mapboxgl-popup-tip {
      display: none;
  }
  .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
      -webkit-align-self: center;
      align-self: center;
      border-top: none;
      border-bottom-color: #fff;
  }
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {
      -webkit-align-self: flex-start;
      align-self: flex-start;
      border-top: none;
      border-left: none;
      border-bottom-color: #fff;
  }
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
      -webkit-align-self: flex-end;
      align-self: flex-end;
      border-top: none;
      border-right: none;
      border-bottom-color: #fff;
  }
  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
      -webkit-align-self: center;
      align-self: center;
      border-bottom: none;
      border-top-color: #fff;
  }
  .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {
      -webkit-align-self: flex-start;
      align-self: flex-start;
      border-bottom: none;
      border-left: none;
      border-top-color: #fff;
  }
  .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
      -webkit-align-self: flex-end;
      align-self: flex-end;
      border-bottom: none;
      border-right: none;
      border-top-color: #fff;
  }
  .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
      -webkit-align-self: center;
      align-self: center;
      border-left: none;
      border-right-color: #fff;
  }
  .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
      -webkit-align-self: center;
      align-self: center;
      border-right: none;
      border-left-color: #fff;
  }
  .mapboxgl-popup-close-button {
      position: absolute;
      right: 0;
      top: 0;
      border: none;
      border-radius: 0 3px 0 0;
      cursor: pointer;
      background-color: rgba(0,0,0,0);
  }
  .mapboxgl-popup-close-button:hover {
      background-color: rgba(0,0,0,0.05);
  }
  .mapboxgl-popup-content {
      position: relative;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.10);
      padding: 10px 10px 15px;
      pointer-events: auto;
  }
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {
      border-top-left-radius: 0;
  }
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {
      border-top-right-radius: 0;
  }
  .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {
      border-bottom-left-radius: 0;
  }
  .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {
      border-bottom-right-radius: 0;
  }

  .mapboxgl-boxzoom {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      background: #fff;
      border: 2px dotted #202020;
      opacity: 0.5;
  }
  @media print {
      .mapbox-improve-map {
          display:none;
      }
  }
` as string;
