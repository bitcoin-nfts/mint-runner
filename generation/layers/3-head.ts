export async function getHead(index = 0) {
  const svgOpenTag = `<g id="Head">`;
  const svgCloseTag = `</g>`;

  const headOptions = [
    `<path d="M1655.62,485.77c0,201.68,163.49,365.18,365.18,365.18S2386,687.45,2386,485.77" transform="translate(-1516.64 -12.28)" style="fill:#f5b759" />
  <path d="M1678.44,485.77c0,189.08,153.28,342.35,342.36,342.35s342.35-153.27,342.35-342.35" transform="translate(-1516.64 -12.28)" style="fill:#eddfa1" />
  <path d="M1724.09,485.77c0,163.87,132.84,296.71,296.71,296.71s296.7-132.84,296.7-296.71" transform="translate(-1516.64 -12.28)" style="fill:#e28e26" />
  <polygon points="505.95 770.19 502.36 770.19 502.36 494.52 800.86 494.52 800.86 498.11 505.95 498.11 505.95 770.19" style="fill:#eddfa1" />
  <polygon points="708.37 680.24 496.43 491.85 778.6 585.9 777.47 589.3 511.87 500.78 710.75 677.56 708.37 680.24" style="fill:#eddfa1" />
  <rect x="2076.06" y="496.24" width="3.59" height="275.78" transform="translate(-1592.8 904.4) rotate(-24.44)" style="fill:#eddfa1" />
  <polygon points="505.95 770.19 502.36 770.19 502.36 498.11 207.45 498.11 207.45 494.52 505.95 494.52 505.95 770.19" style="fill:#eddfa1" />
  <polygon points="299.93 680.24 297.55 677.56 496.43 500.78 230.84 589.3 229.71 585.9 511.87 491.85 299.93 680.24" style="fill:#eddfa1" />
  <rect x="1825.85" y="632.33" width="275.77" height="3.59" transform="translate(-943.28 2146.71) rotate(-65.54)" style="fill:#eddfa1" />
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2192,601.68a13.21,13.21,0,1,1,13.21-13.2A13.21,13.21,0,0,1,2192,601.68Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,2192,578.86Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2169.15,578.86a13.21,13.21,0,1,1,13.2-13.21A13.23,13.23,0,0,1,2169.15,578.86Zm0-22.82a9.62,9.62,0,1,0,9.62,9.61A9.62,9.62,0,0,0,2169.15,556Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2271.85,578.86a24.62,24.62,0,1,1,24.62-24.62A24.64,24.64,0,0,1,2271.85,578.86Zm0-45.65a21,21,0,1,0,21,21A21.06,21.06,0,0,0,2271.85,533.21Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2214.8,533.21A13.21,13.21,0,1,1,2228,520,13.22,13.22,0,0,1,2214.8,533.21Zm0-22.82a9.62,9.62,0,1,0,9.61,9.62A9.62,9.62,0,0,0,2214.8,510.39Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1998,738.62A24.62,24.62,0,1,1,2022.59,714,24.64,24.64,0,0,1,1998,738.62Zm0-45.64a21,21,0,1,0,21,21A21,21,0,0,0,1998,693Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1963.74,693a13.21,13.21,0,1,1,13.2-13.21A13.22,13.22,0,0,1,1963.74,693Zm0-22.83a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,1963.74,670.15Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1895.27,601.68a13.21,13.21,0,1,1,13.2-13.2A13.22,13.22,0,0,1,1895.27,601.68Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.62,9.62,0,0,0,1895.27,578.86Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1826.8,556a13.21,13.21,0,1,1,13.2-13.21A13.22,13.22,0,0,1,1826.8,556Zm0-22.83a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,1826.8,533.21Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1758.33,556a13.21,13.21,0,1,1,13.2-13.21A13.22,13.22,0,0,1,1758.33,556Zm0-22.83a9.62,9.62,0,1,0,9.61,9.62A9.63,9.63,0,0,0,1758.33,533.21Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1792.56,647.33a24.62,24.62,0,1,1,24.62-24.62A24.65,24.65,0,0,1,1792.56,647.33Zm0-45.65a21,21,0,1,0,21,21A21.06,21.06,0,0,0,1792.56,601.68Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1826.8,670.15A13.21,13.21,0,1,1,1840,657,13.22,13.22,0,0,1,1826.8,670.15Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.62,9.62,0,0,0,1826.8,647.33Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2123.5,670.15a13.21,13.21,0,1,1,13.21-13.2A13.21,13.21,0,0,1,2123.5,670.15Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,2123.5,647.33Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2192,715.8a13.21,13.21,0,1,1,13.21-13.2A13.21,13.21,0,0,1,2192,715.8Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,2192,693Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2134.91,738.62A24.62,24.62,0,1,1,2159.53,714,24.64,24.64,0,0,1,2134.91,738.62Zm0-45.64a21,21,0,1,0,21,21A21.06,21.06,0,0,0,2134.91,693Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2237.62,647.33a13.21,13.21,0,1,1,13.2-13.2A13.22,13.22,0,0,1,2237.62,647.33Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.62,9.62,0,0,0,2237.62,624.51Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1986.56,578.86a13.21,13.21,0,1,1,13.2-13.21A13.22,13.22,0,0,1,1986.56,578.86Zm0-22.82a9.62,9.62,0,1,0,9.62,9.61A9.63,9.63,0,0,0,1986.56,556Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1940.91,533.21a13.21,13.21,0,1,1,13.21-13.2A13.21,13.21,0,0,1,1940.91,533.21Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,1940.91,510.39Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2100.68,556a13.21,13.21,0,1,1,13.2-13.21A13.23,13.23,0,0,1,2100.68,556Zm0-22.83a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,2100.68,533.21Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2077.85,601.68a13.21,13.21,0,1,1,13.21-13.2A13.21,13.21,0,0,1,2077.85,601.68Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.62,9.62,0,0,0,2077.85,578.86Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2009.38,652.06a17.94,17.94,0,1,1,17.94-17.93A18,18,0,0,1,2009.38,652.06Zm0-32.28a14.35,14.35,0,1,0,14.35,14.35A14.35,14.35,0,0,0,2009.38,619.78Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2055,715.8a13.21,13.21,0,1,1,13.21-13.2A13.21,13.21,0,0,1,2055,715.8Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,2055,693Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2077.85,766.17a17.93,17.93,0,1,1,17.94-17.93A18,18,0,0,1,2077.85,766.17Zm0-32.27a14.35,14.35,0,1,0,14.35,14.34A14.35,14.35,0,0,0,2077.85,733.9Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1872.44,715.8a13.21,13.21,0,1,1,13.21-13.2A13.21,13.21,0,0,1,1872.44,715.8Zm0-22.82a9.62,9.62,0,1,0,9.62,9.62A9.63,9.63,0,0,0,1872.44,693Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <rect x="1655.62" y="485.77" width="730.35" height="22.82" transform="translate(2524.95 982.08) rotate(-180)" style="fill:#b0a5b5;opacity:0.52;mix-blend-mode:overlay" />
  <path d="M2386.88,502.87c0-201.68-163.5-365.18-365.18-365.18s-365.17,163.5-365.17,365.18" transform="translate(-1516.64 -12.28)" style="fill:#f5b759" />
  <path d="M2364.05,502.87c0-189.08-153.27-342.36-342.35-342.36s-342.35,153.28-342.35,342.36" transform="translate(-1516.64 -12.28)" style="fill:#eddfa1" />
  <path d="M2318.41,502.87c0-163.87-132.84-296.71-296.71-296.71S1725,339,1725,502.87" transform="translate(-1516.64 -12.28)" style="fill:#e28e26" />
  <polygon points="503.26 193.88 506.85 193.88 506.85 469.55 208.35 469.55 208.35 465.96 503.26 465.96 503.26 193.88" style="fill:#eddfa1" />
  <polygon points="300.84 283.83 512.78 472.22 230.61 378.17 231.75 374.76 497.34 463.29 298.46 286.51 300.84 283.83" style="fill:#eddfa1" />
  <rect x="1962.85" y="216.63" width="3.59" height="275.78" transform="translate(-1487.24 832.48) rotate(-24.44)" style="fill:#eddfa1" />
  <polygon points="503.26 193.88 506.85 193.88 506.85 465.96 801.76 465.96 801.76 469.55 503.26 469.55 503.26 193.88" style="fill:#eddfa1" />
  <polygon points="709.28 283.83 711.66 286.51 512.78 463.29 778.37 374.76 779.51 378.17 497.34 472.22 709.28 283.83" style="fill:#eddfa1" />
  <rect x="1940.87" y="352.72" width="275.77" height="3.59" transform="translate(-621.38 2087.58) rotate(-65.54)" style="fill:#eddfa1" />
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1850.53,387a13.2,13.2,0,1,1-13.21,13.2A13.21,13.21,0,0,1,1850.53,387Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.63,9.63,0,0,0,1850.53,409.78Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1873.35,409.78A13.21,13.21,0,1,1,1860.14,423,13.22,13.22,0,0,1,1873.35,409.78Zm0,22.82a9.62,9.62,0,1,0-9.62-9.61A9.63,9.63,0,0,0,1873.35,432.6Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1770.64,409.78A24.62,24.62,0,1,1,1746,434.4,24.64,24.64,0,0,1,1770.64,409.78Zm0,45.65a21,21,0,1,0-21-21A21.06,21.06,0,0,0,1770.64,455.43Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1827.7,455.43a13.2,13.2,0,1,1-13.2,13.2A13.22,13.22,0,0,1,1827.7,455.43Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.64,9.64,0,0,0,1827.7,478.25Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2044.53,250a24.62,24.62,0,1,1-24.62,24.62A24.65,24.65,0,0,1,2044.53,250Zm0,45.65a21,21,0,1,0-21-21A21,21,0,0,0,2044.53,295.66Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2078.76,295.66a13.21,13.21,0,1,1-13.21,13.21A13.22,13.22,0,0,1,2078.76,295.66Zm0,22.82a9.62,9.62,0,1,0-9.62-9.61A9.63,9.63,0,0,0,2078.76,318.48Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2147.23,387a13.2,13.2,0,1,1-13.21,13.2A13.21,13.21,0,0,1,2147.23,387Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.64,9.64,0,0,0,2147.23,409.78Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2215.7,432.6a13.21,13.21,0,1,1-13.21,13.21A13.22,13.22,0,0,1,2215.7,432.6Zm0,22.83a9.62,9.62,0,1,0-9.62-9.62A9.64,9.64,0,0,0,2215.7,455.43Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2284.17,432.6a13.21,13.21,0,1,1-13.2,13.21A13.22,13.22,0,0,1,2284.17,432.6Zm0,22.83a9.62,9.62,0,1,0-9.62-9.62A9.64,9.64,0,0,0,2284.17,455.43Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2249.94,341.31a24.62,24.62,0,1,1-24.62,24.62A24.64,24.64,0,0,1,2249.94,341.31Zm0,45.65a21,21,0,1,0-21-21A21.06,21.06,0,0,0,2249.94,387Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2215.7,318.48a13.21,13.21,0,1,1-13.21,13.21A13.22,13.22,0,0,1,2215.7,318.48Zm0,22.83a9.62,9.62,0,1,0-9.62-9.62A9.64,9.64,0,0,0,2215.7,341.31Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1919,318.48a13.21,13.21,0,1,1-13.21,13.21A13.22,13.22,0,0,1,1919,318.48Zm0,22.83a9.62,9.62,0,1,0-9.62-9.62A9.63,9.63,0,0,0,1919,341.31Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1850.53,272.84a13.21,13.21,0,1,1-13.21,13.2A13.21,13.21,0,0,1,1850.53,272.84Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.62,9.62,0,0,0,1850.53,295.66Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1907.58,250A24.62,24.62,0,1,1,1883,274.63,24.65,24.65,0,0,1,1907.58,250Zm0,45.65a21,21,0,1,0-21-21A21,21,0,0,0,1907.58,295.66Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1804.88,341.31a13.21,13.21,0,1,1-13.21,13.2A13.21,13.21,0,0,1,1804.88,341.31Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.63,9.63,0,0,0,1804.88,364.13Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2055.94,409.78A13.21,13.21,0,1,1,2042.73,423,13.22,13.22,0,0,1,2055.94,409.78Zm0,22.82a9.62,9.62,0,1,0-9.62-9.61A9.62,9.62,0,0,0,2055.94,432.6Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2101.58,455.43a13.2,13.2,0,1,1-13.2,13.2A13.22,13.22,0,0,1,2101.58,455.43Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.63,9.63,0,0,0,2101.58,478.25Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1941.82,432.6a13.21,13.21,0,1,1-13.21,13.21A13.22,13.22,0,0,1,1941.82,432.6Zm0,22.83a9.62,9.62,0,1,0-9.62-9.62A9.64,9.64,0,0,0,1941.82,455.43Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1964.64,387a13.2,13.2,0,1,1-13.2,13.2A13.22,13.22,0,0,1,1964.64,387Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.64,9.64,0,0,0,1964.64,409.78Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2033.11,336.58a17.93,17.93,0,1,1-17.93,17.93A18,18,0,0,1,2033.11,336.58Zm0,32.28a14.35,14.35,0,1,0-14.34-14.35A14.37,14.37,0,0,0,2033.11,368.86Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1987.47,272.84a13.21,13.21,0,1,1-13.21,13.2A13.21,13.21,0,0,1,1987.47,272.84Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.62,9.62,0,0,0,1987.47,295.66Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M1964.64,222.46a17.94,17.94,0,1,1-17.93,17.94A18,18,0,0,1,1964.64,222.46Zm0,32.28a14.35,14.35,0,1,0-14.34-14.34A14.36,14.36,0,0,0,1964.64,254.74Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <g style="opacity:0.52;mix-blend-mode:overlay">
    <path d="M2170.05,272.84a13.21,13.21,0,1,1-13.2,13.2A13.22,13.22,0,0,1,2170.05,272.84Zm0,22.82a9.62,9.62,0,1,0-9.62-9.62A9.62,9.62,0,0,0,2170.05,295.66Z" transform="translate(-1516.64 -12.28)" style="fill:#b0a5b5" />
  </g>
  <rect x="139.88" y="467.76" width="730.35" height="22.82" style="fill:#b0a5b5;opacity:0.52;mix-blend-mode:overlay" />`,
  ];

  const headSVG = `${svgOpenTag}${headOptions[index]}${svgCloseTag}`;

  return headSVG;
}
