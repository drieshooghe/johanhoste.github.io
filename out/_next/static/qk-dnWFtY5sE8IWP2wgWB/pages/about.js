(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"76ZC":function(e,t,n){var r=n("GkXj"),i=n("QIE6"),a={decodeEntities:!0,lowerCaseAttributeNames:!1};function o(e,t){if("string"!==typeof e)throw new TypeError("First argument must be a string");return r(i(e,a),t)}o.domToReact=r,o.htmlToDOM=i,e.exports=o},"7MhH":function(e,t,n){var r,i,a,o=n("wJvl"),s="html",l="head",c="body",u=/<([a-zA-Z]+[0-9]?)/,p=/<head.*>/i,f=/<body.*>/i,m=/<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,d=o.isIE(9),h=d||o.isIE();if("function"===typeof window.DOMParser){var g=new window.DOMParser,y=d?"text/xml":"text/html";r=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),d&&(e=e.replace(m,"<$1$2$3/>")),g.parseFromString(e,y)}}if("object"===typeof document.implementation){var v=document.implementation.createHTMLDocument(h?"HTML_DOM_PARSER_TITLE":void 0);i=function(e,t){if(t)return v.documentElement.getElementsByTagName(t)[0].innerHTML=e,v;try{return v.documentElement.innerHTML=e,v}catch(n){if(r)return r(e)}}}var x=document.createElement("template");x.content&&(a=function(e){return x.innerHTML=e,x.content.childNodes});var k=i||r;e.exports=function(e){var t,n,i,o,m=e.match(u);switch(m&&m[1]&&(t=m[1].toLowerCase()),t){case s:if(r)return n=r(e),p.test(e)||(i=n.getElementsByTagName(l)[0])&&i.parentNode.removeChild(i),f.test(e)||(i=n.getElementsByTagName(c)[0])&&i.parentNode.removeChild(i),n.getElementsByTagName(s);break;case l:case c:if(k)return o=k(e).getElementsByTagName(t),f.test(e)&&p.test(e)?o[0].parentNode.childNodes:o;break;default:if(a)return a(e);if(k)return k(e,c).getElementsByTagName(c)[0].childNodes}return[]}},CC3I:function(e,t,n){var r=n("Lc7W");e.exports=function(e,t){var n,i=null;if(!e||"string"!==typeof e)return i;for(var a,o,s=r(e),l="function"===typeof t,c=0,u=s.length;c<u;c++)a=(n=s[c]).property,o=n.value,l?t(a,o,n):o&&(i||(i={}),i[a]=o);return i}},F3Dj:function(e,t){e.exports={CASE_SENSITIVE_TAG_NAMES:["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"]}},GkXj:function(e,t,n){var r=n("qpZ2"),i=n("MHQ9");function a(e){return i.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&i.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,i){for(var o,s,l,c,u=(i=i||{}).library||n("q1tI"),p=u.cloneElement,f=u.createElement,m=u.isValidElement,d=[],h="function"===typeof i.replace,g=0,y=t.length;g<y;g++)if(o=t[g],h&&m(s=i.replace(o)))y>1&&(s=p(s,{key:s.key||g})),d.push(s);else if("text"!==o.type){if(l=o.attribs,a(o)||(l=r(o.attribs)),c=null,"script"===o.type||"style"===o.type)o.children[0]&&(l.dangerouslySetInnerHTML={__html:o.children[0].data});else{if("tag"!==o.type)continue;"textarea"===o.name&&o.children[0]?l.defaultValue=o.children[0].data:o.children&&o.children.length&&(c=e(o.children,i))}y>1&&(l.key=g),d.push(f(o.name,l,c))}else d.push(o.data);return 1===d.length?d[0]:d}},Lc7W:function(e,t){var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,c=/^\s+|\s+$/g,u="\n",p="/",f="*",m="",d="comment",h="declaration";function g(e){return e?e.replace(c,m):m}e.exports=function(e,t){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var c=1,y=1;function v(e){var t=e.match(r);t&&(c+=t.length);var n=e.lastIndexOf(u);y=~n?e.length-n:y+e.length}function x(){var e={line:c,column:y};return function(t){return t.position=new k(e),w(),t}}function k(e){this.start=e,this.end={line:c,column:y},this.source=t.source}k.prototype.content=e;var E=[];function b(n){var r=new Error(t.source+":"+c+":"+y+": "+n);if(r.reason=n,r.filename=t.source,r.line=c,r.column=y,r.source=e,!t.silent)throw r;E.push(r)}function T(t){var n=t.exec(e);if(n){var r=n[0];return v(r),e=e.slice(r.length),n}}function w(){T(i)}function A(e){var t;for(e=e||[];t=S();)!1!==t&&e.push(t);return e}function S(){var t=x();if(p==e.charAt(0)&&f==e.charAt(1)){for(var n=2;m!=e.charAt(n)&&(f!=e.charAt(n)||p!=e.charAt(n+1));)++n;if(n+=2,m===e.charAt(n-1))return b("End of comment missing");var r=e.slice(2,n-2);return y+=2,v(r),e=e.slice(n),y+=2,t({type:d,comment:r})}}function C(){var e=x(),t=T(a);if(t){if(S(),!T(o))return b("property missing ':'");var r=T(s),i=e({type:h,property:g(t[0].replace(n,m)),value:r?g(r[0].replace(n,m)):m});return T(l),i}}return w(),function(){var e,t=[];for(A(t);e=C();)!1!==e&&(t.push(e),A(t));return t}()}},MHQ9:function(e,t,n){var r=n("q1tI"),i=/-([a-z])/g,a=/^--[a-zA-Z0-9-]+$|^[^-]+$/;var o=r.version.split(".")[0]>=16;e.exports={PRESERVE_CUSTOM_ATTRIBUTES:o,camelCase:function(e){if("string"!==typeof e)throw new TypeError("First argument must be a string");return a.test(e)?e:e.toLowerCase().replace(i,function(e,t){return t.toUpperCase()})},invertObject:function(e,t){if(!e||"object"!==typeof e)throw new TypeError("First argument must be an object");var n,r,i="function"===typeof t,a={},o={};for(n in e)r=e[n],i&&(a=t(n,r))&&2===a.length?o[a[0]]=a[1]:"string"===typeof r&&(o[r]=n);return o},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}}},"N3/Y":function(e,t){e.exports={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32}},QIE6:function(e,t,n){var r=n("7MhH"),i=n("wJvl"),a=i.formatDOM,o=i.isIE(9),s=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];var t,n=e.match(s);return n&&n[1]&&(t=n[1],o&&(e=e.replace(n[0],""))),a(r(e),null,t)}},TaPz:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n("q1tI"),i=n.n(r),a=n("Xd0r"),o=n("L3DA"),s=n("YIIx"),l=n("TVx/"),c=n("76ZC"),u=n.n(c),p=i.a.createElement,f=o.a.pages.about.body.map(function(e,t){return p("div",{key:t},p("p",null,u()(e.p)))});function m(){return p("div",{className:"font-sans bg-white w-screen max-w-full"},p(a.a,null),p("div",{className:"flex flex-col min-h-screen"},p(s.a,null),p("div",{className:"container w-auto scroll-content py-8"},p("h1",{className:"mt-4 py-8 text-4xl font-sans"},o.a.pages.about.title),f,p("p",{className:"mb-4 font-bold"},o.a.pages.about.cta.message),p("a",{href:"/contact",className:"btn"},p("span",{className:"btn-label"},o.a.pages.about.cta.buttonText)))),p(l.a,null))}},"eKC+":function(e,t,n){var r=n("nYr6"),i=n("xp0l"),a=n("N3/Y"),o=a.MUST_USE_PROPERTY,s=a.HAS_BOOLEAN_VALUE,l=a.HAS_NUMERIC_VALUE,c=a.HAS_POSITIVE_NUMERIC_VALUE,u=a.HAS_OVERLOADED_BOOLEAN_VALUE;function p(e,t){return(e&t)===t}function f(e,t,n){var r,i,a,f=e.Properties,m=e.DOMAttributeNames;for(i in f)r=m[i]||(n?i:i.toLowerCase()),a=f[i],t[r]={attributeName:r,propertyName:i,mustUseProperty:p(a,o),hasBooleanValue:p(a,s),hasNumericValue:p(a,l),hasPositiveNumericValue:p(a,c),hasOverloadedBooleanValue:p(a,u)}}var m={};f(r,m);var d={};f(i,d,!0);var h={};f(r,h),f(i,h,!0);e.exports={html:m,svg:d,properties:h,isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))}},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])},nYr6:function(e,t){e.exports={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"}}},qpZ2:function(e,t,n){var r=n("eKC+"),i=n("CC3I"),a=n("MHQ9"),o=a.camelCase,s=r.html,l=r.svg,c=r.isCustomAttribute,u=Object.prototype.hasOwnProperty;e.exports=function(e){var t,n,r,p;e=e||{};var f={};for(t in e)r=e[t],c(t)?f[t]=r:(n=t.toLowerCase(),u.call(s,n)?f[(p=s[n]).propertyName]=!!(p.hasBooleanValue||p.hasOverloadedBooleanValue&&!r)||r:u.call(l,t)?f[(p=l[t]).propertyName]=r:a.PRESERVE_CUSTOM_ATTRIBUTES&&(f[t]=r));return null!=e.style&&(f.style=function(e){if("string"!==typeof e)throw new TypeError("First argument must be a string.");var t={};return i(e,function(e,n){e&&n&&(t[o(e)]=n)}),t}(e.style)),f}},wJvl:function(e,t,n){for(var r,i=n("F3Dj").CASE_SENSITIVE_TAG_NAMES,a={},o=0,s=i.length;o<s;o++)r=i[o],a[r.toLowerCase()]=r;function l(e){for(var t,n={},r=0,i=e.length;r<i;r++)n[(t=e[r]).name]=t.value;return n}function c(e){var t=function(e){return a[e]}(e=e.toLowerCase());return t||e}e.exports={formatAttributes:l,formatDOM:function e(t,n,r){n=n||null;for(var i,a,o,s=[],u=0,p=t.length;u<p;u++){switch(i=t[u],o={next:null,prev:s[u-1]||null,parent:n},(a=s[u-1])&&(a.next=o),"#"!==i.nodeName[0]&&(o.name=c(i.nodeName),o.attribs={},i.attributes&&i.attributes.length&&(o.attribs=l(i.attributes))),i.nodeType){case 1:"script"===o.name||"style"===o.name?o.type=o.name:o.type="tag",o.children=e(i.childNodes,o);break;case 3:o.type="text",o.data=i.nodeValue;break;case 8:o.type="comment",o.data=i.nodeValue}s.push(o)}return r&&(s.unshift({name:r.substring(0,r.indexOf(" ")).toLowerCase(),data:r,type:"directive",next:s[0]?s[0]:null,prev:null,parent:n}),s[1]&&(s[1].prev=s[0])),s},isIE:function(e){return e?document.documentMode===e:/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},xp0l:function(e,t){e.exports={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space"}}}},[["hIud",0,1]]]);