(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Contacto_atlas_1", frames: [[0,769,876,762],[0,0,987,767],[878,769,512,512]]},
		{name:"Contacto_atlas_2", frames: [[0,0,2000,2000]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Logo = function() {
	this.initialize(ss["Contacto_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapa = function() {
	this.initialize(ss["Contacto_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Satelite = function() {
	this.initialize(ss["Contacto_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Sateliteicono = function() {
	this.initialize(ss["Contacto_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:22.9,y:85.25}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// Layer_1
	this.instance = new lib.Logo();
	this.instance.setTransform(-37,25,0.06,0.06);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,0,119.9,145);


(lib.Btn_Servicios = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Servicios", "bold 34px 'Verdana'", "#B6D094");
	this.text.lineHeight = 43;
	this.text.lineWidth = 171;
	this.text.parent = this;
	this.text.setTransform(34.5,54.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#291B12").s().p("AyvLuIAA3bMAlfAAAIAAXbg");
	this.shape.setTransform(120,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E1C06").s().p("AyvLuIAA3bMAlfAAAIAAXbg");
	this.shape_1.setTransform(120,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,150);


(lib.Btn_Nosotros = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Nosotros", "bold 34px 'Verdana'", "#B6D094");
	this.text.lineHeight = 43;
	this.text.lineWidth = 171;
	this.text.parent = this;
	this.text.setTransform(34.5,51.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#291B12").s().p("AyvLuIAA3bMAlfAAAIAAXbg");
	this.shape.setTransform(120,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E1C06").s().p("AyvLuIAA3bMAlfAAAIAAXbg");
	this.shape_1.setTransform(120,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,150);


(lib.Btn_Menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Menu", "bold 37px 'Verdana'", "#B6D094");
	this.text.lineHeight = 46;
	this.text.lineWidth = 111;
	this.text.parent = this;
	this.text.setTransform(32,52.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#291B12").s().p("AtqLuIAA3bIbVAAIAAXbg");
	this.shape.setTransform(87.5,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E1C06").s().p("AtqLuIAA3bIbVAAIAAXbg");
	this.shape_1.setTransform(87.5,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,150);


(lib.Btn_Inicio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Inicio", "bold 34px 'Verdana'", "#B6D094");
	this.text.lineHeight = 43;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(33.25,54.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#291B12").s().p("AtqLuIAA3bIbVAAIAAXbg");
	this.shape.setTransform(87.5,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E1C06").s().p("AtqLuIAA3bIbVAAIAAXbg");
	this.shape_1.setTransform(87.5,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,150);


(lib.Btn_Contactos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Contactos", "bold 33px 'Verdana'", "#B6D094");
	this.text.lineHeight = 42;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(34.5,54.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#291B12").s().p("Az6LuIAA3bMAn1AAAIAAXbg");
	this.shape.setTransform(127.5,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E1C06").s().p("Az6LuIAA3bMAn1AAAIAAXbg");
	this.shape_1.setTransform(127.5,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255,150);


(lib.Btn1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Sateliteicono();
	this.instance.setTransform(39,21,0.1687,0.1687);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApfHyQhtAAAAhtIAAsIQAAhuBtAAIS/AAQBtAAAABuIAAMIQAABthtAAg");
	this.shape.setTransform(85.475,64.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,92,102,0.498)").s().p("ApfHyQhtAAAAhtIAAsIQAAhuBtAAIS/AAQBtAAAABuIAAMIQAABthtAAg");
	this.shape_1.setTransform(85.475,64.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1}]},3).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9iAk/MAAAhJ9MB7FAAAMAAABJ9g");
	mask.setTransform(393.9,236.725);

	// Layer_2
	this.instance_1 = new lib.Mapa();
	this.instance_1.setTransform(-47,-95);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

	// Layer_3
	this.instance_2 = new lib.Satelite();
	this.instance_2.setTransform(-134,-82);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,787.8,473.5);


// stage content:
(lib.Contacto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		
		_this.Inicio.on('click', function(){
		
		window.open('index.html', '_self');
		});
		
		
		var _this = this;
		
		_this.Servicio.on('click', function(){
		
		window.open('Servicios.html', '_self');
		});
		
		
		var _this = this;
		
		_this.Nosotros.on('click', function(){
		
		window.open('Nosotros.html', '_self');
		});
		
		
		var _this = this;
		
		_this.Menu.on('click', function(){
		
		window.open('Menu.html', '_self');
		});
		
		
		
		var _this = this;
		
		_this.Contactos.on('click', function(){
		
		window.open('Contacto.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Navbar
	this.Contactos = new lib.Btn_Contactos();
	this.Contactos.name = "Contactos";
	this.Contactos.setTransform(1338.2,75,1,1,0,0,0,127.5,75);
	new cjs.ButtonHelper(this.Contactos, 0, 1, 1);

	this.Menu = new lib.Btn_Menu();
	this.Menu.name = "Menu";
	this.Menu.setTransform(1115.6,75,0.9933,1,0,0,0,85.5,75);
	new cjs.ButtonHelper(this.Menu, 0, 1, 1);

	this.Nosotros = new lib.Btn_Nosotros();
	this.Nosotros.name = "Nosotros";
	this.Nosotros.setTransform(905.7,75,1,1,0,0,0,120,75);
	new cjs.ButtonHelper(this.Nosotros, 0, 1, 1);

	this.Servicio = new lib.Btn_Servicios();
	this.Servicio.name = "Servicio";
	this.Servicio.setTransform(660.7,75,1,1,0,0,0,120,75);
	new cjs.ButtonHelper(this.Servicio, 0, 1, 1);

	this.Inicio = new lib.Btn_Inicio();
	this.Inicio.name = "Inicio";
	this.Inicio.setTransform(448.2,75,1,1,0,0,0,87.5,75);
	new cjs.ButtonHelper(this.Inicio, 0, 1, 1);

	this.instance = new lib.Logo_1("synched",0);
	this.instance.setTransform(22,17.35,1,1,0,0,0,-37,25.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#291B12").s().p("Eh4TALuIAA3bMDwnAAAIAAXbg");
	this.shape.setTransform(766.25,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.Inicio},{t:this.Servicio},{t:this.Nosotros},{t:this.Menu},{t:this.Contactos}]}).wait(1));

	// Layer_2
	this.text = new cjs.Text("Av. Sarasota #62, Santo Domingo 10111\n\n(849) 338-6067", "bold 35px 'Verdana'", "#291B12");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 559;
	this.text.parent = this;
	this.text.setTransform(1213.55,307.25);

	this.instance_1 = new lib.Btn1();
	this.instance_1.setTransform(429.3,425.35,1,1,0,0,0,393.9,236.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Btn1(), 3);

	this.text_1 = new cjs.Text("Contacto", "italic bold 60px 'Verdana'", "#005C66");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.lineWidth = 563;
	this.text_1.parent = this;
	this.text_1.setTransform(1215.4,174.8);
	this.text_1.shadow = new cjs.Shadow("rgba(8,126,139,1)",3,3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005C66").s().p("Egu3AAZIAAgxMBdvAAAIAAAxg");
	this.shape_1.setTransform(1214.75,260.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.instance_1},{t:this.text}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#291B12").s().p("EB3iALuMjv1AAAIAA3bMDwnAAAIAAXbg");
	this.shape_2.setTransform(770,75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6D4B8").s().p("Eh36ArrMAAAhXVMDv1AAAMAAABXVg");
	this.shape_3.setTransform(767.5,429.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(755.9,354.5,784.1,501.20000000000005);
// library properties:
lib.properties = {
	id: 'B8EA388DA96E4E42BE69304A07370207',
	width: 1535,
	height: 709,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Contacto_atlas_1.png?1778717335673", id:"Contacto_atlas_1"},
		{src:"images/Contacto_atlas_2.png?1778717335673", id:"Contacto_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B8EA388DA96E4E42BE69304A07370207'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;