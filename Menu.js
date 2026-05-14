(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Menu_atlas_1", frames: [[0,0,2000,2000]]}
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
	this.initialize(ss["Menu_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.menucapuccino = function() {
	this.initialize(img.menucapuccino);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,5760);


(lib.menuespresso = function() {
	this.initialize(img.menuespresso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5500,3667);


(lib.menufrappe = function() {
	this.initialize(img.menufrappe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5516,3677);


(lib.menulatte = function() {
	this.initialize(img.menulatte);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4153,4016);


(lib.menumacchiato = function() {
	this.initialize(img.menumacchiato);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4868,3187);


(lib.menumocha = function() {
	this.initialize(img.menumocha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5760,3840);


(lib.Mocha1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menumocha();
	this.instance.setTransform(-268.3,-178.85,0.0932,0.0932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.3,-178.8,536.7,357.70000000000005);


(lib.Macchiato = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menumacchiato();
	this.instance.setTransform(-106,-8,0.0667,0.0667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-8,324.6,212.5);


(lib.Latte2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menulatte();
	this.instance.setTransform(-115.4,-111.6,0.0556,0.0556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-111.6,230.8,223.2);


(lib.Latte1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menulatte();
	this.instance.setTransform(-115.4,-111.6,0.0556,0.0556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-111.6,230.8,223.2);


(lib.Frappe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menufrappe();
	this.instance.setTransform(-147,-59,0.0908,0.0908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-59,501,334);


(lib.Espresso2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menuespresso();
	this.instance.setTransform(-176.75,-117.85,0.0643,0.0643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.7,-117.8,353.5,235.7);


(lib.Espresso = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menuespresso();
	this.instance.setTransform(-176.75,-117.85,0.0643,0.0643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.7,-117.8,353.5,235.7);


(lib.Capucchino = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menucapuccino();
	this.instance.setTransform(-50,-152,0.0859,0.0859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-152,329.9,494.8);


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


(lib.LTRMocha = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Mocha", "italic bold 40px 'Georgia'", "#291B12");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-26.3,220,52.6);


(lib.LTRMacchiato = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Macchiato", "italic bold 35px 'Georgia'", "#291B12");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-26.3,220,43.8);


(lib.LTRLatte = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Latte", "italic bold 40px 'Georgia'", "#291B12");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-26.3,220,52.6);


(lib.LTRFrappe = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Frappe", "italic bold 40px 'Georgia'", "#291B12");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-26.3,220,52.6);


(lib.LTREspresso = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Espresso", "italic bold 40px 'Georgia'", "#291B12");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-26.3,220,52.6);


(lib.LTRCapucchino = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Capucchino", "italic bold 35px 'Georgia'", "#291B12");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-26.3,220,43.8);


(lib.Mocha2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menumocha();
	this.instance.setTransform(-268.3,-178.85,0.0932,0.0932);

	this.instance_1 = new lib.Latte2("synched",0);
	this.instance_1.setTransform(75.1,6.75);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.3,-178.8,536.7,357.70000000000005);


(lib.Mocha = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_4
	this.instance = new lib.LTRMocha("synched",0);
	this.instance.setTransform(100,98.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadInOut).wait(2));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag+PoQmEggkTkxQkSkyAAmiQAfmEEykUQEykSGjAAIABAAQGCAfETEyQETEyAAGjIAAABQgfGCkyETQkyETmiAAIgBAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9PoQlqg/kAk+QkAk/AAmoQA/lqE+kBQE/kAGoAAIABAAQFpA/EAE+QEBFAAAGnIAAABQg+FplAEAQk+EBmoAAIgBAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai7PoQlQhejulMQjulLAAmtQBelRFLjuQFNjuGsAAIACAAQFPBeDuFLQDuFNAAGsIAAACQheFPlMDuQlLDumtAAIgBAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj5PoQk3h9jblYQjclZAAmyIAAgBQB9k3FZjbQFYjcGzAAIABAAQE2B9DbFZQDcFYAAGzIAAABQh9E2lYDbQlaDcmxAAIgBAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Ak4PoQkdicjJllQjJlnAAm3IAAAAQCdkdFljKQFljJG4AAIABAAQEcCdDJFlQDKFmAAG3IAAABQicEclmDJQllDKm4AAIgBAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Al2PoQkDi8i3lxQi3l0AAm9IAAAAQC8kCFyi4QFyi3G9AAIABAAQEDC8C3FyQC3FzAAG9IAAAAQi7EDlzC3QlyC3m+AAIAAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Am1PoQjpjbikl/Qill/AAnDIAAgBQDbjoF/ilQF/ilHDAAIABAAQDpDbCkF/QClGAAAHCIAAABQjbDpl/CkQmAClnCAAIgBAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AnzPoQjPj6iSmMQiTmLAAnKIAAAAQD6jPGMiSQGMiTHIAAIABAAQDPD6CSGMQCTGMAAHJIAAAAQj6DPmMCSQmLCTnKAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AoyPoQi1kZiAmZQiAmZAAnOIAAgBQEai0GYiBQGZiAHOAAIABAAQC0EaCBGYQCAGZAAHOIAAABQkZC0maCBQmYCAnOAAIgBAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ApxPoQiak4hummQhummAAnUIAAAAQE5ibGlhuQGmhuHTAAIABAAQCcE5BtGlQBuGmAAHUIAAAAQk5CcmmBtQmlBunUAAIgBAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AqvPoQiBlYhbmzQhcmxAAnaIAAgBQFYiBGzhbQGyhcHZAAIABAAQCBFYBcGzQBbGzAAHZIAAAAQlXCBm0BcQmyBbnZAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArtPoQhnl2hKnBQhJm/AAneIAAgBQF3hnHAhKQG/hJHfAAIABAAQBnF3BJHAQBJHAAAHeIAAABQl3BnnABJQm/BJneAAIgBAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AssPoQhNmWg3nNQg3nMAAnkIAAgBQGXhNHNg3QHLg3HkAAIABAAQBNGXA3HNQA3HLAAHlQmWBNnOA3QnLA3nkAAIgBAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AtqPoQg0m1gknZQglnaAAnpIAAgBQG1g0HbgkQHZglHoAAIABAAQA0G1AlHbQAkHZAAHpQm1A0nbAlQnZAknoAAIgBAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AupPoQgZnUgSnnQgTnmAAnuIAAgCQHVgZHngSQHlgTHvAAIABAAQAZHVATHnQASHmAAHvQnUAZnoATQnmASntAAIgCAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:100}).wait(8).to({graphics:mask_graphics_8,x:100,y:100}).wait(1).to({graphics:mask_graphics_9,x:100,y:100}).wait(1).to({graphics:mask_graphics_10,x:100,y:100}).wait(1).to({graphics:mask_graphics_11,x:100,y:100}).wait(1).to({graphics:mask_graphics_12,x:100,y:100}).wait(1).to({graphics:mask_graphics_13,x:100,y:100}).wait(1).to({graphics:mask_graphics_14,x:100,y:100}).wait(1).to({graphics:mask_graphics_15,x:100,y:100}).wait(1).to({graphics:mask_graphics_16,x:100,y:100}).wait(1).to({graphics:mask_graphics_17,x:100,y:100}).wait(1).to({graphics:mask_graphics_18,x:100,y:100}).wait(1).to({graphics:mask_graphics_19,x:100,y:100}).wait(1).to({graphics:mask_graphics_20,x:100,y:100}).wait(1).to({graphics:mask_graphics_21,x:100,y:100}).wait(1).to({graphics:mask_graphics_22,x:100,y:100}).wait(1).to({graphics:mask_graphics_23,x:100,y:100}).wait(7));

	// Layer_5
	this.instance_1 = new lib.menumocha();
	this.instance_1.setTransform(-231,-90,0.0932,0.0932);

	this.instance_2 = new lib.Mocha1("synched",0);
	this.instance_2.setTransform(37.3,88.85);
	this.instance_2._off = true;

	this.instance_3 = new lib.Mocha2("synched",0,false);
	this.instance_3.setTransform(37.3,88.85);
	this.instance_3.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},17).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true,alpha:0.5,loop:false},17).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,220,200);


(lib.Macchiato_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_4
	this.instance_1 = new lib.LTRMacchiato("synched",0);
	this.instance_1.setTransform(100,98.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadInOut).wait(2));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag+PoQmEggkTkxQkSkyAAmiQAfmEEykUQEykSGjAAIABAAQGCAfETEyQETEyAAGjIAAABQgfGCkyETQkyETmiAAIgBAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9PoQlqg/kAk+QkAk/AAmoQA/lqE+kBQE/kAGoAAIABAAQFpA/EAE+QEBFAAAGnIAAABQg+FplAEAQk+EBmoAAIgBAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai7PoQlQhejulMQjulLAAmtQBelRFLjuQFNjuGsAAIACAAQFPBeDuFLQDuFNAAGsIAAACQheFPlMDuQlLDumtAAIgBAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj5PoQk3h9jblYQjclZAAmyIAAgBQB9k3FZjbQFYjcGzAAIABAAQE2B9DbFZQDcFYAAGzIAAABQh9E2lYDbQlaDcmxAAIgBAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Ak4PoQkdicjJllQjJlnAAm3IAAAAQCdkdFljKQFljJG4AAIABAAQEcCdDJFlQDKFmAAG3IAAABQicEclmDJQllDKm4AAIgBAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Al2PoQkDi8i3lxQi3l0AAm9IAAAAQC8kCFyi4QFyi3G9AAIABAAQEDC8C3FyQC3FzAAG9IAAAAQi7EDlzC3QlyC3m+AAIAAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Am1PoQjpjbikl/Qill/AAnDIAAgBQDbjoF/ilQF/ilHDAAIABAAQDpDbCkF/QClGAAAHCIAAABQjbDpl/CkQmAClnCAAIgBAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AnzPoQjPj6iSmMQiTmLAAnKIAAAAQD6jPGMiSQGMiTHIAAIABAAQDPD6CSGMQCTGMAAHJIAAAAQj6DPmMCSQmLCTnKAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AoyPoQi1kZiAmZQiAmZAAnOIAAgBQEai0GYiBQGZiAHOAAIABAAQC0EaCBGYQCAGZAAHOIAAABQkZC0maCBQmYCAnOAAIgBAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ApxPoQiak4hummQhummAAnUIAAAAQE5ibGlhuQGmhuHTAAIABAAQCcE5BtGlQBuGmAAHUIAAAAQk5CcmmBtQmlBunUAAIgBAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AqvPoQiBlYhbmzQhcmxAAnaIAAgBQFYiBGzhbQGyhcHZAAIABAAQCBFYBcGzQBbGzAAHZIAAAAQlXCBm0BcQmyBbnZAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArtPoQhnl2hKnBQhJm/AAneIAAgBQF3hnHAhKQG/hJHfAAIABAAQBnF3BJHAQBJHAAAHeIAAABQl3BnnABJQm/BJneAAIgBAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AssPoQhNmWg3nNQg3nMAAnkIAAgBQGXhNHNg3QHLg3HkAAIABAAQBNGXA3HNQA3HLAAHlQmWBNnOA3QnLA3nkAAIgBAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AtqPoQg0m1gknZQglnaAAnpIAAgBQG1g0HbgkQHZglHoAAIABAAQA0G1AlHbQAkHZAAHpQm1A0nbAlQnZAknoAAIgBAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AupPoQgZnUgSnnQgTnmAAnuIAAgCQHVgZHngSQHlgTHvAAIABAAQAZHVATHnQASHmAAHvQnUAZnoATQnmASntAAIgCAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:100}).wait(8).to({graphics:mask_graphics_8,x:100,y:100}).wait(1).to({graphics:mask_graphics_9,x:100,y:100}).wait(1).to({graphics:mask_graphics_10,x:100,y:100}).wait(1).to({graphics:mask_graphics_11,x:100,y:100}).wait(1).to({graphics:mask_graphics_12,x:100,y:100}).wait(1).to({graphics:mask_graphics_13,x:100,y:100}).wait(1).to({graphics:mask_graphics_14,x:100,y:100}).wait(1).to({graphics:mask_graphics_15,x:100,y:100}).wait(1).to({graphics:mask_graphics_16,x:100,y:100}).wait(1).to({graphics:mask_graphics_17,x:100,y:100}).wait(1).to({graphics:mask_graphics_18,x:100,y:100}).wait(1).to({graphics:mask_graphics_19,x:100,y:100}).wait(1).to({graphics:mask_graphics_20,x:100,y:100}).wait(1).to({graphics:mask_graphics_21,x:100,y:100}).wait(1).to({graphics:mask_graphics_22,x:100,y:100}).wait(1).to({graphics:mask_graphics_23,x:100,y:100}).wait(7));

	// Layer_5
	this.instance_2 = new lib.menumacchiato();
	this.instance_2.setTransform(-106,-8,0.0667,0.0667);

	this.instance_3 = new lib.Macchiato("synched",0);
	this.instance_3.setTransform(0,0.1,0.9973,0.9972,0,0,0,0,0.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},17).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:0,alpha:0.5,loop:false},17).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,220,200);


(lib.Latte = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_4
	this.instance = new lib.LTRLatte("synched",0);
	this.instance.setTransform(100,98.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadInOut).wait(2));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag+PoQmEggkTkxQkSkyAAmiQAfmEEykUQEykSGjAAIABAAQGCAfETEyQETEyAAGjIAAABQgfGCkyETQkyETmiAAIgBAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9PoQlqg/kAk+QkAk/AAmoQA/lqE+kBQE/kAGoAAIABAAQFpA/EAE+QEBFAAAGnIAAABQg+FplAEAQk+EBmoAAIgBAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai7PoQlQhejulMQjulLAAmtQBelRFLjuQFNjuGsAAIACAAQFPBeDuFLQDuFNAAGsIAAACQheFPlMDuQlLDumtAAIgBAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj5PoQk3h9jblYQjclZAAmyIAAgBQB9k3FZjbQFYjcGzAAIABAAQE2B9DbFZQDcFYAAGzIAAABQh9E2lYDbQlaDcmxAAIgBAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Ak4PoQkdicjJllQjJlnAAm3IAAAAQCdkdFljKQFljJG4AAIABAAQEcCdDJFlQDKFmAAG3IAAABQicEclmDJQllDKm4AAIgBAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Al2PoQkDi8i3lxQi3l0AAm9IAAAAQC8kCFyi4QFyi3G9AAIABAAQEDC8C3FyQC3FzAAG9IAAAAQi7EDlzC3QlyC3m+AAIAAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Am1PoQjpjbikl/Qill/AAnDIAAgBQDbjoF/ilQF/ilHDAAIABAAQDpDbCkF/QClGAAAHCIAAABQjbDpl/CkQmAClnCAAIgBAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AnzPoQjPj6iSmMQiTmLAAnKIAAAAQD6jPGMiSQGMiTHIAAIABAAQDPD6CSGMQCTGMAAHJIAAAAQj6DPmMCSQmLCTnKAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AoyPoQi1kZiAmZQiAmZAAnOIAAgBQEai0GYiBQGZiAHOAAIABAAQC0EaCBGYQCAGZAAHOIAAABQkZC0maCBQmYCAnOAAIgBAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ApxPoQiak4hummQhummAAnUIAAAAQE5ibGlhuQGmhuHTAAIABAAQCcE5BtGlQBuGmAAHUIAAAAQk5CcmmBtQmlBunUAAIgBAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AqvPoQiBlYhbmzQhcmxAAnaIAAgBQFYiBGzhbQGyhcHZAAIABAAQCBFYBcGzQBbGzAAHZIAAAAQlXCBm0BcQmyBbnZAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArtPoQhnl2hKnBQhJm/AAneIAAgBQF3hnHAhKQG/hJHfAAIABAAQBnF3BJHAQBJHAAAHeIAAABQl3BnnABJQm/BJneAAIgBAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AssPoQhNmWg3nNQg3nMAAnkIAAgBQGXhNHNg3QHLg3HkAAIABAAQBNGXA3HNQA3HLAAHlQmWBNnOA3QnLA3nkAAIgBAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AtqPoQg0m1gknZQglnaAAnpIAAgBQG1g0HbgkQHZglHoAAIABAAQA0G1AlHbQAkHZAAHpQm1A0nbAlQnZAknoAAIgBAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AupPoQgZnUgSnnQgTnmAAnuIAAgCQHVgZHngSQHlgTHvAAIABAAQAZHVATHnQASHmAAHvQnUAZnoATQnmASntAAIgCAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:100}).wait(8).to({graphics:mask_graphics_8,x:100,y:100}).wait(1).to({graphics:mask_graphics_9,x:100,y:100}).wait(1).to({graphics:mask_graphics_10,x:100,y:100}).wait(1).to({graphics:mask_graphics_11,x:100,y:100}).wait(1).to({graphics:mask_graphics_12,x:100,y:100}).wait(1).to({graphics:mask_graphics_13,x:100,y:100}).wait(1).to({graphics:mask_graphics_14,x:100,y:100}).wait(1).to({graphics:mask_graphics_15,x:100,y:100}).wait(1).to({graphics:mask_graphics_16,x:100,y:100}).wait(1).to({graphics:mask_graphics_17,x:100,y:100}).wait(1).to({graphics:mask_graphics_18,x:100,y:100}).wait(1).to({graphics:mask_graphics_19,x:100,y:100}).wait(1).to({graphics:mask_graphics_20,x:100,y:100}).wait(1).to({graphics:mask_graphics_21,x:100,y:100}).wait(1).to({graphics:mask_graphics_22,x:100,y:100}).wait(1).to({graphics:mask_graphics_23,x:100,y:100}).wait(7));

	// Layer_5
	this.instance_1 = new lib.menulatte();
	this.instance_1.setTransform(-3,-16,0.0556,0.0556);

	this.instance_2 = new lib.Latte1("synched",0);
	this.instance_2.setTransform(112.4,95.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Latte2("synched",0);
	this.instance_3.setTransform(112.4,95.6);
	this.instance_3.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},17).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true,alpha:0.5},17).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,220,200);


(lib.Frappe_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_4
	this.instance_1 = new lib.LTRFrappe("synched",0);
	this.instance_1.setTransform(100,98.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadInOut).wait(2));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag+PoQmEggkTkxQkSkyAAmiQAfmEEykUQEykSGjAAIABAAQGCAfETEyQETEyAAGjIAAABQgfGCkyETQkyETmiAAIgBAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9PoQlqg/kAk+QkAk/AAmoQA/lqE+kBQE/kAGoAAIABAAQFpA/EAE+QEBFAAAGnIAAABQg+FplAEAQk+EBmoAAIgBAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai7PoQlQhejulMQjulLAAmtQBelRFLjuQFNjuGsAAIACAAQFPBeDuFLQDuFNAAGsIAAACQheFPlMDuQlLDumtAAIgBAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj5PoQk3h9jblYQjclZAAmyIAAgBQB9k3FZjbQFYjcGzAAIABAAQE2B9DbFZQDcFYAAGzIAAABQh9E2lYDbQlaDcmxAAIgBAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Ak4PoQkdicjJllQjJlnAAm3IAAAAQCdkdFljKQFljJG4AAIABAAQEcCdDJFlQDKFmAAG3IAAABQicEclmDJQllDKm4AAIgBAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Al2PoQkDi8i3lxQi3l0AAm9IAAAAQC8kCFyi4QFyi3G9AAIABAAQEDC8C3FyQC3FzAAG9IAAAAQi7EDlzC3QlyC3m+AAIAAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Am1PoQjpjbikl/Qill/AAnDIAAgBQDbjoF/ilQF/ilHDAAIABAAQDpDbCkF/QClGAAAHCIAAABQjbDpl/CkQmAClnCAAIgBAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AnzPoQjPj6iSmMQiTmLAAnKIAAAAQD6jPGMiSQGMiTHIAAIABAAQDPD6CSGMQCTGMAAHJIAAAAQj6DPmMCSQmLCTnKAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AoyPoQi1kZiAmZQiAmZAAnOIAAgBQEai0GYiBQGZiAHOAAIABAAQC0EaCBGYQCAGZAAHOIAAABQkZC0maCBQmYCAnOAAIgBAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ApxPoQiak4hummQhummAAnUIAAAAQE5ibGlhuQGmhuHTAAIABAAQCcE5BtGlQBuGmAAHUIAAAAQk5CcmmBtQmlBunUAAIgBAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AqvPoQiBlYhbmzQhcmxAAnaIAAgBQFYiBGzhbQGyhcHZAAIABAAQCBFYBcGzQBbGzAAHZIAAAAQlXCBm0BcQmyBbnZAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArtPoQhnl2hKnBQhJm/AAneIAAgBQF3hnHAhKQG/hJHfAAIABAAQBnF3BJHAQBJHAAAHeIAAABQl3BnnABJQm/BJneAAIgBAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AssPoQhNmWg3nNQg3nMAAnkIAAgBQGXhNHNg3QHLg3HkAAIABAAQBNGXA3HNQA3HLAAHlQmWBNnOA3QnLA3nkAAIgBAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AtqPoQg0m1gknZQglnaAAnpIAAgBQG1g0HbgkQHZglHoAAIABAAQA0G1AlHbQAkHZAAHpQm1A0nbAlQnZAknoAAIgBAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AupPoQgZnUgSnnQgTnmAAnuIAAgCQHVgZHngSQHlgTHvAAIABAAQAZHVATHnQASHmAAHvQnUAZnoATQnmASntAAIgCAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:100}).wait(8).to({graphics:mask_graphics_8,x:100,y:100}).wait(1).to({graphics:mask_graphics_9,x:100,y:100}).wait(1).to({graphics:mask_graphics_10,x:100,y:100}).wait(1).to({graphics:mask_graphics_11,x:100,y:100}).wait(1).to({graphics:mask_graphics_12,x:100,y:100}).wait(1).to({graphics:mask_graphics_13,x:100,y:100}).wait(1).to({graphics:mask_graphics_14,x:100,y:100}).wait(1).to({graphics:mask_graphics_15,x:100,y:100}).wait(1).to({graphics:mask_graphics_16,x:100,y:100}).wait(1).to({graphics:mask_graphics_17,x:100,y:100}).wait(1).to({graphics:mask_graphics_18,x:100,y:100}).wait(1).to({graphics:mask_graphics_19,x:100,y:100}).wait(1).to({graphics:mask_graphics_20,x:100,y:100}).wait(1).to({graphics:mask_graphics_21,x:100,y:100}).wait(1).to({graphics:mask_graphics_22,x:100,y:100}).wait(1).to({graphics:mask_graphics_23,x:100,y:100}).wait(7));

	// Layer_5
	this.instance_2 = new lib.menufrappe();
	this.instance_2.setTransform(-147,-59,0.0908,0.0908);

	this.instance_3 = new lib.Frappe("synched",0);
	this.instance_3.setTransform(0,0.1,0.9973,0.9972,0,0,0,0,0.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},17).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:0,alpha:0.5,loop:false},17).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,220,200);


