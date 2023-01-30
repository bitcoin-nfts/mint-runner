import { getRandomIntInclusive } from "./common";

export async function getHead(test?: number) {
  const headOptions = [
    // HEAD 1
    `<polygon points="502.26 121.83 502.26 949.11 155.96 689.38 155.96 314.22 502.26 121.83" style="fill:#f96020" /><polygon points="502.7 121.72 502.7 948.99 849 689.27 849 314.11 502.7 121.72" style="fill:#df4624" />`,
    // HEAD 2
    `<path d="M507.72,158H428.61A204.76,204.76,0,0,0,247,268.29L100.88,549.2,326.59,810.56a239.35,239.35,0,0,0,181.13,82.9h0Z" transform="translate(0.28 0)" style="fill:#8e97c4" /><path d="M507.72,158h79.11A204.76,204.76,0,0,1,768.5,268.29L914.57,549.2,688.86,810.56a239.36,239.36,0,0,1-181.14,82.9h0Z" transform="translate(0.28 0)" style="fill:#4f4f8e" /><rect x="171" y="655.35" width="236.25" height="3.26" transform="translate(-379.6 396.87) rotate(-45)" style="fill:#b2bcdf" /><rect x="229.15" y="641.52" width="190.99" height="3.26" transform="translate(-359.41 417.93) rotate(-45)" style="fill:#b2bcdf" /><rect x="269.15" y="646.94" width="132.7" height="3.26" transform="translate(-360.07 427.19) rotate(-45)" style="fill:#b2bcdf" /><rect x="217.53" y="687.35" width="259.26" height="3.26" transform="translate(-385.23 447.27) rotate(-45)" style="fill:#b2bcdf" /><rect x="253.09" y="730.47" width="175.65" height="3.26" transform="translate(-417.55 455.49) rotate(-45)" style="fill:#b2bcdf" /><rect x="277.52" y="741.32" width="194.06" height="3.26" transform="translate(-415.37 482.45) rotate(-45)" style="fill:#b2bcdf" /><rect x="84.57" y="546.06" width="252.35" height="3.26" transform="translate(-325.28 309.44) rotate(-45)" style="fill:#b2bcdf" /><path d="M212.74,517.64l-2.35-2.27c6.4-6.62,62.69-64.8,67.15-67l1.47,2.91C275.72,453.05,237.57,491.94,212.74,517.64Z" transform="translate(0.28 0)" style="fill:#b2bcdf" /><rect x="213.42" y="449.52" width="83.61" height="3.26" transform="translate(-243.98 312.61) rotate(-45)" style="fill:#b2bcdf" /><rect x="122.25" y="452.23" width="180.25" height="3.26" transform="translate(-258.45 283.11) rotate(-45)" style="fill:#b2bcdf" /><rect x="210.94" y="396.64" width="59.83" height="3.26" transform="translate(-210.8 286.96) rotate(-45)" style="fill:#b2bcdf" /><rect x="723.29" y="538.59" width="3.26" height="236.25" transform="translate(-251.77 704.94) rotate(-45)" style="fill:#7272ae" /><rect x="687.76" y="547.39" width="3.26" height="190.99" transform="translate(-252.39 675.77) rotate(-45)" style="fill:#7272ae" /><rect x="676.91" y="581.96" width="3.26" height="132.7" transform="translate(-259.4 669.69) rotate(-45)" style="fill:#7272ae" /><rect x="665.25" y="559.08" width="3.26" height="259.26" transform="translate(-291.39 673.28) rotate(-45)" style="fill:#7272ae" /><rect x="671.49" y="644" width="3.26" height="175.65" transform="translate(-320.05 690.32) rotate(-45)" style="fill:#7272ae" /><rect x="637.86" y="645.65" width="3.26" height="194.06" transform="translate(-337.57 669.72) rotate(-45)" style="fill:#7272ae" /><rect x="801.66" y="421.25" width="3.26" height="252.35" transform="translate(-151.53 728.35) rotate(-45)" style="fill:#7272ae" /><path d="M801.3,517.37c-24.83-25.7-63-64.59-66.27-66.39l1.46-2.91c4.46,2.23,60.75,60.41,67.16,67Z" transform="translate(0.28 0)" style="fill:#7272ae" /><rect x="757.18" y="409.08" width="3.26" height="83.61" transform="translate(-96.29 668.63) rotate(-45)" style="fill:#7272ae" /><rect x="800.03" y="363.47" width="3.26" height="180.25" transform="translate(-85.66 699.72) rotate(-45)" style="fill:#7272ae" /><rect x="771.56" y="368.09" width="3.26" height="59.83" transform="translate(-54.69 663.3) rotate(-45)" style="fill:#7272ae" />`,
    // HEAD 3
    `<polygon points="119.96 384.95 119.96 639.01 509.96 892.03 509.96 384.95 119.96 384.95" style="fill:#4a2955" /><path d="M353.44,158.61h312.3a189,189,0,0,1,189,189V542.47a0,0,0,0,1,0,0H164.44a0,0,0,0,1,0,0V347.61a189,189,0,0,1,189-189Z" style="fill:#161f26" /><path d="M509.32,211.57V638.09H384.09l-203.49-132V362.32c0-83.26,104-150.75,232.36-150.75Z" transform="translate(0.28 0)" style="fill:#fa8cb2" /><polygon points="893.53 385.92 893.53 639.98 503.52 893 503.52 385.92 893.53 385.92" style="fill:#161f26" /><path d="M503.62,212.43V639H628.84l203.49-132V363.18c0-83.26-104-150.75-232.35-150.75Z" transform="translate(0.28 0)" style="fill:#f46461" />`,
    // HEAD 4
    `<path d="M509.28,149.06H431.83A200.45,200.45,0,0,0,254,257L111,532,332,787.85A234.27,234.27,0,0,0,509.28,869h0Z" transform="translate(-1.66 0)" style="fill:#df2d2c" /><path d="M509.28,149.06h77.44A200.45,200.45,0,0,1,764.55,257l143,275-221,255.84A234.27,234.27,0,0,1,509.28,869h0Z" transform="translate(-1.66 0)" style="fill:#c12e58" />`,
    // HEAD 5
    `<circle cx="500.93" cy="503.62" r="345.28" style="fill:#df2d2c" /><path d="M503.39,158.34c190.69,0,345.28,154.59,345.28,345.28S694.08,848.91,503.39,848.91" transform="translate(0.28)" style="fill:#c12e58" />`,
    // HEAD 6
    `<path d="M884.69,212.4V384a121,121,0,0,1-121,121H731L683.61,682.54A149.11,149.11,0,0,1,539.54,793.22H500.36V212.4" transform="translate(9.03 13)" style="fill:#172027" /><path d="M120,212.44V380a121,121,0,0,0,121,121h32.7l47.35,177.56A149.11,149.11,0,0,0,465.18,789.22h39.18V212.44" transform="translate(9.03 13)" style="fill:#542f5f" />`,
    // HEAD 7
    `<path d="M506.05,842.88H426.7l-328-506.19C60.51,277.78,102.79,200,173,200H506.05Z" transform="translate(-1.55 4)" style="fill:#ffa520" /><path d="M506,843h79.35l328-506.2c38.17-58.9-4.11-136.68-74.3-136.68H506Z" transform="translate(-1.55 4)" style="fill:#f96020" />`,
    // HEAD 8 - intense image embeds
    // TBD
    // HEAD 9
    `<polygon points="504.25 140.1 504.25 856.13 137.39 631.33 137.39 306.62 504.25 140.1" style="fill:#dbb9be" /><polygon points="504.71 140 504.71 856.03 871.57 631.23 871.57 306.52 504.71 140" style="fill:#bcafb1" />`,
    // HEAD 10
    `<path d="M500.1,140.7h0c187.52,0,348.53,152,348.53,339.53V716.86H496" transform="translate(9.03 13)" style="fill:#727fbd" /><path d="M513.51,140.45h-9C317,140.45,165,292.46,165,480V716.86H506.8" transform="translate(9.03 13)" style="fill:#aaaecc" /><path d="M506.8,844.21H606a294.75,294.75,0,0,0,242.6-127.35H506.8Z" transform="translate(9.03 13)" style="fill:#727fbd" /><path d="M506.8,844.21H407.58A294.75,294.75,0,0,1,165,716.86H506.8Z" transform="translate(9.03 13)" style="fill:#aaaecc" />`,
    // HEAD 11
    `<rect x="161.72" y="454.29" width="349.08" height="234.25" style="fill:#dbb9be" /><polyline points="530.98 682.74 114.17 682.74 276.26 844.83 530.98 844.83 530.98 682.74" style="fill:#d7bbbd" /><path d="M162.39,453.84H509.73V114.22h-9.36A153.88,153.88,0,0,0,378.62,174Z" transform="translate(0.34)" style="fill:#efe1da" /><rect x="492.49" y="145.09" width="4.29" height="262.44" style="fill:#dbb9be" /><rect x="418.82" y="229.92" width="4.29" height="177.7" transform="translate(-106.12 293.4) rotate(-34.38)" style="fill:#dbb9be" /><circle cx="440.6" cy="222.28" r="15.44" style="fill:#fbf5de" /><circle cx="409.72" cy="191.41" r="7.72" style="fill:#fbf5de" /><circle cx="425.16" cy="253.15" r="7.72" style="fill:#fbf5de" /><circle cx="363.41" cy="284.03" r="7.72" style="fill:#fbf5de" /><rect x="506.09" y="453.42" width="349.08" height="234.25" transform="translate(1361.6 1141.08) rotate(-180)" style="fill:#dbb9be" /><polyline points="486.25 682.08 903.06 682.08 740.97 844.17 486.25 844.17 486.25 682.08" style="fill:#d7bbbd" /><path d="M854.17,453.18H506.82V113.56h9.36a153.88,153.88,0,0,1,121.75,59.78Z" transform="translate(0.34)" style="fill:#efe1da" /><rect x="520.46" y="144.43" width="4.29" height="262.44" style="fill:#dbb9be" /><rect x="506.74" y="315.96" width="177.7" height="4.29" transform="translate(-2.93 630.02) rotate(-55.62)" style="fill:#dbb9be" /><circle cx="576.63" cy="221.62" r="15.44" style="fill:#fbf5de" /><circle cx="607.51" cy="190.75" r="7.72" style="fill:#fbf5de" /><circle cx="592.07" cy="252.5" r="7.72" style="fill:#fbf5de" /><circle cx="653.82" cy="283.37" r="7.72" style="fill:#fbf5de" />`,
    // HEAD 12 - lots of SVG code in this one
    `<path d="M164.72,490.82C164.72,683.66,317,840,504.85,840S845,683.66,845,490.82" transform="translate(0.28)" style="fill:#f5b659" /><path d="M186,490.82c0,180.79,142.76,327.34,318.87,327.34S823.71,671.61,823.71,490.82" transform="translate(0.28)" style="fill:#ecdea0" /><path d="M228.5,490.82c0,156.68,123.72,283.7,276.35,283.7s276.34-127,276.34-283.7" transform="translate(0.28)" style="fill:#e18d27" /><polygon points="506.79 774.52 503.45 774.52 503.45 510.93 781.47 510.93 781.47 514.36 506.79 514.36 506.79 774.52" style="fill:#ecdea0" /><polygon points="695.33 688.51 497.93 508.38 760.74 598.31 759.68 601.56 512.31 516.91 697.55 685.94 695.33 688.51" style="fill:#ecdea0" /><polygon points="609.89 753.4 503.6 513.35 506.64 511.94 612.93 751.98 609.89 753.4" style="fill:#ecdea0" /><polygon points="506.79 774.52 503.45 774.52 503.45 514.36 228.77 514.36 228.77 510.93 506.79 510.93 506.79 774.52" style="fill:#ecdea0" /><polygon points="314.91 688.51 312.69 685.94 497.93 516.91 250.56 601.56 249.5 598.31 512.31 508.38 314.91 688.51" style="fill:#ecdea0" /><polygon points="400.35 753.4 397.31 751.98 503.6 511.94 506.64 513.35 400.35 753.4" style="fill:#ecdea0" /><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M664.28,601.65A12.63,12.63,0,1,1,676.58,589,12.47,12.47,0,0,1,664.28,601.65Zm0-21.82a9.2,9.2,0,1,0,9,9.19A9.09,9.09,0,0,0,664.28,579.83Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M643,579.83a12.63,12.63,0,1,1,12.3-12.63A12.49,12.49,0,0,1,643,579.83ZM643,558a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,643,558Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M738.68,579.83c-12.64,0-22.93-10.56-22.93-23.54s10.29-23.54,22.93-23.54,22.92,10.56,22.92,23.54S751.32,579.83,738.68,579.83Zm0-43.65c-10.8,0-19.59,9-19.59,20.11s8.79,20.11,19.59,20.11,19.58-9,19.58-20.11S749.48,536.18,738.68,536.18Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M685.53,536.18a12.63,12.63,0,1,1,12.3-12.63A12.47,12.47,0,0,1,685.53,536.18Zm0-21.82a9.2,9.2,0,1,0,9,9.19A9.08,9.08,0,0,0,685.53,514.36Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M483.59,732.59c-12.64,0-22.93-10.56-22.93-23.54s10.29-23.54,22.93-23.54,22.93,10.56,22.93,23.54S496.23,732.59,483.59,732.59Zm0-43.65c-10.8,0-19.59,9-19.59,20.11s8.79,20.11,19.59,20.11,19.58-9,19.58-20.11S494.39,688.94,483.59,688.94Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M451.7,688.94A12.63,12.63,0,1,1,464,676.32,12.48,12.48,0,0,1,451.7,688.94Zm0-21.82a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,451.7,667.12Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M387.93,601.65A12.63,12.63,0,1,1,400.23,589,12.48,12.48,0,0,1,387.93,601.65Zm0-21.82a9.2,9.2,0,1,0,9,9.19A9.09,9.09,0,0,0,387.93,579.83Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M324.16,558a12.63,12.63,0,1,1,12.3-12.62A12.47,12.47,0,0,1,324.16,558Zm0-21.82a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,324.16,536.18Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M260.38,558a12.63,12.63,0,1,1,12.3-12.62A12.47,12.47,0,0,1,260.38,558Zm0-21.82a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,260.38,536.18Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M292.27,645.3c-12.64,0-22.93-10.56-22.93-23.54s10.29-23.54,22.93-23.54,22.93,10.56,22.93,23.54S304.91,645.3,292.27,645.3Zm0-43.65c-10.8,0-19.59,9-19.59,20.11s8.79,20.11,19.59,20.11,19.59-9,19.59-20.11S303.07,601.65,292.27,601.65Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M324.16,667.12a12.63,12.63,0,1,1,12.3-12.63A12.48,12.48,0,0,1,324.16,667.12Zm0-21.82a9.2,9.2,0,1,0,9,9.19A9.09,9.09,0,0,0,324.16,645.3Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M600.5,667.12a12.63,12.63,0,1,1,12.3-12.63A12.48,12.48,0,0,1,600.5,667.12Zm0-21.82a9.2,9.2,0,1,0,9,9.19A9.08,9.08,0,0,0,600.5,645.3Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M664.28,710.76a12.63,12.63,0,1,1,12.3-12.62A12.47,12.47,0,0,1,664.28,710.76Zm0-21.82a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,664.28,688.94Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M611.13,732.59c-12.64,0-22.92-10.56-22.92-23.54s10.28-23.54,22.92-23.54,22.93,10.56,22.93,23.54S623.77,732.59,611.13,732.59Zm0-43.65c-10.8,0-19.58,9-19.58,20.11s8.78,20.11,19.58,20.11,19.59-9,19.59-20.11S621.94,688.94,611.13,688.94Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M706.79,645.3a12.63,12.63,0,1,1,12.3-12.63A12.49,12.49,0,0,1,706.79,645.3Zm0-21.83a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,706.79,623.47Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M473,579.83a12.63,12.63,0,1,1,12.3-12.63A12.49,12.49,0,0,1,473,579.83ZM473,558a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,473,558Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M430.45,536.18a12.63,12.63,0,1,1,12.29-12.63A12.48,12.48,0,0,1,430.45,536.18Zm0-21.82a9.2,9.2,0,1,0,8.95,9.19A9.09,9.09,0,0,0,430.45,514.36Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M579.25,558a12.63,12.63,0,1,1,12.3-12.62A12.48,12.48,0,0,1,579.25,558Zm0-21.82a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,579.25,536.18Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M558,601.65A12.63,12.63,0,1,1,570.29,589,12.48,12.48,0,0,1,558,601.65Zm0-21.82a9.2,9.2,0,1,0,9,9.19A9.09,9.09,0,0,0,558,579.83Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M494.22,649.82a17.15,17.15,0,1,1,16.7-17.15A17,17,0,0,1,494.22,649.82Zm0-30.87a13.72,13.72,0,1,0,13.36,13.72A13.56,13.56,0,0,0,494.22,619Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M536.73,710.76A12.63,12.63,0,1,1,549,698.14,12.48,12.48,0,0,1,536.73,710.76Zm0-21.82a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,536.73,688.94Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M558,758.93a17.15,17.15,0,1,1,16.7-17.15A16.95,16.95,0,0,1,558,758.93Zm0-30.86a13.72,13.72,0,1,0,13.36,13.71A13.55,13.55,0,0,0,558,728.07Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M366.67,710.76A12.63,12.63,0,1,1,379,698.14,12.48,12.48,0,0,1,366.67,710.76Zm0-21.82a9.2,9.2,0,1,0,9,9.2A9.09,9.09,0,0,0,366.67,688.94Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><rect x="164.72" y="490.82" width="680.24" height="21.82" transform="translate(1009.97 1003.46) rotate(-180)" style="fill:#aea4b3;opacity:0.52;mix-blend-mode:overlay" /><path d="M845.81,507.17C845.81,314.33,693.53,158,505.69,158S165.57,314.33,165.57,507.17" transform="translate(0.28)" style="fill:#f5b659" /><path d="M824.55,507.17c0-180.79-142.76-327.35-318.86-327.35S186.82,326.38,186.82,507.17" transform="translate(0.28)" style="fill:#ecdea0" /><path d="M782,507.17c0-156.69-123.73-283.7-276.35-283.7s-276.35,127-276.35,283.7" transform="translate(0.28)" style="fill:#e18d27" /><polygon points="504.29 223.47 507.63 223.47 507.63 487.06 229.62 487.06 229.62 483.63 504.29 483.63 504.29 223.47" style="fill:#ecdea0" /><polygon points="315.76 309.48 513.15 489.61 250.35 399.68 251.4 396.43 498.77 481.07 313.54 312.04 315.76 309.48" style="fill:#ecdea0" /><polygon points="401.19 244.58 507.49 484.63 504.44 486.05 398.15 246 401.19 244.58" style="fill:#ecdea0" /><polygon points="504.29 223.47 507.63 223.47 507.63 483.63 782.31 483.63 782.31 487.06 504.29 487.06 504.29 223.47" style="fill:#ecdea0" /><polygon points="696.17 309.48 698.39 312.04 513.15 481.07 760.53 396.43 761.58 399.68 498.77 489.61 696.17 309.48" style="fill:#ecdea0" /><polygon points="610.73 244.58 613.77 246 507.49 486.05 504.44 484.63 610.73 244.58" style="fill:#ecdea0" /><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M346.26,396.34A12.63,12.63,0,1,1,334,409,12.48,12.48,0,0,1,346.26,396.34Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,346.26,418.16Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M367.51,418.16a12.63,12.63,0,1,1-12.29,12.63A12.48,12.48,0,0,1,367.51,418.16Zm0,21.82a9.2,9.2,0,1,0-8.95-9.19A9.08,9.08,0,0,0,367.51,440Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M271.85,418.16c12.65,0,22.93,10.56,22.93,23.54s-10.28,23.54-22.93,23.54-22.92-10.56-22.92-23.54S259.21,418.16,271.85,418.16Zm0,43.65c10.81,0,19.59-9,19.59-20.11s-8.78-20.11-19.59-20.11-19.58,9-19.58,20.11S261.05,461.81,271.85,461.81Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M325,461.81a12.63,12.63,0,1,1-12.3,12.62A12.48,12.48,0,0,1,325,461.81Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,325,483.63Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M527,265.4c12.64,0,22.92,10.56,22.92,23.54S539.59,312.48,527,312.48,504,301.92,504,288.94,514.3,265.4,527,265.4Zm0,43.65c10.8,0,19.58-9,19.58-20.11s-8.78-20.11-19.58-20.11-19.59,9-19.59,20.11S516.15,309.05,527,309.05Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M558.83,309.05a12.63,12.63,0,1,1-12.3,12.62A12.47,12.47,0,0,1,558.83,309.05Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,558.83,330.87Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M622.61,396.34A12.63,12.63,0,1,1,610.31,409,12.47,12.47,0,0,1,622.61,396.34Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,622.61,418.16Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M686.38,440a12.63,12.63,0,1,1-12.3,12.63A12.49,12.49,0,0,1,686.38,440Zm0,21.83a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,686.38,461.81Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M750.15,440a12.63,12.63,0,1,1-12.3,12.63A12.49,12.49,0,0,1,750.15,440Zm0,21.83a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,750.15,461.81Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M718.26,352.69c12.65,0,22.93,10.56,22.93,23.54s-10.28,23.54-22.93,23.54-22.92-10.56-22.92-23.54S705.62,352.69,718.26,352.69Zm0,43.65c10.81,0,19.59-9,19.59-20.11s-8.78-20.11-19.59-20.11-19.58,9-19.58,20.11S707.46,396.34,718.26,396.34Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M686.38,330.87a12.63,12.63,0,1,1-12.3,12.62A12.48,12.48,0,0,1,686.38,330.87Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,686.38,352.69Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M410,330.87a12.63,12.63,0,1,1-12.3,12.62A12.48,12.48,0,0,1,410,330.87Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,410,352.69Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M346.26,287.22A12.63,12.63,0,1,1,334,299.85,12.49,12.49,0,0,1,346.26,287.22Zm0,21.83a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,346.26,309.05Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M399.4,265.4c12.64,0,22.93,10.56,22.93,23.54S412,312.48,399.4,312.48s-22.93-10.56-22.93-23.54S386.76,265.4,399.4,265.4Zm0,43.65c10.8,0,19.59-9,19.59-20.11s-8.79-20.11-19.59-20.11-19.59,9-19.59,20.11S388.6,309.05,399.4,309.05Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M303.74,352.69a12.63,12.63,0,1,1-12.3,12.63A12.48,12.48,0,0,1,303.74,352.69Zm0,21.82a9.2,9.2,0,1,0-9-9.19A9.09,9.09,0,0,0,303.74,374.51Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M537.58,418.16a12.63,12.63,0,1,1-12.3,12.63A12.47,12.47,0,0,1,537.58,418.16Zm0,21.82a9.2,9.2,0,1,0-9-9.19A9.08,9.08,0,0,0,537.58,440Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M580.09,461.81a12.63,12.63,0,1,1-12.3,12.62A12.48,12.48,0,0,1,580.09,461.81Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,580.09,483.63Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M431.29,440A12.63,12.63,0,1,1,419,452.61,12.49,12.49,0,0,1,431.29,440Zm0,21.83a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,431.29,461.81Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M452.54,396.34A12.63,12.63,0,1,1,440.25,409,12.47,12.47,0,0,1,452.54,396.34Zm0,21.82a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,452.54,418.16Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M516.32,348.17a17.15,17.15,0,1,1-16.7,17.15A16.95,16.95,0,0,1,516.32,348.17Zm0,30.86A13.72,13.72,0,1,0,503,365.32,13.55,13.55,0,0,0,516.32,379Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M473.8,287.22a12.63,12.63,0,1,1-12.3,12.63A12.49,12.49,0,0,1,473.8,287.22Zm0,21.83a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,473.8,309.05Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M452.54,239.06a17.15,17.15,0,1,1-16.7,17.14A17,17,0,0,1,452.54,239.06Zm0,30.86a13.72,13.72,0,1,0-13.36-13.72A13.56,13.56,0,0,0,452.54,269.92Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><g style="opacity:0.52;mix-blend-mode:overlay"><path d="M643.86,287.22a12.63,12.63,0,1,1-12.3,12.63A12.49,12.49,0,0,1,643.86,287.22Zm0,21.83a9.2,9.2,0,1,0-9-9.2A9.09,9.09,0,0,0,643.86,309.05Z" transform="translate(0.28)" style="fill:#aea4b3" /></g><rect x="165.84" y="485.34" width="680.24" height="21.82" style="fill:#aea4b3;opacity:0.52;mix-blend-mode:overlay" />`,
  ];

  const index = test ? test : getRandomIntInclusive(0, headOptions.length - 1);
  console.log(`  Head: ${index}`);

  const svgOpenTag = `<g id="Head-${index + 1}">`;
  const svgCloseTag = `</g>`;
  const headSVG = `${svgOpenTag}${headOptions[index]}${svgCloseTag}`;

  return headSVG;
}
