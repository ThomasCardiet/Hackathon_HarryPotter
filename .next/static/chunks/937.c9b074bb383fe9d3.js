"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{9937:function(e,t,i){i.r(t);var n=i(5893),s=i(7294),l=i(1664),r=i.n(l),a=i(619),o=i(3695),h=i(4339),p=i(1163),c=i(118),d=i(321);let u=e=>{let{setUser:t,user:i}=e,l=(0,p.useRouter)(),[u,g]=(0,s.useState)(0),[v,{stop:w}]=(0,a.Z)("/sounds/button1.wav",{volume:.4}),m=()=>{v()};return(0,s.useEffect)(()=>{o.V.isLoggedUser()||l.push(h.F.getRoutes().LOGIN.slug)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("main",{children:(0,n.jsx)("section",{className:"join",children:(0,n.jsxs)("aside",{className:"join-container",children:[(0,n.jsxs)("div",{className:"join-container-top",children:[(0,n.jsx)(r(),{href:"/choice",className:"join-container-top-back",children:(0,n.jsx)("img",{src:"images/icons/arrow-left.svg",alt:"back"})}),(0,n.jsxs)("div",{className:"join-container-top-title",children:[(0,n.jsx)("h3",{className:"text-50 text-Harry text-yellow",children:(0,n.jsx)(c.kX,{from:{opacity:"0",scale:"0.4"},to:{opacity:"100%",scale:"1"},ease:"expo.out()",duration:6,stagger:.1,children:(0,n.jsx)(c.H5,{wrapper:(0,n.jsx)("span",{style:{display:"inline-block"}}),children:"Rejoins une partie"})})}),(0,n.jsx)("h3",{className:"text-50 text-Harry text-yellow text-blur",children:(0,n.jsx)(c.kX,{from:{opacity:"0",scale:"0.4"},to:{opacity:"100%",scale:"1"},ease:"expo.out()",duration:6,stagger:.1,children:(0,n.jsx)(c.H5,{wrapper:(0,n.jsx)("span",{style:{display:"inline-block"}}),children:"Rejoins une partie"})})})]}),(0,n.jsx)(d.Z,{user:i,setUser:t})]}),(0,n.jsx)("div",{className:"join-container-form",children:(0,n.jsxs)("form",{children:[(0,n.jsxs)("div",{className:"join-container-form-input",children:[(0,n.jsx)("label",{htmlFor:"party-code",className:"text-20 text-ProzaLibre-SemiBold text-white",children:"Code la partie :"}),(0,n.jsx)("input",{type:"number",id:"party-code",className:"text-20 text-ProzaLibre-SemiBold text-white",value:u,onChange:e=>g(e.target.value),required:!0})]}),(0,n.jsx)(r(),{href:"create-party/".concat(u),className:"btn-reset btn-yellow",onClick:e=>m(),children:"Join"})]})})]})})})})};t.default=u},321:function(e,t,i){var n=i(5893);i(7294);var s=i(7521),l=i(5678),r=i(3695),a=i(4339),o=i(1163);let h=e=>{let{user:t,setUser:i}=e,h=(0,o.useRouter)(),p=()=>{let e=r.V.LogoutUser(i);if(200!==e.statusCode)return l.Am.error(e.message,{icon:"\uD83E\uDDD9",theme:"light"});l.Am.success(e.message,{icon:"\uD83E\uDDD9",theme:"light"}),h.push(a.F.getRoutes().HOME)};return(0,n.jsx)("div",{className:"position-badge",children:(0,n.jsx)(s.Z,{style:{width:"fit-content"},reset:!0,tiltReverse:!0,glareEnable:!0,glareReverse:!1,glareColor:"#FFF9F0",scale:1.2,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",glareBorderRadius:"20px",tiltMaxAngleX:40,tiltMaxAngleY:40,children:(0,n.jsx)("div",{className:"user-badge",children:(0,n.jsxs)("div",{className:"user-badge-container",children:[(0,n.jsxs)("div",{className:"info",children:[t?(0,n.jsx)("img",{src:"/images/"+t.house.name+".png"}):"",t?(0,n.jsx)("p",{className:"text-20 text-yellow text-ProzaLibre-SemiBold",children:t.name}):""]}),(0,n.jsx)("div",{className:"btn-logout",children:(0,n.jsx)("button",{className:"btn-reset btn-red btn-little",onClick:()=>p(),children:"Deconnexion"})})]})})})})};t.Z=h},7521:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(7294);let s=(e,t,i,n)=>{e.style.transition=`${t} ${i}ms ${n}`},l=(e,t,i)=>Math.min(Math.max(e,t),i);class r{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,n=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:n,height:n}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,n)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:n}=e;this.glareAngle=(i?Math.atan2(n,-i)*(180/Math.PI):0)-(t?180:0)},this.updateOpacity=(e,t,i,n)=>{let{xPercentage:s,yPercentage:r}=e,{glarePosition:a,glareReverse:o,glareMaxOpacity:h}=t,p=i?-1:1,c=n?-1:1,d=o?-1:1,u=0;switch(a){case"top":u=-s*p*d;break;case"right":u=r*c*d;break;case"bottom":case void 0:u=s*p*d;break;case"left":u=-r*c*d;break;case"all":u=Math.hypot(s,r)}let g=l(u,0,100);this.glareOpacity=g*h/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,n)}}class a{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:n}=e,{tiltMaxAngleX:s,tiltMaxAngleY:l}=t;this.tiltAngleX=i*s/100,this.tiltAngleY=-(n*l/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:s,tiltMaxAngleY:l}=t;(null!==i||null!==n)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/s,e.yPercentage=100*this.tiltAngleY/l)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=l(this.tiltAngleX,-90,90),this.tiltAngleY=l(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let o=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class h extends n.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{var e,t,i,n;return e=this,t=void 0,i=void 0,n=function*(){if(!window.DeviceOrientationEvent)return;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},new(i||(i=Promise))(function(s,l){function r(e){try{o(n.next(e))}catch(e){l(e)}}function a(e){try{o(n.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?s(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(r,a)}o((n=n.apply(e,t||[])).next())})},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":let{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:s,tiltMaxAngleY:r}=this.props;this.wrapperEl.clientPosition.xPercentage=l(i/s*100,-100,100),this.wrapperEl.clientPosition.yPercentage=l(n/r*100,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=l(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=l(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:i,y:n}=this.wrapperEl.clientPosition;e=n/window.innerHeight*200-100,t=i/window.innerWidth*200-100}else{let{size:{width:i,height:n,left:s,top:l},clientPosition:{x:r,y:a}}=this.wrapperEl;e=(a-l)/n*200-100,t=(r-s)/i*200-100}this.wrapperEl.clientPosition.xPercentage=l(e,-100,100),this.wrapperEl.clientPosition.yPercentage=l(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new a,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new r(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;s(this.wrapperEl.node,"all",e,t),this.glare&&s(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return n.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}h.defaultProps=o},619:function(e,t,i){var n=i(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}t.Z=function(e,t){void 0===t&&(t={});var l=t,r=l.volume,a=void 0===r?1:r,o=l.playbackRate,h=void 0===o?1:o,p=l.soundEnabled,c=void 0===p||p,d=l.interrupt,u=void 0!==d&&d,g=l.onload,v=function(e,t){if(null==e)return{};var i,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(i=l[n])>=0||(s[i]=e[i]);return s}(l,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),w=n.useRef(null),m=n.useRef(!1),E=n.useState(null),f=E[0],y=E[1],x=n.useState(null),A=x[0],b=x[1],P=function(){"function"==typeof g&&g.call(this),m.current&&y(1e3*this.duration()),b(this)};(0,n.useEffect)(function(){return i.e(766).then(i.t.bind(i,1766,23)).then(function(t){if(!m.current){var i;w.current=null!==(i=t.Howl)&&void 0!==i?i:t.default.Howl,m.current=!0,new w.current(s({src:Array.isArray(e)?e:[e],volume:a,rate:h,onload:P},v))}}),function(){m.current=!1}},[]),n.useEffect(function(){w.current&&A&&b(new w.current(s({src:Array.isArray(e)?e:[e],volume:a,onload:P},v)))},[JSON.stringify(e)]),n.useEffect(function(){A&&(A.volume(a),A.rate(h))},[a,h]);var M=n.useCallback(function(e){void 0===e&&(e={}),A&&(c||e.forceSoundEnabled)&&(u&&A.stop(),e.playbackRate&&A.rate(e.playbackRate),A.play(e.id))},[A,c,u]),j=n.useCallback(function(e){A&&A.stop(e)},[A]),L=n.useCallback(function(e){A&&A.pause(e)},[A]);return[M,{sound:A,stop:j,pause:L,duration:f}]}}}]);