(lib.Espresso_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_4
	this.instance_1 = new lib.LTREspresso("synched",0);
	this.instance_1.setTransform(100,98.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadInOut).wait(2));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag+PoQmEggkTkxQkSkyAAmiQAfmEEykUQEykSGjAAIABAAQGCAfETEyQETEyAAGjIAAABQgfGCkyETQkyETmiAAIgBAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9PoQlqg/kAk+QkAk/AAmoQA/lqE+kBQE/kAGoAAIABAAQFpA/EAE+QEBFAAAGnIAAABQg+FplAEAQk+EBmoAAIgBAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai7PoQlQhejulMQjulLAAmtQBelRFLjuQFNjuGsAAIACAAQFPBeDuFLQDuFNAAGsIAAACQheFPlMDuQlLDumtAAIgBAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj5PoQk3h9jblYQjclZAAmyIAAgBQB9k3FZjbQFYjcGzAAIABAAQE2B9DbFZQDcFYAAGzIAAABQh9E2lYDbQlaDcmxAAIgBAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Ak4PoQkdicjJllQjJlnAAm3IAAAAQCdkdFljKQFljJG4AAIABAAQEcCdDJFlQDKFmAAG3IAAABQicEclmDJQllDKm4AAIgBAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Al2PoQkDi8i3lxQi3l0AAm9IAAAAQC8kCFyi4QFyi3G9AAIABAAQEDC8C3FyQC3FzAAG9IAAAAQi7EDlzC3QlyC3m+AAIAAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Am1PoQjpjbikl/Qill/AAnDIAAgBQDbjoF/ilQF/ilHDAAIABAAQDpDbCkF/QClGAAAHCIAAABQjbDpl/CkQmAClnCAAIgBAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AnzPoQjPj6iSmMQiTmLAAnKIAAAAQD6jPGMiSQGMiTHIAAIABAAQDPD6CSGMQCTGMAAHJIAAAAQj6DPmMCSQmLCTnKAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AoyPoQi1kZiAmZQiAmZAAnOIAAgBQEai0GYiBQGZiAHOAAIABAAQC0EaCBGYQCAGZAAHOIAAABQkZC0maCBQmYCAnOAAIgBAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ApxPoQiak4hummQhummAAnUIAAAAQE5ibGlhuQGmhuHTAAIABAAQCcE5BtGlQBuGmAAHUIAAAAQk5CcmmBtQmlBunUAAIgBAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AqvPoQiBlYhbmzQhcmxAAnaIAAgBQFYiBGzhbQGyhcHZAAIABAAQCBFYBcGzQBbGzAAHZIAAAAQlXCBm0BcQmyBbnZAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArtPoQhnl2hKnBQhJm/AAneIAAgBQF3hnHAhKQG/hJHfAAIABAAQBnF3BJHAQBJHAAAHeIAAABQl3BnnABJQm/BJneAAIgBAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AssPoQhNmWg3nNQg3nMAAnkIAAgBQGXhNHNg3QHLg3HkAAIABAAQBNGXA3HNQA3HLAAHlQmWBNnOA3QnLA3nkAAIgBAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AtqPoQg0m1gknZQglnaAAnpIAAgBQG1g0HbgkQHZglHoAAIABAAQA0G1AlHbQAkHZAAHpQm1A0nbAlQnZAknoAAIgBAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AupPoQgZnUgSnnQgTnmAAnuIAAgCQHVgZHngSQHlgTHvAAIABAAQAZHVATHnQASHmAAHvQnUAZnoATQnmASntAAIgCAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:100}).wait(8).to({graphics:mask_graphics_8,x:100,y:100}).wait(1).to({graphics:mask_graphics_9,x:100,y:100}).wait(1).to({graphics:mask_graphics_10,x:100,y:100}).wait(1).to({graphics:mask_graphics_11,x:100,y:100}).wait(1).to({graphics:mask_graphics_12,x:100,y:100}).wait(1).to({graphics:mask_graphics_13,x:100,y:100}).wait(1).to({graphics:mask_graphics_14,x:100,y:100}).wait(1).to({graphics:mask_graphics_15,x:100,y:100}).wait(1).to({graphics:mask_graphics_16,x:100,y:100}).wait(1).to({graphics:mask_graphics_17,x:100,y:100}).wait(1).to({graphics:mask_graphics_18,x:100,y:100}).wait(1).to({graphics:mask_graphics_19,x:100,y:100}).wait(1).to({graphics:mask_graphics_20,x:100,y:100}).wait(1).to({graphics:mask_graphics_21,x:100,y:100}).wait(1).to({graphics:mask_graphics_22,x:100,y:100}).wait(1).to({graphics:mask_graphics_23,x:100,y:100}).wait(7));

	// Layer_5
	this.instance_2 = new lib.menuespresso();
	this.instance_2.setTransform(-22,-17,0.0643,0.0643);

	this.instance_3 = new lib.Espresso2("synched",0);
	this.instance_3.setTransform(154.75,100.85);
	this.instance_3._off = true;

	this.instance_4 = new lib.Espresso("synched",0);
	this.instance_4.setTransform(154.75,100.85);
	this.instance_4.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},17).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true,alpha:0.5},17).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,220,200);


