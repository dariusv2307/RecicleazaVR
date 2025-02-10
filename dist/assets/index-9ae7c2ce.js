(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();var T={exports:{}};(function(t,e){(function(r,s){t.exports=s()})(window,function(){return function(a){var r={};function s(i){if(r[i])return r[i].exports;var n=r[i]={i,l:!1,exports:{}};return a[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=a,s.c=r,s.d=function(i,n,o){s.o(i,n)||Object.defineProperty(i,n,{enumerable:!0,get:o})},s.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,n){if(n&1&&(i=s(i)),n&8||n&4&&typeof i=="object"&&i&&i.__esModule)return i;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),n&2&&typeof i!="string")for(var l in i)s.d(o,l,(function(u){return i[u]}).bind(null,l));return o},s.n=function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(n,"a",n),n},s.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},s.p="",s(s.s="./index.js")}({"./index.js":function(a,r,s){var i=AFRAME.utils.styleParser;if(typeof AFRAME>"u")throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("event-set",{schema:{default:"",parse:function(o){return i.parse(o)}},multiple:!0,init:function(){this.eventHandler=null,this.eventName=null},update:function(o){this.removeEventListener(),this.updateEventListener(),this.addEventListener()},remove:function(){this.removeEventListener()},pause:function(){this.removeEventListener()},play:function(){this.addEventListener()},updateEventListener:function(){var o=this,l=this.data,u=this.el,b,p,y;b=l._event||this.id,p=l._target,y=p?u.sceneEl.querySelector(p):u,this.eventName=b;var E=function(){var c;for(c in l)c==="_event"||c==="_target"||AFRAME.utils.entity.setComponentProperty.call(o,y,c,l[c])};isNaN(l._delay)?this.eventHandler=E:this.eventHandler=function(){setTimeout(E,parseFloat(l._delay))}},addEventListener:function(){this.el.addEventListener(this.eventName,this.eventHandler)},removeEventListener:function(){this.el.removeEventListener(this.eventName,this.eventHandler)}})}})})})(T);AFRAME.registerTemplate("assets",()=>html`
    <a-sub-assets>
      <!-- Global -->
      <a-asset-item id="scene" src="/assets/models/scene.gltf"></a-asset-item>
      <img id="clouds" src="/assets/img/clouds.png" />
      <a-asset-item
        id="Roboto"
        src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"
      ></a-asset-item>
      <audio
        id="backgroundSound"
        src="/assets/sounds/suburb.wav"
        preload
      ></audio>
      <audio id="click" src="/assets/sounds/click.wav" preload></audio>
      <!-- Global -->
      <!-- Start Screen -->
     
      <!-- Start Screen -->
      <!-- Game Field -->
      <audio id="glassHit" src="/assets/sounds/glass-hit.wav" preload></audio>
      <audio
        id="plasticHit"
        src="/assets/sounds/plastic-hit.wav"
        preload
      ></audio>
      <audio id="metalHit" src="/assets/sounds/metal-hit.wav" preload></audio>
      <audio
        id="organicHit"
        src="/assets/sounds/plastic-hit.wav"
        preload
      ></audio>
      <audio id="paperHit" src="/assets/sounds/plastic-hit.wav" preload></audio>
      <audio id="levelUp" src="/assets/sounds/level-up.wav" preload></audio>
      <audio id="fail" src="/assets/sounds/fail.wav" preload></audio>
      <a-asset-item
        id="glass"
        src="/assets/models/glass_bottle.gltf"
      ></a-asset-item>
      <a-asset-item id="metal" src="/assets/models/can.gltf"></a-asset-item>
      <a-asset-item
        id="plastic"
        src="/assets/models/plastic_canister.gltf"
      ></a-asset-item>
      <a-asset-item id="organic" src="/assets/models/apple.gltf"></a-asset-item>
      <a-asset-item
        id="paper"
        src="/assets/models/carton_box.gltf"
      ></a-asset-item>
      <a-asset-item
        id="trash-bin"
        src="/assets/models/trash_bin.gltf"
      ></a-asset-item>
      <a-asset-item id="banner" src="/assets/models/banner.gltf"></a-asset-item>
      <img id="sign" src="/assets/img/recycle-sign.png" />
      <img id="heart" src="/assets/img/heart.jpg" />
      <img id="trashman" src="/assets/img/trashman.jpg" />
      <!-- Game Field -->
      <!-- How To Play -->
      <img id="dsktp" src="/assets/img/controls-dsktp.png" />
      <img id="hdst" src="/assets/img/controls-hdst.png" />
      <!-- How To Play -->
    </a-sub-assets>
  `);AFRAME.registerTemplate("mixins",()=>html`
    <a-sub-assets>
      <a-mixin id="controllers-left" laser-controls="hand: left"></a-mixin>
      <a-mixin id="controllers-right" laser-controls="hand: right"></a-mixin>
      <a-mixin
        id="point"
        raycaster="showLine: true; far: 5; objects: .dnd"
        collision-filter="collisionForces: false"
        static-body="shape: sphere; sphereRadius: 0.01"
        throw-controls
        super-hands="colliderEvent: raycaster-intersection;
                                colliderEventProperty: els;
                                colliderEndEvent: raycaster-intersection-cleared;
                                colliderEndEventProperty: clearedEls;"
      ></a-mixin>
    </a-sub-assets>
  `);const x=["PE LOCURI","FITI GATA","RECICLATI!"];AFRAME.registerTemplate("controls",()=>html`
    <a-entity id="controls" controls-checker>
      <a-camera
        id="camera"
        position="0 1.6 0"
        look-controls="pointerLockEnabled: true"
        restrict-position
      >
        <a-plane
          id="forceRange"
          color="red"
          height="0.1"
          width="10"
          position="0 1.55 -2"
          scale="0 1 0"
          animation="property: scale; from: 0 1 0; to: 1 1 0; dur: 2500; startEvents: force-range-start; pauseEvents: force-range-stop"
        ></a-plane>
        <a-entity
          tutorial
          text="align: center; width: 1.5; color: white; value:"
          position="0 0.1 -1.5"
        ></a-entity>
        <a-entity
          id="countdown"
          position="0 0 -1"
          countdown="text: ${x}; interval: 1000"
        ></a-entity>
      </a-camera>
    </a-entity>
  `);AFRAME.registerTemplate("environment",()=>html`
    <a-entity id="scene" gltf-model="#scene" loading></a-entity>
    <a-box
      id="floor"
      static-body
      floor-collider
      width="100"
      height="1"
      depth="100"
      position="0 -0.42 0"
      visible="false"
      material="color:#ccc"
      shadow="receive: true; cast: false;"
    ></a-box>
    <!-- <a-box sound="src: #glassCollide; volume: 0.1; on: floor-collided"></a-box> -->
    <a-sky color="#ABFFFF" src="#clouds"></a-sky>
  `);AFRAME.registerTemplate("lights",()=>html`
    <a-entity light="type: ambient; intensity: 0.7;"></a-entity>
    <a-entity
      light="type: directional; castShadow: false; intensity: 0.2;"
      position="-10 8 10"
    ></a-entity>
    <a-entity
      light="type: point; castShadow: false; intensity: 0.5;"
      position="0 0 5"
    ></a-entity>
  `);AFRAME.registerTemplate("sounds",()=>html`
    <a-sound
      src="#backgroundSound"
      autoplay="true"
      position="0 4 0"
      volume="0.1"
      loop="true"
    ></a-sound>
    <a-sound
      id="gameFieldSound"
      src="#levelUp"
      volume="0.1"
      poolSize="10"
    ></a-sound>
  `);AFRAME.registerTemplate("button",({text:t="BUTTON",position:e="0 1 -2",rotation:a="0 0 0",event:r,color:s="red",textColor:i="white",width:n=1,height:o=.5,opacity:l=1})=>html`
    <a-text
      position="${e}"
      rotation="${a}"
      align="center"
      value="${t}"
      color="${i}"
      material="color: ${i};"
      anime__down="property: scale; easing: easeInSine; from: 1 1 1; dur: 100; to: 0.9 0.9 0.9; startEvents: button-animation-down"
      anime__up="property: scale; easing: easeInSine; to: 1 1 1; dur: 100; from: 0.9 0.9 0.9; startEvents: button-animation-up"
    >
      <a-box
        class="dnd"
        hoverable
        event-emit__common="__event: mouseup; __emit: ${r}"
        event-emit__animation="__event: mousedown; __emit: button-animation-down;"
        event-emit__animation-up="__event: mouseup; __emit: button-animation-up;"
        event-set__hoveron="_event: hover-start; material.opacity: ${l-.3}; transparent: true"
        event-set__hoveroff="_event: hover-end; material.opacity: ${l}; transparent: false"
        material="color: ${s}; opacity: ${l}"
        position="0 0 -0.1"
        width="${n}"
        height="${o}"
        depth="0.1"
        sound="src: #click; on: mousedown; volume: 0.3"
      >
      </a-box>
    </a-text>
  `);AFRAME.registerTemplate("banner",()=>html`
    <a-entity id="banner">
      <a-entity
        id="bannerModel"
        gltf-model="#banner"
        scale="2.5 2.5 2.5"
        position="-0.3 3.5 -10"
      >
      </a-entity>
      <a-plane
        width="0.8"
        height="0.8"
        depth="0.15"
        color="#FFFFFF"
        src="#trashman"
        position="-6 5.4 -10"
        material="repeat:1 1; transparent:true"
      ></a-plane>

      <a-entity
        id="score"
        position="-0.6 5.38 -10"
        bind="text.value: score"
        text="align: left; width: 10; color: #00A105;"
      ></a-entity>

      <a-plane
        width="0.8"
        height="0.8"
        depth="0.15"
        color="#FFFFFF"
        src="#heart"
        position="5.3 5.4 -10"
        material="repeat:1 1; transparent:true"
      ></a-plane>
      <a-entity
        id="lives"
        position="-0.3 5.38 -10"
        bind="text.value: lives"
        text="align: right; width: 10; color: #C06060;"
      ></a-entity>

      <a-entity
        id="recycleText"
        position="-0.2 5.6 -10"
        text="align: center; width: 9; color: #4C4C4C; value: MARATON DE"
      ></a-entity>
      <a-entity
        id="marathonText"
        position="-0.2 5.2 -10"
        text="align: center; width: 10; color: #4C4C4C; value: RECICLARE"
      ></a-entity>
    </a-entity>
  `);AFRAME.registerTemplate("trash",({id:t,type:e,position:a,shape:r="shape: box; halfExtents: 0.07 0.15 0.07; offset: 0 0.02 0;",mass:s=4})=>html`
    <a-entity
      id="trash-${t}"
      body="type: dynamic; mass: ${s}; shape: none;"
      shape="${r}"
      grabbable
      draggable
      droppable
      class="dnd"
      trash="type: ${e}"
      gltf-model="#${e}"
      position="${a}"
    ></a-entity>
  `);AFRAME.registerTemplate("trash-bin",({type:t,position:e,scale:a="1.5 1.5 1.5"})=>{const s={glass:"STICLA",plastic:"PLASTIC",metal:"METAL",organic:"ORGANIC",paper:"HÂRTIE"}[t]||t.toUpperCase();return html`
      <a-entity
        id="trash-bin-${t}"
        position="${e}"
        trash-bin="type: ${t}"
        scale="${a}"
      >
        <a-box
          class="left"
          static-body
          position="-0.12 0.03 0"
          width="0.01"
          height="0.7"
          depth="0.4"
          rotation="0 3 4"
          material="transparent: true; opacity: 0"
        ></a-box>
        <a-box
          class="right"
          static-body
          position="0.13 0.03 0"
          width="0.01"
          height="0.5"
          depth="0.25"
          rotation="0 3 -4"
          material="transparent: true; opacity: 0"
          scale="${a}"
        ></a-box>
        <a-box
          class="forward"
          static-body
          position="0 0.03 0.13"
          width="0.25"
          height="0.47"
          depth="0.01"
          rotation="4 0 0"
          material="transparent: true; opacity: 0"
          scale="${a}"
        ></a-box>
        <a-box
          class="forward"
          static-body
          position="0 0.03 0.13"
          width="0.25"
          height="0.5"
          depth="0.01"
          rotation="4 0 0"
          material="transparent: true; opacity: 0"
          scale="${a}"
        ></a-box>
        <a-box
          class="back"
          static-body
          position="0 0.03 -0.13"
          width="0.25"
          height="0.47"
          depth="0.01"
          rotation="-4 0 0"
          material="transparent: true; opacity: 0"
          scale="${a}"
        ></a-box>
        <a-box
          class="collider"
          trash-bin-collider
          static-body
          collision-filter="collisionForces: false"
          position="0 0 0"
          width="0.2"
          height="0.1"
          depth="0.2"
          color="red"
          trasnparent="true"
          opacity="0"
        >
        </a-box>
        <a-entity class="model" gltf-model="#trash-bin" material="color: red">
          <a-entity
            position="0 0.15 0.15"
            text="align: center; width: 1; color: black; value:${s}; font: https://cdn.aframe.io/fonts/Roboto-msdf.json"
          ></a-entity>
          <a-plane
            position="0 0 0.14"
            width="0.15"
            height="0.15"
            depth="0.15"
            color="#FFFFFF"
            src="#sign"
            material="repeat:1 1; transparent:true"
          ></a-plane>
        </a-entity>
      </a-entity>
    `});AFRAME.registerTemplate("game-field",html`   
    <a-template
      name="button"
      options="text: IESI; position: 0 1 4; rotation: 0 180 0; event: stop-game"
    ></a-template>
    <a-entity
      id="indicator"
      indicator
      visible="false"
      position="0 1 -2"
      text="align: center; width: 4; color: #00A105; value: -1"
    ></a-entity>
    <a-entity game-field-manager></a-entity>
  `);AFRAME.registerTemplate("start-screen",html`
    <a-entity id="text" gltf-model="#text" position="2.1 0.4 -4"></a-entity>

    <a-template
      name="button"
      options="text: INCEPE; position: -0.15 1.2 -4; event: start-game; color: #5e9696"
    ></a-template>
    <a-template
      name="button"
      options="text: CUM SE JOACA; position: -0.15 0.6 -4; event: how-to-play; color: #5e9696; width: 1.6; opacity: 0"
    ></a-template>
  `);AFRAME.registerTemplate("game-over",html`
    <a-text
      position="0 2 -4"
      scale="2 2 2"
      align="center"
      value="JOC PIERDUT"
      color="white"
      material="color: white;"
    ></a-text>
    <a-text
      position="-0.5 1.6 -4"
      scale="1 1 1"
      align="center"
      value="SCORUL TAU: "
      color="white"
      material="color: white;"
    ></a-text>
    <a-text
      position="0.5 1.6 -4"
      scale="1 1 1"
      align="center"
      bind="text.value: score"
      color="white"
      material="color: white;"
    ></a-text>
    <a-template
      name="button"
      options="text: RESTART; position: 0 0.8 -4; event: start-game; color: #5e9696; width: 1.3"
    ></a-template>
  `);AFRAME.registerTemplate("how-to-play",html`
    <a-entity how-to-play>
      <a-plane
        id="hot-to-plane"
        position="0 2.5 -4"
        width="5"
        height="3"
        material="transparent: true;"
        src="#hdst"
      ></a-plane>
    </a-entity>
    <a-template
      name="button"
      options="text: INAPOI; position: 2 0.5 -4; event: back; color: #5e9696"
    ></a-template>
  `);const h={notStarted:"not-started",inProgress:"in-progress",finished:"finished"},g=[{type:"glass",color:"#61a17d"},{type:"plastic",color:"#4182DD"},{type:"metal",color:"#cb5d47"},{type:"organic",color:"#9d9eb8"},{type:"paper",color:"#c5cc1f"}];AFRAME.registerComponent("game-manager",{init(){this.startGame=this.startGame.bind(this),this.stopGame=this.stopGame.bind(this),this.gameOver=this.gameOver.bind(this),this.howToPlay=this.howToPlay.bind(this),this.back=this.back.bind(this),this.checkState=this.checkState.bind(this),this.el.addEventListener("start-game",this.startGame),this.el.addEventListener("stop-game",this.stopGame),this.el.addEventListener("back",this.back),this.el.addEventListener("how-to-play",this.howToPlay),this.el.addEventListener("stateupdate",this.checkState)},remove(){this.el.removeEventListener("start-game",this.startGame),this.el.removeEventListener("stop-game",this.stopGame),this.el.removeEventListener("stateupdate",this.checkState)},startGame(){h.notStarted===this.el.systems.state.state.gameState&&(this.clearState(),this.el.emit("setGameState",{gameState:h.inProgress}),this.el.systems.router.changeRoute("game-field"))},howToPlay(){this.el.systems.router.changeRoute("how-to-play")},back(){this.el.systems.router.changeRoute("start-screen")},stopGame(){h.inProgress===this.el.systems.state.state.gameState&&(this.el.emit("setGameState",{gameState:h.notStarted}),this.clear(),this.clearState(),this.el.systems.router.changeRoute("start-screen"))},gameOver(){h.inProgress===this.el.systems.state.state.gameState&&(this.el.emit("setGameState",{gameState:h.notStarted}),this.clear(),this.el.systems.router.changeRoute("game-over"))},clear(){this.el.emit("stop-countdown"),this.el.emit("drop-previous-level"),this.el.emit("setCurrentWave",{currentWave:0})},clearState(){this.el.emit("setScore",{score:0}),this.el.emit("setLives",{lives:10})},checkState(){h.inProgress===this.el.systems.state.state.gameState&&(this.el.systems.state.state.lives<1||this.el.systems.state.state.currentWave>=13)&&setTimeout(()=>{this.gameOver()},1e3)}});AFRAME.registerComponent("controls-checker",{schema:{headsetConnected:{type:"boolean"},isDesktop:{type:"boolean"},isMobile:{type:"boolean"},isGearVR:{type:"boolean"},isOculusGo:{type:"boolean"}},init(){this.headsetConnected=AFRAME.utils.device.checkHeadsetConnected(),this.headsetConnected&&window.ga&&window.ga("send","event","device","headset"),this.isMobile=AFRAME.utils.device.isMobile(),this.isDesktop=this.headsetConnected&&!this.isMobile,this.isMobileVR=AFRAME.utils.device.isMobileVR(),this.camera=document.getElementById("camera"),this.setupControls()},setupControls(){this.isDesktop||this.isMobileVR?(this.createHand("right"),this.createHand("left")):this.createCursor()},createHand(t){const e=document.createElement("a-entity");e.id=`${t}Hand`,e.setAttribute("mixin",`controllers-${t} point`),this.el.appendChild(e)},createCursor(){const t=document.getElementById("camera"),e=document.createElement("a-cursor");e.id="cursor",e.setAttribute("mixin","point"),e.setAttribute("material",{color:"#EAEAEC",shader:"flat"}),t.appendChild(e)}});const d={maxForce:7,waves:{waveCoefficient:.5,nextTrashDelay:4e3,bins:{startFrom:-2.5,gap:1,step:.5},trash:{startCount:10}}};AFRAME.registerComponent("throw-controls",{grabbed:null,force:3,startPosition:null,startForceAccumulationTime:0,keyIsDown:!1,pointerStartPosition:null,init(){this.pointer=this.el,this.camera=document.getElementById("camera"),this.forceRange=camera.querySelector("#forceRange"),this.keyDownHandler=this.keyDownHandler.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this),this.grabStart=this.grabStart.bind(this),this.grabEnd=this.grabEnd.bind(this),this.applyImpulse=this.applyImpulse.bind(this),this.trackPadDownHandler=this.trackPadDownHandler.bind(this),this.trackPadUpHandler=this.trackPadUpHandler.bind(this),this.bodyLoadedHandler=this.bodyLoadedHandler.bind(this),this.el.sceneEl.addEventListener("grab-start",this.grabStart),this.el.sceneEl.addEventListener("grab-end",this.grabEnd),this.pointer.addEventListener("buttondown",this.trackPadDownHandler),this.pointer.addEventListener("buttonup",this.trackPadUpHandler),document.body.addEventListener("keydown",this.keyDownHandler),document.body.addEventListener("keyup",this.keyUpHandler),this.pointer.addEventListener("body-loaded",this.bodyLoadedHandler)},remove(){this.el.sceneEl.removeEventListener("grab-start",this.grabStart),this.el.sceneEl.removeEventListener("grab-end",this.grabEnd),this.pointer.removeEventListener("trackpaddown",this.trackPadDownHandler),this.pointer.removeEventListener("trackpadup",this.trackPadUpHandler),document.body.removeEventListener("keydown",this.keyDownHandler),document.body.removeEventListener("keyup",this.keyUpHandler),this.pointer.removeEventListener("body-loaded",this.bodyLoadedHandler)},grabStart(t){t.detail&&(this.grabbed=t.detail.target)},grabEnd(t){this.grabbed=null},bodyLoadedHandler(t){this.pointerStartPosition=Object.assign({},this.pointer.object3D.position)},getZeroPosition(){return this.pointer.id==="cursor"?this.camera.object3D.position:this.pointer.object3D.position},keyDownHandler(t){t.keyCode===32&&!this.keyIsDown&&(this.startForceAccumulationTime=Date.now(),this.keyIsDown=!0,this.forceRange.emit("force-range-start"))},trackPadDownHandler(t){t.detail.id===4&&!this.keyIsDown&&(this.startForceAccumulationTime=Date.now(),this.keyIsDown=!0,this.forceRange.emit("force-range-start"))},keyUpHandler(t){this.force=0,t.keyCode===32&&(this.force=(Date.now()-this.startForceAccumulationTime)/1e3*2+2,this.force>d.maxForce&&(this.force=d.maxForce),this.applyImpulse(),this.forceGrabEnd(t),this.keyIsDown=!1,this.forceRange.emit("force-range-stop"),this.forceRange.object3D.scale.set(0,1,0))},trackPadUpHandler(t){this.force=0,t.detail.id===4&&(this.force=(Date.now()-this.startForceAccumulationTime)/1e3*2+2,this.force>d.maxForce&&(this.force=d.maxForce),this.applyImpulse(),this.keyIsDown=!1,this.forceRange.emit("force-range-stop"),this.forceRange.object3D.scale.set(0,1,0))},forceGrabEnd(t){this.pointer.components["super-hands"].onGrabEndButton(t)},applyImpulse(){if(!this.grabbed||!this.grabbed.body)return!1;const t=this.getZeroPosition(),e=this.grabbed.object3D.position,a=e.x-t.x,r=e.z-t.z,s=Math.sqrt(Math.pow(a,2)+Math.pow(r,2)),i=a/s*this.force,n=this.force,o=r/s*this.force;this.grabbed.body.velocity.set(i,n,o),this.el.sceneEl.emit("trash-thrown",{trash:this.grabbed})}});AFRAME.registerComponent("event-emit",{schema:{__event:{type:"string",default:""},__emit:{type:"string",default:""},args:{type:"array",value:[]}},multiple:!0,init(){if(!this.data.__event)throw new Error("__event is not set");if(!this.data.__emit)throw new Error("__emit event is not set");this.emitEvent=this.emitEvent.bind(this),this.el.addEventListener(this.data.__event,this.emitEvent)},remove(){this.el.removeEventListener(this.data.__event,this.emitEvent)},emitEvent(){this.el.emit(this.data.__emit,{args:this.data.args})}});AFRAME.registerComponent("countdown",{schema:{currentItem:{type:"number",default:0},text:{type:"array",default:[]},interval:{type:"number",default:500},animation:{type:"string",default:"property: scale; easing: easeInSine; from: 0 0 0; to: 2 2 2;"},textStyles:{type:"string",default:"align: center; width: 3; color: white; font: https://cdn.aframe.io/fonts/Roboto-msdf.json"},latestDelay:{type:"number",default:1e3}},init(){this.bindListeners(),this.setupAnimation(),this.styleText()},bindListeners(){this.start=this.start.bind(this),this.stop=this.stop.bind(this),this.runPhrase=this.runPhrase.bind(this),this.el.sceneEl.addEventListener("start-countdown",this.start),this.el.sceneEl.addEventListener("stop-countdown",this.stop)},remove(){this.el.sceneEl.removeEventListener("start-countdown",this.start),this.el.sceneEl.removeEventListener("stop-countdown",this.stop)},setupAnimation(){this.el.setAttribute("animation__scale",`${this.data.animation}dur: ${this.data.interval}; startEvents: countdown-run-phrase; pauseEvents: countdown-pause-phrase`)},styleText(){this.el.setAttribute("text",this.data.textStyles)},start(){this.el.emit("countdown-started"),this.interval=setInterval(this.runPhrase,this.data.interval)},runPhrase(){if(this.data.currentItem>=this.data.text.length)return this.stop();this.el.emit("countdown-run-phrase"),setTimeout(()=>{this.el.setAttribute("text",{value:this.data.text[this.data.currentItem]}),this.data.currentItem++},100)},stop(){this.data.currentItem=0,clearInterval(this.interval),this.el.emit("countdown-stopped"),setTimeout(()=>{this.el.setAttribute("text",{value:""})},this.data.latestDelay)}});const f=d.waves,m=f.bins,A=f.trash,L=function(t){return t<=3?3:t<=6?4:5},S=function(t){const e=L(t);return g.slice(0,e).map((a,r)=>{const s=m.startFrom-t*m.step,i=r%2?-1:1;let n=m.gap*i*(Math.floor(r/2)+r%2);return e%2===0&&(n+=m.gap/2),a.position=`${n} 0.4 ${s}`,a})};function C(t){const e=S(t);return{id:t,trashBins:e,trash:{count:A.startCount+Math.round((t-1)*A.startCount*f.waveCoefficient),types:e.map(a=>a.type),maxPosition:{x:1,y:1.5,z:1}}}}AFRAME.registerComponent("game-field-manager",{init(){this.trashSystem=this.el.sceneEl.systems.trash,this.trashBinSystem=this.el.sceneEl.systems["trash-bin"],this.countdown=this.el.sceneEl.querySelector("#countdown"),this.sound=this.el.sceneEl.querySelector("#gameFieldSound"),this.startWave=this.startWave.bind(this),this.startNextLevel=this.startNextLevel.bind(this),this.dropPreviousLevel=this.dropPreviousLevel.bind(this),this.levelUpSound=this.levelUpSound.bind(this),this.failSound=this.failSound.bind(this),this.el.sceneEl.addEventListener("countdown-stopped",this.startWave),this.el.sceneEl.addEventListener("start-next-level",this.startNextLevel),this.el.sceneEl.addEventListener("drop-previous-level",this.dropPreviousLevel),this.el.sceneEl.addEventListener("level-up-sound",this.levelUpSound),this.el.sceneEl.addEventListener("fail-sound",this.failSound),this.startNextLevel()},levelUpSound(){this.sound.setAttribute("sound",{src:"#levelUp"}),this.sound.components.sound.playSound()},failSound(){this.sound.setAttribute("sound",{src:"#fail"}),this.sound.components.sound.playSound()},remove(){this.el.sceneEl.removeEventListener("countdown-stopped",this.startWave),this.el.sceneEl.removeEventListener("start-next-level",this.startNextLevel),this.el.sceneEl.removeEventListener("drop-previous-level",this.dropPreviousLevel)},startNextLevel(){this.el.sceneEl.emit("increaseCurrentWave"),this.el.sceneEl.systems.state.state.currentWave>1?this.countdown.setAttribute("countdown",{text:[`NIVEL ${this.el.sceneEl.systems.state.state.currentWave}`,"FITI GATA!","RECICLEAZA!"]}):this.countdown.setAttribute("countdown",{text:["PE LOCURI","FITI GATA","RECICLATI!"]}),this.el.emit("start-countdown"),this.el.sceneEl.currentWaveConfig=C(this.el.sceneEl.systems.state.state.currentWave),this.initTrashBins(this.el.sceneEl.currentWaveConfig.trashBins)},dropPreviousLevel(){this.trashSystem.stopTrashWave(),this.trashSystem.dropTrash(),this.trashBinSystem.dropBins()},initTrashBins(t){this.trashBinSystem.createBins(t)},startWave(){if(this.el.sceneEl.systems.state.state.gameState!==h.inProgress)return!1;this.el.emit("start-wave",{currentWave:this.el.sceneEl.systems.state.state.currentWave}),this.trashSystem.startTrashWave()}});AFRAME.registerComponent("how-to-play",{schema:{},init(){setTimeout(()=>{this.checkDevice()},0)},checkDevice(){this.headsetConnected=AFRAME.utils.device.checkHeadsetConnected(),document.getElementById("hot-to-plane").setAttribute("src",this.headsetConnected?"#hdst":"#dsktp")}});AFRAME.registerComponent("trash-bin",{schema:{type:{type:"string",default:"paper"}},init(){this.system.registerBin(this),this.changeColor=this.changeColor.bind(this),this.model=this.el.querySelector(".model"),this.model.addEventListener("model-loaded",this.changeColor)},remove(){this.model.removeEventListener("model-loaded",this.changeColor)},changeColor(t){t.detail.model.traverse(e=>{e.isMesh&&(e.material.color=new THREE.Color(g.find(a=>a.type===this.data.type).color))})}});AFRAME.registerComponent("trash-bin-collider",{schema:{},init(){this.scene=this.el.sceneEl,this.collide=this.collide.bind(this),this.el.addEventListener("collide",this.collide)},collide(t){const e=t.detail.body.el;if(!e)return!1;const a=this.el.parentNode.getAttribute("trash-bin").type,r=e.getAttribute("trash").type;e.isTrash&&!e.isCollided&&(e.isCollided=!0,this.scene.systems.trash.removeTrash(e),a==r?(this.scene.emit("increaseScore",{points:10}),this.scene.emit("runIndicator",{text:"+10",textColor:"#40EA00",startPosition:e.getAttribute("position")}),this.scene.emit("level-up-sound")):(this.scene.emit("runIndicator",{text:"-1",textColor:"#FF7D7D",startPosition:e.getAttribute("position")}),this.scene.emit("decreaseLives",{points:1}),this.scene.emit("fail-sound")))}});AFRAME.registerComponent("indicator",{schema:{},init(){this.runIndicator=this.runIndicator.bind(this),this.el.sceneEl.addEventListener("runIndicator",this.runIndicator)},runIndicator(t){const{text:e,textColor:a,startPosition:r}=t.detail;this.el.setAttribute("text",{value:e,color:a}),this.el.setAttribute("position",r);const s=Object.assign({},r);s.y=s.y+1,this.el.setAttribute("animation",`property: position; from: ${r.x} ${r.y} ${r.z}; to: ${s.x} ${s.y} ${s.z}; dur: 500; startEvents: indicator-animation-start;`),setTimeout(()=>{this.el.setAttribute("visible",!0),this.el.emit("indicator-animation-start"),setTimeout(()=>{this.el.setAttribute("visible",!1)},500)})}});AFRAME.registerComponent("trash",{schema:{type:{type:"string",default:"paper"},timeout:{type:"number",default:1e4}},init(){this.nodes=[],this.el.isTrash=!0,this.system.registerTrash(this),this.setTimeout(),this.el.addEventListener("grab-start",()=>{this.el.sceneEl.emit("grab-start")})},onModelLoaded(t){t.detail.model.traverse(e=>{e.isMesh&&this.nodes.push(e)})},onHover(){this.nodes.forEach(t=>{t.material.transparent=!0,t.material.opacity=.5})},onHoverEnd(){this.nodes.forEach(t=>{t.material.transparent=!1,t.material.opacity=1})},setTimeout(){this.timeout=setTimeout(()=>{this&&this.el&&!this.el.isRemoved&&(this.system.removeTrash(this.el),this.el.sceneEl.emit("decreaseLives",{points:1}),this.el.sceneEl.emit("fail-sound"),this.el.sceneEl.emit("runIndicator",{src:"#heart_tpnt",text:"-1",textColor:"#FF7D7D",startPosition:this.el.getAttribute("position")}))},this.data.timeout)}});AFRAME.registerComponent("restrict-position",{schema:{},init:function(){this.active=!AFRAME.utils.device.checkHeadsetConnected(),this.radius=2},tick:function(t,e){if(!this.active)return;const a=new THREE.Vector3,r=this.el.object3D.position.y;a.copy(this.el.object3D.position),this.radius/a.length()<.98&&(a.multiplyScalar(this.radius/a.length()),this.el.setAttribute("position",{x:a.x,y:r,z:a.z}))}});AFRAME.registerComponent("to-camera",{schema:{},init(){this.camera=document.getElementById("camera"),this.clone=this.el.cloneNode(!0),this.clone.removeAttribute("to-camera"),this.clone.removeAttribute("data-route-id"),this.camera.appendChild(this.clone),this.el.setAttribute("visible","false")},remove(){this.camera.removeChild(this.clone)}});AFRAME.registerComponent("tutorial",{schema:{},init(){window.localStorage.getItem("recycle:isTutorialPassed")||(this.bindGameListeners=this.bindGameListeners.bind(this),this.removeGameListeners=this.removeGameListeners.bind(this),this.tutorialStart=this.tutorialStart.bind(this),this.grabStart=this.grabStart.bind(this),this.tutorialEnd=this.tutorialEnd.bind(this),this.headsetConnected=AFRAME.utils.device.checkHeadsetConnected(),this.el.sceneEl.addEventListener("start-game",this.bindGameListeners),this.el.sceneEl.addEventListener("stop-game",this.removeGameListeners),this.timeout=setTimeout(this.tutorialEnd,1e4*6*5))},remove(){this.removeGameListeners()},bindGameListeners(){this.el.sceneEl.addEventListener("start-wave",this.tutorialStart),this.el.sceneEl.addEventListener("grab-start",this.grabStart),this.el.sceneEl.addEventListener("trash-thrown",this.tutorialEnd)},tutorialStart(t){t.detail.currentWave===1&&setTimeout(()=>{const a=this.headsetConnected?"TRIGGER BUTTON":"LEFT MOUSE BUTTON";this.el.setAttribute("text",{value:`LUATI GUNOIUL CU ${a}`})},2e3)},grabStart(){const t=this.headsetConnected?"TOUCHPAD BUTTON":"SPACE";this.el.setAttribute("text",{value:`ARUNCATI GUNOIUL CU ${t}. TINE PENTRU A ARUNCA MAI MULT.`})},tutorialEnd(){window.localStorage.setItem("recycle:isTutorialPassed",!0),this.el.setAttribute("text",{value:""}),this.removeGameListeners()},removeGameListeners(){this.el.sceneEl.removeEventListener("start-wave",this.tutorialStart),this.el.sceneEl.removeEventListener("grab-start",this.grabStart),this.el.sceneEl.removeEventListener("trash-trowed",this.tutorialEnd)}});AFRAME.registerComponent("floor-collider",{schema:{},init(){this.scene=this.el.sceneEl,this.collide=this.collide.bind(this),this.sound=this.el.sceneEl.querySelector("#gameFieldSound"),this.el.addEventListener("collide",this.collide.bind(this))},collide(t){const e=t.detail.body.el;if(!e||e.isSounded)return!1;const a=e.getAttribute("trash").type;e.isSounded=!0,this.sound.setAttribute("sound",{src:`#${a}Hit`}),this.sound.components.sound.playSound(),this.el.emit("floor-collided"),setTimeout(()=>{e.isSounded=!1},500)}});AFRAME.registerState({initialState:{score:0,lives:10,gameState:h.notStarted,currentWave:0},handlers:{decreaseScore(t,e){t.score-=e.points},increaseScore(t,e){t.score+=e.points},setScore(t,e){t.score=e.score},setGameState(t,e){t.gameState=e.gameState},increaseCurrentWave(t,e){t.currentWave++},decreaseCurrentWave(t,e){t.currentWave--},setCurrentWave(t,e){t.currentWave=e.currentWave},decreaseLives(t,e){t.lives-=e.points},increaseLives(t,e){t.lives+=e.points},setLives(t,e){t.lives=e.lives}}});const w=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},v=function(t,e){return(Math.random()*(e-t)+t).toFixed(2)},F={plastic:"shape: box; halfExtents: 0.07 0.15 0.07; offset: 0 0.02 0;",metal:"shape: box; halfExtents: 0.06 0.10 0.06; offset: 0 0.02 0;",glass:"shape: box; halfExtents: 0.05 0.17 0.05; offset: 0 0.08 0;",organic:"shape: sphere; radius: 0.06; offset: 0 0 0;",paper:"shape: box; halfExtents: 0.07 0.07 0.07; offset: 0 0 0;"},R={plastic:3,metal:2,glass:5,organic:4,paper:1};AFRAME.registerSystem("trash",{levelTrash:0,trash:[],delay:0,timeout:null,init(){this.nextTrash=this.nextTrash.bind(this)},startTrashWave(){this.delay=4e3,this.nextTrash()},stopTrashWave(){clearTimeout(this.timeout),this.timeout=null,this.levelTrash=0},nextTrash(){this.levelTrash++,this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.levelTrash<=this.el.currentWaveConfig.trash.count?(this.createTrash(this.getRandomTrash()),this.timeout=setTimeout(this.nextTrash,this.delay),this.delay=d.waves.nextTrashDelay+w(-500,500)):(this.levelTrash=0,this.el.emit("drop-previous-level"),this.el.emit("increaseLives",{points:5}),setTimeout(()=>this.el.emit("start-next-level"),0))},getRandomTrash(){const t={};return t.type=this.el.currentWaveConfig.trash.types[w(0,this.el.currentWaveConfig.trash.types.length-1)],t.id=Date.now(),t.position=this.generateRandomPosition(this.el.currentWaveConfig.trash.maxPosition),t.color=g.find(e=>e.type===t.type).color,t.shape=F[t.type],t.mass=R[t.type],t},generateRandomPosition(t){return`${v(-t.x,t.x)} ${v(.5,t.y)} ${-v(.5,t.z)}`},createTrash(t){AFRAME.templates.trash.instance(t)},registerTrash(t){this.trash.push(t)},removeTrash(t){t.isRemoved=!0;const e=this.trash.findIndex(r=>r.el===t),a=this.trash[e];if(!a)return!1;clearTimeout(a.timeout),this.el.object3D.remove(a.el.object3D),setTimeout(()=>{a.el.parentNode.removeChild(a.el)}),this.trash.splice(e,1)},dropTrash(){this.trash.forEach(t=>{this.el.isRemoved=!0,t.el.parentNode.removeChild(t.el)}),this.trash=[]}});AFRAME.registerSystem("trash-bin",{bins:[],init(){this.createBin=this.createBin.bind(this)},createBins(t){t.forEach(this.createBin)},createBin(t){AFRAME.templates["trash-bin"].instance(t)},registerBin(t){this.bins.push(t)},dropBins(){this.bins.forEach(t=>{t.el.parentNode.removeChild(t.el)}),this.bins=[]}});
