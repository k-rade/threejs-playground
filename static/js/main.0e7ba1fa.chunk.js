(this["webpackJsonpthreejs-playground"]=this["webpackJsonpthreejs-playground"]||[]).push([[0],{48:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){},61:function(e,t,r){},62:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var n,c,a=r(1),i=r.n(a),s=r(36),l=r.n(s),o=r(12),u=r(24),d=r(13),j=r(37),b=r(0),m=Object(a.createContext)({isDarkMode:!0}),v=function(e){var t=e.children,r=Object(a.useState)(!window.localStorage.getItem("dark-mode")),n=Object(o.a)(r,2),c=n[0],i=n[1];return Object(b.jsx)(m.Provider,{value:{isDarkMode:c,toggleDarkMode:function(){i((function(e){return!e}))}},children:t})},f=r(15),O=(r(48),function(e){var t=e.title,r=e.description,n=(e.children,e.number),c=e.url;return Object(b.jsx)(u.b,{to:"".concat(c),className:function(e){var t=e.isActive;return"nav-link ".concat(t?"nav-link-active":"")},children:Object(b.jsxs)("div",{"data-tilt":!0,className:"card",children:[Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"card-heading",children:[Object(b.jsx)("div",{className:"card-headline",children:"EXAMPLE"}),Object(b.jsx)("div",{className:"card-num",children:n})]}),Object(b.jsxs)("div",{className:"cube",children:[Object(b.jsx)("div",{className:"sphere-one inner"}),Object(b.jsx)("div",{className:"sphere-two inner"}),Object(b.jsx)("div",{className:"sphere-three inner"}),Object(b.jsx)("div",{className:"sphere-four inner"}),Object(b.jsx)("div",{className:"sphere-five inner"}),Object(b.jsx)("div",{className:"sphere-six inner"})]}),Object(b.jsx)("h3",{className:"card-title",children:t}),Object(b.jsx)("p",{className:"card-date",children:"10 SEP 2021"})]}),Object(b.jsx)("div",{className:"card-desc",children:r})]})})}),h=r(11),p=r(16),x=(r(49),["icon","onClick","type"]),g=function(e){var t=e.icon,r=e.onClick,n=e.type,c=void 0===n?"primary":n,a=Object(p.a)(e,x);return Object(b.jsx)("button",Object(h.a)(Object(h.a)({},a),{},{className:"icon-button icon-button-".concat(c),type:"button",onClick:r,children:t}))},y=["title","titleId"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function N(e,t){var r=e.title,i=e.titleId,s=k(e,y);return a.createElement("svg",w({className:"icon-arrow-right",width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?a.createElement("title",{id:i},r):null,n||(n=a.createElement("g",{filter:"url(#filter0_d_8_30)"},a.createElement("path",{d:"M5.51477 12.0079H19.5148",stroke:"var(--color-black)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M12.5148 5.00787L19.5148 12.0079L12.5148 19.0079",stroke:"var(--color-black)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),c||(c=a.createElement("defs",null,a.createElement("filter",{id:"filter0_d_8_30",x:-3.48523,y:.00787354,width:32,height:32,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),a.createElement("feOffset",{dy:4}),a.createElement("feGaussianBlur",{stdDeviation:2}),a.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_8_30"}),a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_8_30",result:"shape"})))))}var E=a.forwardRef(N),S=(r.p,r(14)),C=r(70),L=r(72),I=(r(50),function(){var e=Object(a.useState)("box"),t=Object(o.a)(e,2),r=t[0],n=t[1],c=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useRef)();return Object(S.c)((function(){i.current.rotation.x+=.01,i.current.rotation.z+=.01})),Object(b.jsxs)(b.Fragment,{children:["box"===r&&Object(b.jsx)(C.a,{ref:i,visible:!0,args:[1,1,1],onClick:function(){return c((function(e){return!e}))},children:Object(b.jsx)("meshStandardMaterial",{wireframe:n,color:"hsl(0,0%,45%)"})}),"sphere"===r&&Object(b.jsx)(C.d,{ref:i,visible:!0,args:[.75,30,30],onClick:function(){return c((function(e){return!e}))},children:Object(b.jsx)("meshStandardMaterial",{wireframe:n,color:"hsl(0,0%,45%)"})}),"cone"===r&&Object(b.jsx)(C.b,{ref:i,visible:!0,args:[.75,.75,12],onClick:function(){return c((function(e){return!e}))},children:Object(b.jsx)("meshStandardMaterial",{wireframe:n,color:"hsl(0,0%,45%)"})}),"tetrahedron"===r&&Object(b.jsx)(C.e,{ref:i,visible:!0,args:[.75],onClick:function(){return c((function(e){return!e}))},children:Object(b.jsx)("meshStandardMaterial",{wireframe:n,color:"hsl(0,0%,45%)"})}),"dodecahedron"===r&&Object(b.jsx)(C.c,{ref:i,visible:!0,args:[.75],onClick:function(){return c((function(e){return!e}))},children:Object(b.jsx)("meshStandardMaterial",{wireframe:n,color:"hsl(0,0%,45%)"})}),"torus"===r&&Object(b.jsx)(C.f,{ref:i,visible:!0,args:[.5,.15,10,50],onClick:function(){return c((function(e){return!e}))},children:Object(b.jsx)("meshStandardMaterial",{wireframe:n,color:"hsl(0,0%,45%)"})}),"torus-knot"===r&&Object(b.jsx)(C.g,{ref:i,visible:!0,args:[.5,.125],onClick:function(){return c((function(e){return!e}))},children:Object(b.jsx)("meshStandardMaterial",{wireframe:n,color:"hsl(0,0%,45%)"})})]})};return Object(b.jsxs)("div",{className:"basic-geometry",children:[Object(b.jsxs)("p",{className:"options-desc",children:["Click on shape ",Object(b.jsx)("br",{}),"to see wireframe."]}),Object(b.jsx)("div",{className:"options",children:[{key:"box",value:"Box"},{key:"sphere",value:"Sphere"},{key:"cone",value:"Cone"},{key:"tetrahedron",value:"Tetrahedron"},{key:"dodecahedron",value:"Dodecahedron"},{key:"torus",value:"Torus"},{key:"torus-knot",value:"Torus Knot"}].map((function(e){var t=e.key,c=e.value;return Object(b.jsx)("p",{className:"".concat(t===r?"options-active":""),onClick:function(){return n(t)},children:c},t)}))}),Object(b.jsxs)(S.a,{className:"three-js-canvas",camera:{position:[0,1,2]},children:[Object(b.jsx)(L.a,{enableZoom:!1}),Object(b.jsx)("ambientLight",{intensity:1}),Object(b.jsx)("directionalLight",{position:[-2,5,2],intensity:1.25}),Object(b.jsx)(a.Suspense,{fallback:null,children:Object(b.jsx)(c,{})})]})]})}),P=r(73),M=function(){var e=function(){var e=Object(a.useRef)();return Object(b.jsx)(C.d,{ref:e,visible:!0,args:[2.2,100,100],children:Object(b.jsx)(P.a,{wireframe:!0,color:"hsl(0,0%,25%)",attach:"material",distort:.4,speed:3})})};return Object(b.jsxs)(S.a,{className:"three-js-canvas",camera:{position:[0,0,5]},children:[Object(b.jsx)("ambientLight",{intensity:.5}),Object(b.jsx)("directionalLight",{position:[-2,6,4],intensity:2}),Object(b.jsx)(a.Suspense,{fallback:null,children:Object(b.jsx)(e,{})})]})},B=r(8),T=r(2),R=r(3),z=r(4),F=r(5),W=function(e){Object(z.a)(r,e);var t=Object(F.a)(r);function r(){return Object(T.a)(this,r),t.call(this,{vertexShader:"precision mediump float;\n      uniform float uTime;\n      uniform vec2 uFrequency;\n      varying vec2 vUv;\n      void main() {\n        vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n        modelPosition.z += sin(modelPosition.x * uFrequency.x + uTime) * 0.025;\n        modelPosition.z += sin(modelPosition.y * uFrequency.y + uTime) * 0.025;\n        vec4 viewPosition = viewMatrix * modelPosition;\n        vec4 projectedPosition = projectionMatrix * viewPosition;\n        vUv = uv;\n        gl_Position = projectedPosition;\n        \n      }",fragmentShader:"precision mediump float;\n      uniform sampler2D uTexture;\n      varying vec2 vUv;\n      void main() {\n        vec4 textureColor = texture2D(uTexture,vUv);\n        gl_FragColor = textureColor;\n      }",uniforms:{uTime:{value:0},uFrequency:{value:new B.Vector2(10,5)},uTexture:{value:null}}})}return Object(R.a)(r,[{key:"map",set:function(e){this.uniforms.uTexture.value=e}}]),r}(B.ShaderMaterial);Object(S.b)({CustomMaterial:W});var X,D=r.p+"static/media/painting.bf508a12.jpg",_=function(){var e=function(){var e=Object(a.useRef)(),t=Object(S.d)(B.TextureLoader,[D]),r=Object(o.a)(t,1)[0];return Object(S.c)((function(t){var r=t.clock;e.current&&(e.current.uniforms.uTime.value=3*r.getElapsedTime())})),Object(b.jsxs)("mesh",{children:[Object(b.jsx)("planeGeometry",{args:[1,1.25,32,32]}),Object(b.jsx)("customMaterial",{ref:e,attach:"material",map:r})]})};return Object(b.jsx)(S.a,{camera:{position:[0,0,1]},children:Object(b.jsx)(a.Suspense,{fallback:null,children:Object(b.jsx)(e,{})})})},V=r.p+"static/media/panorama.162243a0.jpeg",H=function(){var e=function(){var e=Object(S.d)(B.TextureLoader,V);return Object(b.jsxs)("mesh",{children:[Object(b.jsx)("sphereBufferGeometry",{attach:"geometry",args:[500,60,40]}),Object(b.jsx)("meshBasicMaterial",{attach:"material",map:e,side:B.BackSide})]})};return Object(b.jsxs)(S.a,{className:"three-js-canvas",camera:{position:[-1,0,0]},children:[Object(b.jsx)(L.a,{enableZoom:!1,rotateSpeed:.5}),Object(b.jsx)(a.Suspense,{fallback:null,children:Object(b.jsx)(e,{})})]})},Y=[{title:"Basic Geometry",number:"01",url:"basic-geometry",description:"Basic geometry examples with simple state managment.",component:Object(b.jsx)(I,{})},{title:"Distorted Sphere",number:"02",url:"distorted-sphere",description:"An example of mesh distort material on sphere geometry.",component:Object(b.jsx)(M,{})},{title:"Wave Shader",number:"03",url:"wave-shader",description:"Example of wave shader attached on plane geometry.",component:Object(b.jsx)(_,{})},{title:"360\xb0 View",number:"04",url:"360-view",description:"360\xb0 view made using sphere geometry with image texture.",component:Object(b.jsx)(H,{})}],A=(r(54),function(){var e=Object(a.useRef)(),t=Object(a.useState)(Y),r=Object(o.a)(t,2),n=r[0],c=r[1];return Object(b.jsx)("div",{className:"projects",children:Object(b.jsxs)("div",{className:"slider-wrapper",children:[Object(b.jsx)("div",{ref:e,className:"slider",onTransitionEnd:function(){e.current.style.transition="transform 0s",e.current.style.transform="translateX(0)";var t=[].concat(Object(f.a)(n),Object(f.a)(n.slice(0,1))).slice(-n.length);c(t)},children:n.map((function(e){var t=e.title,r=e.description,n=e.number,c=e.url;return Object(b.jsx)(O,{title:t,number:n,url:c,description:r,children:Object(b.jsx)("span",{children:"children"})},t)}))}),Object(b.jsx)("div",{className:"slider-btn",children:Object(b.jsx)(g,{icon:Object(b.jsx)(E,{}),onClick:function(){e.current.style.transition="transform 0.25s",e.current.style.transform="translateX(-20.5rem)"}})})]})})}),Z=["title","titleId"];function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(this,arguments)}function G(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function U(e,t){var r=e.title,n=e.titleId,c=G(e,Z);return a.createElement("svg",q({className:"icon icon-chevron-right",width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,X||(X=a.createElement("path",{d:"M9.03467 18.669L15.0347 12.669L9.03467 6.66901",stroke:"var(--color-white)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var J,K=a.forwardRef(U),Q=(r.p,[{key:"red",value:0},{key:"red2",value:10},{key:"orange",value:20},{key:"orange2",value:30},{key:"yellow",value:40},{key:"yellow2",value:50},{key:"yellow3",value:60},{key:"yellow4",value:70},{key:"yellow5",value:80},{key:"green",value:90},{key:"green2",value:100},{key:"green3",value:110},{key:"green4",value:120},{key:"green5",value:130},{key:"teal",value:140},{key:"teal2",value:150},{key:"teal3",value:160},{key:"aqua",value:170},{key:"aqua2",value:180},{key:"aqua3",value:190},{key:"blue",value:200},{key:"blue2",value:210},{key:"blue3",value:220},{key:"blue4",value:230},{key:"purple",value:240},{key:"purple2",value:250},{key:"purple3",value:260},{key:"purple4",value:270},{key:"pink",value:280},{key:"pink2",value:290}]),$=["title","titleId"];function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ee.apply(this,arguments)}function te(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function re(e,t){var r=e.title,n=e.titleId,c=te(e,$);return a.createElement("svg",ee({fill:"var(--color-primary)",className:"icon icon-check",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 405.272 405.272",style:{enableBackground:"new 0 0 405.272 405.272"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,J||(J=a.createElement("g",null,a.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"}))))}var ne,ce,ae=a.forwardRef(re),ie=(r.p,["title","titleId"]);function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(this,arguments)}function le(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function oe(e,t){var r=e.title,n=e.titleId,c=le(e,ie);return a.createElement("svg",se({className:"icon icon-drop",fill:"var(--color-white)",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,ne||(ne=a.createElement("path",{d:"m270,16.6c-7.9-7.5-20.2-7.5-28.1,0-7.2,6.9-177.7,169.9-177.7,279.4-1.42109e-14,113 86,205 191.8,205 105.7,0 191.8-92 191.8-205 0-109.5-170.5-272.5-177.8-279.4zm-14,443.6c-83.2,0-150.9-73.7-150.9-164.2 0-69.5 98.6-183.2 150.9-236 52.3,52.8 150.9,166.5 150.9,236 0,90.5-67.7,164.2-150.9,164.2z"})),ce||(ce=a.createElement("path",{d:"m178.2,291.7c0.2-11.2-8.6-20.5-19.9-20.8-0.2,0-0.4,0-0.5,0-11,0-20.1,8.8-20.4,19.9-0.1,2.3-1.4,57.8 42.5,103.8 9.8,10.3 24.9,4.6 28.9,0.9 8.2-7.7 8.6-20.6 0.9-28.9-31.6-33.5-31.5-74-31.5-74.9z"})))}var ue,de,je,be,me,ve,fe,Oe,he,pe=a.forwardRef(oe),xe=(r.p,r(55),function(){var e,t=Object(a.useState)(!1),r=Object(o.a)(t,2),n=r[0],c=r[1],i=Object(a.useState)(Number(null===(e=window.localStorage.getItem("color"))||void 0===e?void 0:e.valueOf())),s=Object(o.a)(i,2),l=s[0],u=s[1],d=Object(a.useRef)(),j=Object(a.useCallback)((function(e){u(e),v(e),window.document.documentElement.style.setProperty("--color-hue",e.toString())}),[]),m=function(e){d&&!d.current.contains(e.target)&&c(!1)},v=function(e){return window.localStorage.setItem("color",e.toString())};return Object(a.useEffect)((function(){var e;window.addEventListener("mousedown",m);var t=Number(null===(e=window.localStorage.getItem("color"))||void 0===e?void 0:e.valueOf());return Q.some((function(e){return e.value===t}))?j(t):v(160),function(){return window.removeEventListener("mousedown",m)}}),[j]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"color-switch",ref:d,children:[Object(b.jsx)(g,{onClick:function(){c((function(e){return!e}))},type:"outline",icon:Object(b.jsx)(pe,{})}),n&&Object(b.jsx)("div",{className:"color-list",children:Q.map((function(e){var t=e.key,r=e.value;return Object(b.jsx)("div",{"data-testid":"color-item-".concat(r),onClick:function(){return j(r)},className:"color-item",style:{background:"hsl(".concat(r,",72%,67%)")},children:l===r&&Object(b.jsx)(ae,{})},t)}))})]})})}),ge=["title","titleId"];function ye(){return ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ye.apply(this,arguments)}function we(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function ke(e,t){var r=e.title,n=e.titleId,c=we(e,ge);return a.createElement("svg",ye({fill:"var(--color-white)",className:"icon icon-sun",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,ue||(ue=a.createElement("path",{d:"m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z"})),de||(de=a.createElement("path",{d:"m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z"})),je||(je=a.createElement("path",{d:"m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z"})),be||(be=a.createElement("path",{d:"m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z"})),me||(me=a.createElement("path",{d:"m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z"})),ve||(ve=a.createElement("path",{d:"M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z"})),fe||(fe=a.createElement("path",{d:"m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z"})),Oe||(Oe=a.createElement("path",{d:"m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z"})),he||(he=a.createElement("path",{d:"m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z"})))}var Ne,Ee=a.forwardRef(ke),Se=(r.p,["title","titleId"]);function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ce.apply(this,arguments)}function Le(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function Ie(e,t){var r=e.title,n=e.titleId,c=Le(e,Se);return a.createElement("svg",Ce({fill:"var(--color-white)",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"icon-moon",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,Ne||(Ne=a.createElement("path",{d:"M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"})))}var Pe,Me,Be,Te=a.forwardRef(Ie),Re=(r.p,r(56),function(){var e=Object(a.useContext)(m).isDarkMode,t=Object(a.useContext)(m).toggleDarkMode;return Object(a.useEffect)((function(){e?(window.localStorage.removeItem("dark-mode"),window.document.body.classList.remove("day-mode")):(window.localStorage.setItem("dark-mode","false"),window.document.body.classList.add("day-mode"))}),[e]),Object(b.jsx)("div",{className:"dark-mode-switch",children:Object(b.jsx)(g,{type:"outline",onClick:t,icon:e?Object(b.jsx)(Ee,{}):Object(b.jsx)(Te,{})})})}),ze=(r(57),function(){return Object(b.jsxs)("div",{className:"settings",children:[Object(b.jsx)(Re,{}),Object(b.jsx)(xe,{})]})}),Fe=(r(58),function(){return Object(b.jsxs)("div",{id:"home",children:[Object(b.jsxs)("div",{className:"vr-line",children:[Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"}),Object(b.jsx)("div",{className:"vr-bubble"})]}),Object(b.jsxs)("div",{className:"home-heading",children:[Object(b.jsxs)("div",{className:"home-title-container",children:[Object(b.jsxs)("div",{className:"home-scroll",children:[Object(b.jsxs)("div",{className:"home-scroll-icons",children:[Object(b.jsx)(K,{}),Object(b.jsx)(K,{}),Object(b.jsx)(K,{})]}),Object(b.jsx)("span",{children:" SCROLL"})]}),Object(b.jsxs)("div",{className:"shapes",children:[Object(b.jsx)("div",{className:"shape-rectangle"}),Object(b.jsx)("div",{className:"vertical-line"})]}),Object(b.jsxs)("h3",{className:"home-title",children:[Object(b.jsx)("span",{className:"home-title-binary",children:"1000111 001 10 1000 10101 010 10 1110 0 101 11 0111 00100 0 110 00 10 010 0111 101000 101 0111 0 111000 1110 1 01 0100 1 00 11 11001 10010 1000 101 110"}),Object(b.jsx)("span",{children:"THREE.JS"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"LAB"})]}),Object(b.jsxs)("div",{className:"shapes",children:[Object(b.jsx)("div",{className:"vertical-line"}),Object(b.jsx)("div",{className:"shape-rectangle"})]})]}),Object(b.jsxs)("h3",{className:"home-subtitle",children:["This place is a small archive ",Object(b.jsx)("br",{}),"of my personal Three.js learning journey."]}),Object(b.jsx)("div",{className:"home-settings",children:Object(b.jsx)(ze,{})})]}),Object(b.jsx)(A,{})]})}),We=(r(59),function(){return Object(b.jsxs)("div",{className:"background",children:[Object(b.jsx)("div",{className:"bg-bubble"}),Object(b.jsx)("div",{className:"bg-bubble"}),Object(b.jsx)("div",{className:"bg-bubble"}),Object(b.jsx)("div",{className:"bg-bubble"}),Object(b.jsx)("div",{className:"bg-bubble"}),Object(b.jsx)("div",{className:"bg-bubble"}),Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("div",{className:"grid-line"}),Object(b.jsx)("div",{className:"grid-line"}),Object(b.jsx)("div",{className:"grid-line"}),Object(b.jsx)("div",{className:"grid-line"}),Object(b.jsx)("div",{className:"grid-line"}),Object(b.jsx)("div",{className:"grid-line"}),Object(b.jsx)("div",{className:"grid-line"})]})]})}),Xe=r(71),De=["title","titleId"];function _e(){return _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_e.apply(this,arguments)}function Ve(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function He(e,t){var r=e.title,n=e.titleId,c=Ve(e,De);return a.createElement("svg",_e({className:"icon icon-info",width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,Pe||(Pe=a.createElement("path",{d:"M12.873 22.9549C18.3959 22.9549 22.873 18.4777 22.873 12.9549C22.873 7.43203 18.3959 2.95488 12.873 2.95488C7.3502 2.95488 2.87305 7.43203 2.87305 12.9549C2.87305 18.4777 7.3502 22.9549 12.873 22.9549Z",stroke:"var(--color-white)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Me||(Me=a.createElement("path",{d:"M12.873 16.9549V12.9549",stroke:"var(--color-white)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Be||(Be=a.createElement("path",{d:"M12.873 8.95488H12.883",stroke:"var(--color-white)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var Ye,Ae,Ze,qe=a.forwardRef(He),Ge=(r.p,r(60),function(){var e=Object(a.useState)(Date.now()),t=Object(o.a)(e,2),r=t[0],n=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return n(Date.now())}),1e3);return function(){clearInterval(e)}}),[]),Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("div",{className:"header-content",children:[Object(b.jsxs)("div",{className:"header-content-left",children:[Object(b.jsx)("span",{className:"header-txt",children:"radivoje.katanic"}),Object(b.jsx)(qe,{}),Object(b.jsxs)("div",{className:"header-info",children:["Radivoje Katani\u0107 is a software developer located in Doboj, ",Object(b.jsx)("br",{}),"Bosnia & Herzegovina. ",Object(b.jsx)("br",{})," Coder, outdoors enthusiast, & animal lover.",Object(b.jsx)("br",{}),"Fun fact: I have 10 cats around my house."]})]}),Object(b.jsx)("span",{className:"header-txt date-time",children:Object(Xe.a)(r,"iii dd MMM yyyy hh:mm:ss a")})]}),Object(b.jsx)("div",{className:"header-line"})]})}),Ue=["title","titleId"];function Je(){return Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Je.apply(this,arguments)}function Ke(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function Qe(e,t){var r=e.title,n=e.titleId,c=Ke(e,Ue);return a.createElement("svg",Je({className:"icon icon-alert-error",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,Ye||(Ye=a.createElement("path",{d:"M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z",stroke:"var(--color-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ae||(Ae=a.createElement("path",{d:"M12 9V13",stroke:"var(--color-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ze||(Ze=a.createElement("path",{d:"M12 17.0195V17",stroke:"var(--color-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var $e,et=a.forwardRef(Qe),tt=(r.p,r(61),function(){var e=Object(d.g)().exampleName,t=Y.find((function(t){return t.url===e}));return Object(b.jsx)("div",{className:"example",children:Object(b.jsx)("div",{className:"example-container",children:t?t.component:Object(b.jsxs)("p",{className:"example-txt",children:[Object(b.jsx)(et,{})," Select one of the examples ",Object(b.jsx)("br",{})," from above for preview."]})})})}),rt=["title","titleId"];function nt(){return nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},nt.apply(this,arguments)}function ct(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function at(e,t){var r=e.title,n=e.titleId,c=ct(e,rt);return a.createElement("svg",nt({className:"icon icon-github",xmlns:"http://www.w3.org/2000/svg",width:23,height:24,viewBox:"0 0 23 24",fill:"none",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,$e||($e=a.createElement("path",{d:"M15.6123 22.4868V18.6168C15.6498 18.14 15.5854 17.6606 15.4233 17.2106C15.2612 16.7606 15.0052 16.3502 14.6723 16.0068C17.8123 15.6568 21.1123 14.4668 21.1123 9.0068C21.112 7.61063 20.575 6.268 19.6123 5.2568C20.0682 4.03531 20.0359 2.68515 19.5223 1.4868C19.5223 1.4868 18.3423 1.1368 15.6123 2.9668C13.3203 2.34562 10.9043 2.34562 8.6123 2.9668C5.8823 1.1368 4.7023 1.4868 4.7023 1.4868C4.18868 2.68515 4.15645 4.03531 4.6123 5.2568C3.64243 6.2755 3.10483 7.63026 3.1123 9.0368C3.1123 14.4568 6.4123 15.6468 9.5523 16.0368C9.2233 16.3768 8.96957 16.7822 8.80761 17.2267C8.64566 17.6712 8.57911 18.1449 8.6123 18.6168V22.4868M8.6123 19.4868C3.6123 20.9868 3.6123 16.9868 1.6123 16.4868L8.6123 19.4868Z",stroke:"var(--color-white)",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})))}var it,st,lt,ot=a.forwardRef(at),ut=(r.p,["title","titleId"]);function dt(){return dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dt.apply(this,arguments)}function jt(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function bt(e,t){var r=e.title,n=e.titleId,c=jt(e,ut);return a.createElement("svg",dt({className:"icon icon-linkedin",xmlns:"http://www.w3.org/2000/svg",width:25,height:25,viewBox:"0 0 25 25",fill:"none",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,it||(it=a.createElement("path",{d:"M16.6123 8.4868C18.2036 8.4868 19.7297 9.11894 20.8549 10.2442C21.9802 11.3694 22.6123 12.8955 22.6123 14.4868V21.4868H18.6123V14.4868C18.6123 13.9564 18.4016 13.4477 18.0265 13.0726C17.6514 12.6975 17.1427 12.4868 16.6123 12.4868C16.0819 12.4868 15.5732 12.6975 15.1981 13.0726C14.823 13.4477 14.6123 13.9564 14.6123 14.4868V21.4868H10.6123V14.4868C10.6123 12.8955 11.2444 11.3694 12.3697 10.2442C13.4949 9.11894 15.021 8.4868 16.6123 8.4868V8.4868Z",stroke:"var(--color-white)",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),st||(st=a.createElement("path",{d:"M6.6123 9.4868H2.6123V21.4868H6.6123V9.4868Z",stroke:"var(--color-white)",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),lt||(lt=a.createElement("path",{d:"M4.6123 6.4868C5.71687 6.4868 6.6123 5.59137 6.6123 4.4868C6.6123 3.38223 5.71687 2.4868 4.6123 2.4868C3.50774 2.4868 2.6123 3.38223 2.6123 4.4868C2.6123 5.59137 3.50774 6.4868 4.6123 6.4868Z",stroke:"var(--color-white)",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})))}var mt=a.forwardRef(bt),vt=(r.p,r(62),function(){var e=[Object(b.jsxs)("p",{children:["Main goal was to document learning progress, ",Object(b.jsx)("br",{})," to create some kind of reminder for later."]}),Object(b.jsxs)("p",{children:["Working with 3D graphics in browser is fascinating, ",Object(b.jsx)("br",{})," hence I could not resist to not try it out."]}),Object(b.jsxs)("p",{children:["This project is built in React, ",Object(b.jsx)("br",{}),"with react-three-fiber renderer for Three.js."]})],t=Object(a.useState)(0),r=Object(o.a)(t,2),n=r[0],c=r[1];return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsxs)("div",{className:"footer-content",children:[Object(b.jsxs)("div",{className:"footer-go-to-top",onClick:function(){return window.scrollTo(0,0)},children:[Object(b.jsx)("span",{children:"TO TOP"}),Object(b.jsxs)("div",{className:"footer-go-to-top-icons",children:[Object(b.jsx)(K,{}),Object(b.jsx)(K,{}),Object(b.jsx)(K,{})]})]}),Object(b.jsx)("h3",{children:"ABOUT"}),Object(b.jsx)("div",{className:"footer-content-about",children:e.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"pinpoint ".concat(n===t?"pinpoint-active":""),onClick:function(){return c(t)}}),n===t&&Object(b.jsx)("div",{className:"footer-content-about-txt",children:e})]},t)}))})]}),Object(b.jsxs)("div",{className:"footer-links",children:[Object(b.jsx)("a",{className:"footer-link",target:"_blank",rel:"noreferrer",href:"https://github.com/k-rade",children:Object(b.jsx)(ot,{})}),Object(b.jsx)("a",{className:"footer-link",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/radivoje-katanic",children:Object(b.jsx)(mt,{})})]}),Object(b.jsx)("div",{className:"header-line"}),Object(b.jsxs)("p",{className:"footer-copyright",children:["\xa9 ",(new Date).getFullYear().toString(),", Radivoje Katani\u0107. No rights reserved.",Object(b.jsx)("br",{}),"Feel free to replicate or copy anything you find interesting on this place.",Object(b.jsx)("br",{}),"This is a free world. Atleast I think so."]})]})}),ft=(r(63),function(){var e=i.a.useRef(null),t=i.a.useRef(null),r=i.a.useRef({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1}),n=Object(a.useCallback)((function(c){var a=c.clientX,i=c.clientY;r.current.mouseX=a-e.current.clientWidth/2,r.current.mouseY=i-e.current.clientHeight/2,t.current.style.transform="translate3d(".concat(a-t.current.clientWidth/2,"px, ").concat(i-t.current.clientHeight/2,"px, 0)"),r.current.key=requestAnimationFrame(n);var s=r.current,l=s.destinationX,o=s.destinationY,u=s.distanceX,d=s.distanceY;l&&o?(r.current.distanceX=.5*(a-l),r.current.distanceY=.5*(i-o),Math.abs(r.current.distanceX)+Math.abs(r.current.distanceY)<.1?(r.current.destinationX=a,r.current.destinationY=i):(r.current.destinationX+=u,r.current.destinationY+=d)):(r.current.destinationX=a,r.current.destinationY=i),e.current.style.transform="translate3d(".concat(l,"px, ").concat(o,"px, 0)")}),[]);return Object(a.useEffect)((function(){return document.addEventListener("mousemove",n),function(){document.removeEventListener("mousemove",n)}}),[n]),Object(b.jsxs)("div",{className:"cursor-wrapper",children:[Object(b.jsx)("div",{className:"cursor ",ref:t}),Object(b.jsx)("div",{className:"cursor-outline",ref:e})]})}),Ot=(r(64),r(65),function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),r=t[0],n=t[1],c=function(){var e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;n(e/t*100)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),Object(b.jsx)("div",{className:"scroll-bar",children:Object(b.jsx)("div",{className:"scroll-bar-percent",style:{height:"".concat(r,"%")}})})}),ht=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(window.innerWidth),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){var e,t=function(){clearTimeout(e),n(!0),l(window.innerWidth),e=setTimeout((function(){n(!1)}),250)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(b.jsxs)("div",{"data-testid":"app",className:"App",children:[Object(b.jsx)(We,{}),Object(b.jsx)(Ot,{}),Object(b.jsx)(j.BrowserView,{children:Object(b.jsx)(ft,{})}),Object(b.jsx)(v,{children:Object(b.jsx)(u.a,{children:r?Object(b.jsx)("div",{className:"message-box",children:"RESIZING..."}):s>=670?Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(Ge,{}),Object(b.jsx)(Fe,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",element:Object(b.jsx)(tt,{}),exact:!0}),Object(b.jsx)(d.a,{path:"/:exampleName",element:Object(b.jsx)(tt,{}),exact:!0})]}),Object(b.jsx)(vt,{})]}):Object(b.jsxs)("div",{className:"message-box",children:["For better user experience ",Object(b.jsx)("br",{}),"please use device with viewport width",Object(b.jsx)("br",{}),"of 670 pixels or more."]})})})]})},pt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,74)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};r(66);l.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(ht,{})}),document.getElementById("root")),pt()}},[[67,1,2]]]);
//# sourceMappingURL=main.0e7ba1fa.chunk.js.map