(lib.Capucchino_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_4
	this.instance_1 = new lib.LTRCapucchino("synched",0);
	this.instance_1.setTransform(100,98.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadInOut).wait(2));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag+PoQmEggkTkxQkSkyAAmiQAfmEEykUQEykSGjAAIABAAQGCAfETEyQETEyAAGjIAAABQgfGCkyETQkyETmiAAIgBAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9PoQlqg/kAk+QkAk/AAmoQA/lqE+kBQE/kAGoAAIABAAQFpA/EAE+QEBFAAAGnIAAABQg+FplAEAQk+EBmoAAIgBAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai7PoQlQhejulMQjulLAAmtQBelRFLjuQFNjuGsAAIACAAQFPBeDuFLQDuFNAAGsIAAACQheFPlMDuQlLDumtAAIgBAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj5PoQk3h9jblYQjclZAAmyIAAgBQB9k3FZjbQFYjcGzAAIABAAQE2B9DbFZQDcFYAAGzIAAABQh9E2lYDbQlaDcmxAAIgBAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Ak4PoQkdicjJllQjJlnAAm3IAAAAQCdkdFljKQFljJG4AAIABAAQEcCdDJFlQDKFmAAG3IAAABQicEclmDJQllDKm4AAIgBAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Al2PoQkDi8i3lxQi3l0AAm9IAAAAQC8kCFyi4QFyi3G9AAIABAAQEDC8C3FyQC3FzAAG9IAAAAQi7EDlzC3QlyC3m+AAIAAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Am1PoQjpjbikl/Qill/AAnDIAAgBQDbjoF/ilQF/ilHDAAIABAAQDpDbCkF/QClGAAAHCIAAABQjbDpl/CkQmAClnCAAIgBAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AnzPoQjPj6iSmMQiTmLAAnKIAAAAQD6jPGMiSQGMiTHIAAIABAAQDPD6CSGMQCTGMAAHJIAAAAQj6DPmMCSQmLCTnKAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AoyPoQi1kZiAmZQiAmZAAnOIAAgBQEai0GYiBQGZiAHOAAIABAAQC0EaCBGYQCAGZAAHOIAAABQkZC0maCBQmYCAnOAAIgBAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ApxPoQiak4hummQhummAAnUIAAAAQE5ibGlhuQGmhuHTAAIABAAQCcE5BtGlQBuGmAAHUIAAAAQk5CcmmBtQmlBunUAAIgBAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AqvPoQiBlYhbmzQhcmxAAnaIAAgBQFYiBGzhbQGyhcHZAAIABAAQCBFYBcGzQBbGzAAHZIAAAAQlXCBm0BcQmyBbnZAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArtPoQhnl2hKnBQhJm/AAneIAAgBQF3hnHAhKQG/hJHfAAIABAAQBnF3BJHAQBJHAAAHeIAAABQl3BnnABJQm/BJneAAIgBAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AssPoQhNmWg3nNQg3nMAAnkIAAgBQGXhNHNg3QHLg3HkAAIABAAQBNGXA3HNQA3HLAAHlQmWBNnOA3QnLA3nkAAIgBAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AtqPoQg0m1gknZQglnaAAnpIAAgBQG1g0HbgkQHZglHoAAIABAAQA0G1AlHbQAkHZAAHpQm1A0nbAlQnZAknoAAIgBAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AupPoQgZnUgSnnQgTnmAAnuIAAgCQHVgZHngSQHlgTHvAAIABAAQAZHVATHnQASHmAAHvQnUAZnoATQnmASntAAIgCAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:100}).wait(8).to({graphics:mask_graphics_8,x:100,y:100}).wait(1).to({graphics:mask_graphics_9,x:100,y:100}).wait(1).to({graphics:mask_graphics_10,x:100,y:100}).wait(1).to({graphics:mask_graphics_11,x:100,y:100}).wait(1).to({graphics:mask_graphics_12,x:100,y:100}).wait(1).to({graphics:mask_graphics_13,x:100,y:100}).wait(1).to({graphics:mask_graphics_14,x:100,y:100}).wait(1).to({graphics:mask_graphics_15,x:100,y:100}).wait(1).to({graphics:mask_graphics_16,x:100,y:100}).wait(1).to({graphics:mask_graphics_17,x:100,y:100}).wait(1).to({graphics:mask_graphics_18,x:100,y:100}).wait(1).to({graphics:mask_graphics_19,x:100,y:100}).wait(1).to({graphics:mask_graphics_20,x:100,y:100}).wait(1).to({graphics:mask_graphics_21,x:100,y:100}).wait(1).to({graphics:mask_graphics_22,x:100,y:100}).wait(1).to({graphics:mask_graphics_23,x:100,y:100}).wait(7));

	// Layer_5
	this.instance_2 = new lib.menucapuccino();
	this.instance_2.setTransform(-50,-152,0.0859,0.0859);

	this.instance_3 = new lib.Capucchino("synched",0);
	this.instance_3.setTransform(0,0.1,0.9973,0.9972,0,0,0,0,0.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},17).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:0,alpha:0.5,loop:false},17).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,220,200);


