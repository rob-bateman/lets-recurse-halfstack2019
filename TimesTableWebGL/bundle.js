!function(e){function t(t){for(var n,a,s=t[0],u=t[1],d=t[2],c=0,h=[];c<s.length;c++)a=s[c],o[a]&&h.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);h.length;)h.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={2:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=u;i.push([13,1,0]),r()}([,function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.updateColorMethod=function(e,t){switch(t){case"solid":e.uniforms.colorMethod.value=0;break;case"faded":e.uniforms.colorMethod.value=1;break;case"lengthOpacity":e.uniforms.colorMethod.value=2;break;case"lengthHue":e.uniforms.colorMethod.value=3}e.needsUpdate=!0},t.updateMultiplier=function(e,t){e.uniforms.multiplier.value=t,e.needsUpdate=!0},t.updateOpacity=function(e,t){e.uniforms.opacity.value=t,e.needsUpdate=!0},t.updateNoiseStrength=function(e,t){e.uniforms.noiseStrength.value=t,e.needsUpdate=!0},t.updateCameraPosition=function(e,t,r){e.position.setX(t),e.position.setY(r)},t.updateCameraZoom=function(e,t){e.zoom=Math.pow(Math.E,t-1),e.updateProjectionMatrix()},t.updateRendererSize=function(e,t,r){var n=r/t,o=e.camera;n>1?(o.left=-n,o.right=n,o.top=1,o.bottom=-1):(o.left=-1,o.right=1,o.top=Math.pow(n,-1),o.bottom=-Math.pow(n,-1)),e.camera.updateProjectionMatrix(),e.renderer.setSize(r,t)},t.updateTotalLines=function(e,t){var r=new Float32Array(6*t);e.positionsAttribute.setArray(r);var n=new Float32Array(6*t);e.colorsAttribute.setArray(n);var o=new Float32Array(2*t);e.numbersAttribute.setArray(o);for(var i=0;i<2*t;i++)o[i]=i;e.numbersAttribute.needsUpdate=!0,e.material.uniforms.total.value=t,e.material.needsUpdate=!0,e.positionsAttribute.needsUpdate=!0},t.updateRenderer=function(e,t,r){var o=new n.WebGLRenderer({antialias:r});if(o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),!t.firstChild)throw new Error("No Render Container");t.replaceChild(o.domElement,t.firstChild),e.renderer=o}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o=function(){function e(e,t,r,n){this.frameRequested=!1,this.stats=e,this.threeEnv=t,this.input=r,this.renderContainer=n,this.updateSources=new Set,this.postRenderCallbacks=new Set}return e.prototype.requestRender=function(e,t){var r=this;this.updateSources.add(e),this.frameRequested||(this.frameRequested=!0,requestAnimationFrame(function(){return r.render()})),t&&this.postRenderCallbacks.add(t)},e.prototype.render=function(){this.stats.begin(),this.frameRequested=!1,this.update(),this.threeEnv.renderer.render(this.threeEnv.scene,this.threeEnv.camera),this.prepareNextRender(),this.stats.end()},e.prototype.update=function(){this.updateSources.has("init")&&(n.updateRenderer(this.threeEnv,this.renderContainer,this.input.antialias),n.updateRendererSize(this.threeEnv,window.innerHeight,window.innerWidth),n.updateTotalLines(this.threeEnv,this.input.totalLines),n.updateMultiplier(this.threeEnv.material,this.input.multiplier),n.updateColorMethod(this.threeEnv.material,this.input.colorMethod),n.updateOpacity(this.threeEnv.material,this.input.opacity),n.updateCameraPosition(this.threeEnv.camera,this.input.camPosX,this.input.camPosY),n.updateCameraZoom(this.threeEnv.camera,this.input.camZoom)),this.updateSources.has("antialias")&&n.updateRenderer(this.threeEnv,this.renderContainer,this.input.antialias),this.updateSources.has("totalLines")&&n.updateTotalLines(this.threeEnv,this.input.totalLines),this.updateSources.has("multiplier")&&n.updateMultiplier(this.threeEnv.material,this.input.multiplier),this.updateSources.has("colorMethod")&&n.updateColorMethod(this.threeEnv.material,this.input.colorMethod),this.updateSources.has("noiseStrength")&&n.updateNoiseStrength(this.threeEnv.material,this.input.noiseStrength),(this.updateSources.has("camPosX")||this.updateSources.has("camPosY"))&&n.updateCameraPosition(this.threeEnv.camera,this.input.camPosX,this.input.camPosY),this.updateSources.has("camZoom")&&n.updateCameraZoom(this.threeEnv.camera,this.input.camZoom),this.updateSources.has("opacity")&&n.updateOpacity(this.threeEnv.material,this.input.opacity),this.updateSources.has("resize")&&n.updateRendererSize(this.threeEnv,window.innerHeight,window.innerWidth)},e.prototype.prepareNextRender=function(){this.updateSources.clear();var e=this.postRenderCallbacks;this.postRenderCallbacks=new Set,e.forEach(function(e){return e()})},e}();t.RenderController=o},,function(e,t,r){"use strict";t.__esModule=!0;var n=r(3);t.initGUI=function(e,t,r){var o=new n.GUI,i=o.addFolder("Maths");i.add(e,"totalLines").min(0).step(1).onChange(function(){return t.requestRender("totalLines")});var a=i.add(e,"multiplier").step(1e-6);function s(){e.animate&&a.setValue(e.multiplier+Math.pow(e.multiplierIncrement,3))}a.onChange(function(){return t.requestRender("multiplier",s)}),i.open();var u=o.addFolder("Animation");u.add(e,"animate").onChange(function(){return t.requestRender("animate",s)}),u.add(e,"multiplierIncrement").min(-1).max(1).step(.001).onChange(function(){return t.requestRender("multiplierIncrement")}),u.open();var d=o.addFolder("Color");d.add(e,"opacity",0,1).step(.001).onChange(function(){return t.requestRender("opacity")}),d.add(e,"colorMethod",["solid","faded","lengthOpacity","lengthHue"]).onChange(function(){return t.requestRender("colorMethod")}),d.open();var l=o.addFolder("Render");l.add(e,"noiseStrength",0,255).step(.5).onChange(function(){return t.requestRender("noiseStrength")}),l.add(e,"antialias").onChange(function(){return t.requestRender("antialias")}),l.open();var c=o.addFolder("Camera"),h=c.add(e,"camPosX",-1,1).step(1e-6);h.onChange(function(){return t.requestRender("camPosX")});var p=c.add(e,"camPosY",-1,1).step(1e-6);p.onChange(function(){return t.requestRender("camPosY")});var m=c.add(e,"camZoom",1).step(.01);m.onChange(function(){return t.requestRender("camZoom")}),c.add(e,"resetCamera").onChange(function(){h.setValue(0),p.setValue(0),m.setValue(1)}),c.open(),r.addEventListener("wheel",function(t){t.shiftKey&&m.setValue(e.camZoom-t.deltaY/1e3)}),r.addEventListener("mousemove",function(t){if(1===t.buttons&&t.shiftKey){var n=Math.min(r.clientHeight,r.clientWidth),o=Math.pow(Math.E,e.camZoom-1)*n/2;h.setValue(e.camPosX-t.movementX/o),p.setValue(e.camPosY+t.movementY/o)}})}},,function(e,t){e.exports="uniform float multiplier;\r\nuniform float total;\r\nuniform int colorMethod;\r\n\r\nattribute float number;\r\nattribute vec3 color;\r\n\r\nvarying vec3 vColor;\r\nvarying float vLinePosition;\r\n\r\n#define PI 3.1415926535897932384626433832795\r\n\r\nbool isStartCord(float number);\r\nvec2 getCircleCord(float number, float total);\r\nvec3 hsv2rgb(vec3 c);\r\n\r\n\r\nvoid main() {\r\n  vec3 newPosition = position;\r\n\r\n  bool startCord = isStartCord(number);\r\n\r\n  if (startCord) {\r\n    newPosition.xy =  getCircleCord(number / 2.0, total);\r\n    vLinePosition = 1.0;\r\n  } else {\r\n    newPosition.xy =  getCircleCord( floor(number / 2.0) * multiplier, total);\r\n    vLinePosition = 0.0;\r\n  }\r\n\r\n  float theta = 2.0 * PI * floor(number / 2.0) * (multiplier - 1.0) / total;\r\n  float distance = abs(sin(theta / 2.0));\r\n\r\n  gl_Position = projectionMatrix *\r\n                modelViewMatrix *\r\n                vec4(newPosition,1.0);\r\n\r\n  // colorMethod switch\r\n  if (colorMethod == 0) {\r\n    // solid\r\n    vColor.xyz = vec3(1.0);\r\n  } else if (colorMethod == 1) {\r\n    // faded\r\n    if (startCord) {\r\n      vColor.xyz = vec3(1.0);\r\n    } else {\r\n      vColor.xyz = vec3(0.0);\r\n    }\r\n  } else if (colorMethod == 2) {\r\n    // lengthOpacity\r\n    vColor.xyz = vec3(1.0 - distance);\r\n  } else if (colorMethod == 3) {\r\n    // lengthHue\r\n    vColor.xyz = vec3(hsv2rgb(vec3(distance, 1.0, 1.0)));\r\n  } else {\r\n    // fallback error red\r\n    vColor.xyz = vec3(1.0, 0.0, 0.0);\r\n  }\r\n}\r\n\r\nbool isStartCord(float number) {\r\n  return mod(number, 2.0) < 0.01;\r\n}\r\n\r\nvec2 getCircleCord(float number, float total) {\r\n    float normalized = 2.0 * PI * number / total;\r\n    return vec2(cos(normalized), sin(normalized));\r\n}\r\n\r\n// source: http://gamedev.stackexchange.com/a/59808\r\nvec3 hsv2rgb(vec3 c)\r\n{\r\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\r\n}"},function(e,t){e.exports="uniform float opacity;\r\nuniform sampler2D noise;\r\nuniform float noiseStrength;\r\n\r\nvarying vec3 vColor;\r\nvarying float vLinePosition;\r\n\r\nvoid main() {\r\n  gl_FragColor = vec4(vColor, opacity);\r\n\r\n  float noise = vec4(texture2D(noise, vec2(vLinePosition * 1024.0, 0.5))).r;\r\n\r\n  gl_FragColor.rgb += mix(-noiseStrength/255.0, noiseStrength/255.0, noise);\r\n}"},,,,function(e,t,r){(e.exports=r(10)(!1)).push([e.i,"canvas {\r\n    display: block;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n#render-container {\r\n  user-select: none;\r\n  cursor: default;\r\n}",""])},function(e,t,r){var n=r(11);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(9)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};t.__esModule=!0,r(12);var o=r(7),i=r(6),a=r(0),s=r(5),u=r(4),d=r(2);window.onload=function(){var e=new s;e.showPanel(1),document.body.appendChild(e.dom);var t=function(){var e={totalLines:10,multiplier:2,animate:!1,multiplierIncrement:.2,opacity:1,colorMethod:"lengthHue",noiseStrength:.5,antialias:!1,camPosX:0,camPosY:0,camZoom:1,resetCamera:function(){}};return n({},e,{totalLines:25e4,multiplier:1e5,multiplierIncrement:1,opacity:.005,colorMethod:"faded"}),n({},e,{totalLines:10,multiplier:2,multiplierIncrement:.005,colorMethod:"faded"}),n({},e,{totalLines:1e4,opacity:.05}),e}(),r=function(){var e=new a.WebGLRenderer({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight);var t=new a.Scene,r=new a.OrthographicCamera(-1,1,1,-1);r.position.setZ(1),r.lookAt(new a.Vector3(0,0,0));var n=new a.BufferGeometry,s=new a.ShaderMaterial({uniforms:{multiplier:{value:2},total:{value:10},opacity:{value:1},colorMethod:{value:0},noise:{value:function(){for(var e=new Uint8Array(4096),t=0;t<4096;t++)e[t]=255*Math.random()|0;var r=new a.DataTexture(e,1024,1,a.RGBAFormat,a.UnsignedByteType,a.UVMapping,a.RepeatWrapping,a.RepeatWrapping,a.LinearFilter,a.LinearFilter);return r.needsUpdate=!0,r}()},noiseStrength:{value:1}},vertexShader:i,fragmentShader:o,blending:a.AdditiveBlending,depthTest:!1,transparent:!0});s.blending=a.CustomBlending,s.blendEquation=a.AddEquation,s.blendSrc=a.SrcAlphaFactor,s.blendDst=a.OneFactor;var u=new Float32Array(0),d=new a.BufferAttribute(u,3);n.addAttribute("position",d);var l=new Float32Array(0),c=new a.BufferAttribute(l,3);n.addAttribute("color",c);var h=new Float32Array(0),p=new a.BufferAttribute(h,1);n.addAttribute("number",p);var m=new a.LineSegments(n,s);return m.frustumCulled=!1,t.add(m),{renderer:e,scene:t,camera:r,geometry:n,material:s,positionsAttribute:d,colorsAttribute:c,numbersAttribute:p}}(),l=function(e){var t=document.createElement("div");return t.id="render-container",document.body.appendChild(t),t.appendChild(e.domElement),t}(r.renderer),c=new d.RenderController(e,r,t,l);window.addEventListener("resize",function(){return c.requestRender("resize")}),u.initGUI(t,c,l),c.requestRender("init")}}]);
//# sourceMappingURL=bundle.js.map