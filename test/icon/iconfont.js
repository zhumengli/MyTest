(function(window){var svgSprite='<svg><symbol id="icon-x1" viewBox="0 0 1024 1024"><path d="M879.308597 180.345438 827.170123 128.207987 512.180102 443.198008 199.350281 130.36614 146.851603 182.865841 459.681424 495.695662 144.691403 810.685683 196.830901 862.823134 511.819898 547.834136 824.651766 860.664981 877.148397 808.16835 564.317553 495.336482Z"  ></path></symbol><symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024"><path d="M511.216098 154.428696m-143.804476 0a39.808 39.808 0 1 0 287.608952 0 39.808 39.808 0 1 0-287.608952 0Z"  ></path><path d="M511.216098 514.82855m-143.804476 0a39.808 39.808 0 1 0 287.608952 0 39.808 39.808 0 1 0-287.608952 0Z"  ></path><path d="M511.216098 875.23924m-143.804476 0a39.808 39.808 0 1 0 287.608952 0 39.808 39.808 0 1 0-287.608952 0Z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)