(lib.BotonMocha = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Mocha();
	this.instance.setTransform(95.8,67.8,1,1,0,0,0,95.8,67.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	mask.setTransform(100,100);

	// Layer_2
	this.instance_1 = new lib.menumocha();
	this.instance_1.setTransform(-231,-90,0.0932,0.0932);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231,-90,536.7,357.8);


(lib.BotonMacchiato = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Macchiato_1();
	this.instance.setTransform(95.8,67.8,1,1,0,0,0,95.8,67.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	mask.setTransform(100,100);

	// Layer_2
	this.instance_1 = new lib.menumacchiato();
	this.instance_1.setTransform(-106,-8,0.0667,0.0667);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-8,324.6,212.5);


(lib.BotonLatte = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Latte();
	this.instance.setTransform(95.8,67.8,1,1,0,0,0,95.8,67.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	mask.setTransform(100,100);

	// Layer_2
	this.instance_1 = new lib.menulatte();
	this.instance_1.setTransform(-3,-16,0.0556,0.0556);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-16,230.8,223.2);


(lib.BotonFrappe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Frappe_1();
	this.instance.setTransform(95.8,67.8,1,1,0,0,0,95.8,67.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	mask.setTransform(100,100);

	// Layer_2
	this.instance_1 = new lib.menufrappe();
	this.instance_1.setTransform(-147,-59,0.0908,0.0908);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-59,501,334);


(lib.Botonespresso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Espresso_1();
	this.instance.setTransform(95.8,67.8,1,1,0,0,0,95.8,67.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	mask.setTransform(100,100);

	// Layer_2
	this.instance_1 = new lib.menuespresso();
	this.instance_1.setTransform(-22,-17,0.0643,0.0643);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-17,353.5,235.7);


(lib.BotonCapucchino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Capucchino_1();
	this.instance.setTransform(95.8,67.8,1,1,0,0,0,95.8,67.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArDLDQkkklAAmeQAAmdEkkmQEmkkGdAAQGeAAElEkQElEmAAGdQAAGeklElQklElmeAAQmdAAkmklg");
	mask.setTransform(100,100);

	// Layer_2
	this.instance_1 = new lib.menucapuccino();
	this.instance_1.setTransform(-50,-152,0.0859,0.0859);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-152,329.9,494.8);


// stage content:
(lib.Menu = function(mode,startPosition,loop,reversed) {
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

	// Layer_4
	this.instance_1 = new lib.BotonMacchiato();
	this.instance_1.setTransform(667.5,484);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.BotonMocha();
	this.instance_2.setTransform(1235,484);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.BotonFrappe();
	this.instance_3.setTransform(1235,249.7);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_4 = new lib.BotonCapucchino();
	this.instance_4.setTransform(667.5,252.7);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_5 = new lib.BotonLatte();
	this.instance_5.setTransform(100,484);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.instance_6 = new lib.Botonespresso();
	this.instance_6.setTransform(100,252.7);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_3
	this.text = new cjs.Text("Menu", "italic bold 50px 'Verdana'", "#005C66");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 244;
	this.text.parent = this;
	this.text.setTransform(767.5,166.85);
	this.text.shadow = new cjs.Shadow("rgba(8,126,139,1)",3,3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005C66").s().p("EhxRAAZIAAgxMDijAAAIAAAxg");
	this.shape_1.setTransform(767.525,232.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#291B12").s().p("Eh4TALuIAA3bMDwnAAAIAAXbg");
	this.shape_2.setTransform(770,75);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6D4B8").s().p("Eh36A3ZMAAAhuxMDv1AAAMAAABuxg");
	this.shape_3.setTransform(767.5,354.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(763.8,354.5,825.2,397.29999999999995);
// library properties:
lib.properties = {
	id: '7990FE26D1C6E44BB168EEF28D741DD3',
	width: 1535,
	height: 709,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/menucapuccino.jpg?1778717370994", id:"menucapuccino"},
		{src:"images/menuespresso.jpg?1778717370994", id:"menuespresso"},
		{src:"images/menufrappe.jpg?1778717370994", id:"menufrappe"},
		{src:"images/menulatte.jpg?1778717370994", id:"menulatte"},
		{src:"images/menumacchiato.jpg?1778717370994", id:"menumacchiato"},
		{src:"images/menumocha.jpg?1778717370994", id:"menumocha"},
		{src:"images/Menu_atlas_1.png?1778717370751", id:"Menu_atlas_1"}
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
an.compositions['7990FE26D1C6E44BB168EEF28D741DD3'] = {
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