(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_CE_970x250_atlas_P_1", frames: [[0,0,250,247]]},
		{name:"DD_CE_970x250_atlas_NP_1", frames: [[0,0,300,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.CE300x600bkgd15 = function() {
	this.initialize(ss["DD_CE_970x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pinwheel = function() {
	this.initialize(ss["DD_CE_970x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pinwheel_stick = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F84984").s().p("Agxf8MAAAg/2IBjAAMAAAA/2g");
	this.shape.setTransform(-0.025,-204.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinwheel_stick, new cjs.Rectangle(-5,-408.7,10,408.7), null);


(lib.pinwheel = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Pinwheel();
	this.instance.setTransform(-125,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinwheel, new cjs.Rectangle(-125,-123.5,250,247), null);


(lib.HEAD1shad = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("A90Q6I1f1eICKlIIhvhvIAAleIEaAAIA3A3QAIgRAPgNQAmgfA+gBQBWAAA6AvIAbAbIAAhDIEzAAIAtAtIAAgtIBhAAIBABAIAAhAIBmAAIBUCHIBTiHIBnAAICACAIA3iDIBdAAIDgDfIABgeIhqhqIAAhUIEzAAIAqAqIAAgqIEaAAICzCzIAAgEIAAgBQAAhNA1gzQA0g1BPAAQBgAAA1BIIAlAlQAOgeAagaQA2g2BQABQBQAAA2A1IBgBdQgFgPAAgRIAAgCQAAgxAkgfQAmgfA+gBQBWAAA6AvIAbAbIAAhDIEzAAIAsAsQAHgKAKgJQAlgfA+gBQBWAAA6AvMAhUAhTg");
	this.shape.setTransform(0.025,-108.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1shad, new cjs.Rectangle(-328.4,-217.9,656.9,217.9), null);


(lib.HEADEndshad = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("EgqqgR6IAAleIBdAAIhahaIAAleIBhAAIAtAtIAAgtIEyAAIAjAjIAAgjIBjAAIA2A2QAIgQAPgNQAlgfA/AAQBVAAA7AvIDRDRIBrj9IBdAAIG7G7IECAAMA11A1IMglFAAng");
	this.shape.setTransform(0,-194.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndshad, new cjs.Rectangle(-273,-388.6,546.1,388.6), null);


(lib.HEAD_MSshad = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("Egu/gU5IAAmrIB9AAIB/B/IAQgbIgBgBIAkg6IABgCIADgFIAAABIAWgjIB+AAIBhBhIBDAAIBiBhIAehhIB4AAIAfAfQABg8ArglQAugnBMAAQBpAABGA5IA/A+IAAgOIB0AAIAVAWQAigeArAAQBDAAAcA2QAug2BAAAQA1AAAeAgIBdBdIAAh1IAbAAIgegeIAAhWIB4AAIBCBCIAAhCIBzAAICECEQAmgYAyAAQBQAAAtA2QARAVaNaIIaLaFMgqxAArgAmW4xQgOgPAAgVQAAgVAOgPQAPgPAVAAQAWAAAOAPMA0OAz5IhABOg");
	this.shape.setTransform(0,-178.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD_MSshad, new cjs.Rectangle(-300.7,-356.7,601.5,356.7), null);


(lib.DeltaDentalLogo_NoBox_Whiteai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Delta Dental Logo_No Box_White.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnFB/IBXj5IBTAAIBZD4IhUAAIgriAIgBAAIgpCBgAonB/IAAioIgxAAIAAhRIC/AAIAABRIgzAAIAACogArdB/IAAj5IBaAAIAACoIBMAAIAABRgAuVB/IAAj5ICoAAIAABEIhMAAIAAAYIBFAAIAABAIhFAAIAAAYIBOAAIAABFgAyNB/IAAj5IBdAAQBDAAAmAeQArAhAABAQgBA4giAhQgjAhg3AAgAwyA0IAGAAQAYAAAOgLQAPgMAAgYQAAgxg1AAIgGAAgAPmB7IAAj4IBcAAIAACoIBLAAIAABQgALZB7IBXj4IBSgBIBZD5IhTAAIgsiBIgBABIgnCAgAHgB7IhGhyIABByIheAAIAAj4IBWAAIBHB3IAAh4IBcABIAAD4gACIB7IAAj4ICnAAIAABEIhMAAIAAAYIBFAAIAAA/IhFAAIAAAZIBPAAIAABEgAh0B7IAAj4IBdAAQBCAAAlAdQArAhAABBQAAA3gjAhQgjAhg2AAgAgZAwIAFAAQAXAAAOgLQAPgMAAgXQABgxg1AAIgFAAgAJyB7IAAinIgxgBIAAhRIC+AAIAABRIgyABIAACng");
	this.shape.setTransform(165.15,20.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiLCmIgzheIBZiWIBdAAIg1hXIBpAAICSDzIg0BYgAhUBLICpAAIhZiUg");
	this.shape_1.setTransform(19.05,16.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,281.7,33.4);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("AgqA6IAAhzIBUAAIAAASIhAAAIAAAeIA5AAIAAASIg5AAIAAAfIBBAAIAAASg");
	this.shape.setTransform(60.525,24.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AgqA6IAAhzIBUAAIAAASIhAAAIAAAeIA5AAIAAASIg5AAIAAAfIBBAAIAAASg");
	this.shape_1.setTransform(49.475,24.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AgsApIANgPQARAPASAAQAJAAAGgEQAFgEAAgGQAAgHgFgDQgFgFgPgDQgUgFgIgGQgKgIAAgPQAAgPALgJQALgJARAAQAXAAASAOIgLAPQgQgLgOAAQgJAAgFAEQgFADAAAGIAAABQAAAGAGAEQAFAEAQAEQATAEAIAHQAKAIAAAOQAAAQgMAJQgLAJgSAAQgbAAgVgSg");
	this.shape_2.setTransform(38.275,24.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AgqAqQgSgRABgZIAAAAQgBgYASgRQARgSAaAAQAZAAARASQASARgBAYQABAZgSARQgRASgaAAQgaAAgQgSgAgbgcQgLAMAAAQQAAARALAMQALAMARAAQARAAALgMQAKgMAAgRIAAAAQAAgQgLgMQgLgMgRAAQgQAAgLAMg");
	this.shape_3.setTransform(21.15,24.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AgJA6IAAhgIglAAIAAgTIBdAAIAAATIglAAIAABgg");
	this.shape_4.setTransform(9.45,24.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AAhA6Ig+hRIAABRIgUAAIAAhzIASAAIA9BPIAAhPIAUAAIAABzg");
	this.shape_5.setTransform(-7.325,24.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_6.setTransform(-16.475,24.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4788").s().p("AAhA6Ig+hRIAABRIgUAAIAAhzIASAAIA9BPIAAhPIAUAAIAABzg");
	this.shape_7.setTransform(-30.525,24.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E4788").s().p("AglArQgQgRAAgaIAAAAQAAgYARgRQARgSAZAAQAZAAATAQIgNAPQgOgMgSAAQgPAAgLAMQgLAMAAAQQAAASALAMQALALARAAQAQAAALgIIAAgWIgdAAIAAgRIAxAAIAAAwQgVASgbAAQgaAAgRgRg");
	this.shape_8.setTransform(-43.575,24.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E4788").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_9.setTransform(-52.525,24.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E4788").s().p("AgsApIANgPQARAPASAAQAJAAAGgEQAFgEAAgGQAAgHgFgDQgFgFgPgDQgUgFgIgGQgKgIAAgPQAAgPALgJQALgJARAAQAXAAASAOIgLAPQgQgLgOAAQgJAAgFAEQgFADAAAGIAAABQAAAGAGAEQAFAEAQAEQATAEAIAHQAKAIAAAOQAAAQgMAJQgLAJgSAAQgbAAgVgSg");
	this.shape_10.setTransform(-60.525,24.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AwtD6IAAnzMAhbAAAIAAHzg");
	this.shape_11.setTransform(0,25,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-80.2,6.3,160.5,37.5), null);


(lib.pinwheel_mc = function(mode,startPosition,loop,reversed) {
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
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==5){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(2));

	// pinwheel
	this.instance = new lib.pinwheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-179.0006,y:-0.05},15).to({rotation:-350.001,y:0},14).wait(2));

	// stick
	this.instance_1 = new lib.pinwheel_stick();
	this.instance_1.setTransform(3.5,204.45,1,1,1.5337,0,0,-0.1,-204.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.6,-175.6,351.2,584.4);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Live Type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjGD2IAAnrIGKAAIAABzIkEAAIAABMIDrAAIAABqIjrAAIAABOIEHAAIAAB0g");
	this.shape.setTransform(245.05,116.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB9D2IAAkZIh9C/IgCAAIh9i+IAAEYIiFAAIAAnrICQAAIB0C/IB1i/ICQAAIAAHrg");
	this.shape_1.setTransform(190.375,116.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDD2IAAnrICHAAIAAHrg");
	this.shape_2.setTransform(148.5,116.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDD2IAAlzIiTAAIAAh4IGtAAIAAB4IiUAAIAAFzg");
	this.shape_3.setTransform(113.925,116.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjDD2IAAnrIGHAAIAAB4Ij/AAIAABTIDnAAIAABwIjnAAIAACwg");
	this.shape_4.setTransform(49.775,116.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai8C1QhLhJAAhrIAAgBQAAhqBLhKQBNhKBwAAQBwAABMBKQBLBJAABqIAAABQAABqhMBKQhMBLhwAAQhwAAhMhKgAhbhdQgiAmAAA2IAAABQAAA2AkAnQAjAnA3AAQA2AAAkgnQAhglAAg3IAAgBQAAg2gigmQgkgog2AAQg3AAgkAng");
	this.shape_5.setTransform(-3.275,116.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjoD2IAAnrIC+AAQB/AABMBFQBIBCAABsIAAACQAABshJBDQhMBGiBABgAhgB9IA3AAQA+AAAkggQAlghAAg7IAAgBQAAg6glgiQgkggg+AAIg3AAg");
	this.shape_6.setTransform(-77.9,116.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACBD3IgkhYIi9AAIgjBYIiOAAIDQntICDAAIDQHtgAA1A1Ig2iKIg3CKIBtAAg");
	this.shape_7.setTransform(-133.4,116.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjGD2IAAnrIGJAAIAABzIkCAAIAABMIDqAAIAABqIjqAAIAABOIEGAAIAAB0g");
	this.shape_8.setTransform(-183.85,116.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABXD2IAAi7IitAAIAAC7IiIAAIAAnrICIAAIAAC5ICtAAIAAi5ICIAAIAAHrg");
	this.shape_9.setTransform(-234.775,116.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACAD3IgjhYIi9AAIgjBYIiOAAIDRntICBAAIDRHtgAA1A1Ig1iKIg4CKIBtAAg");
	this.shape_10.setTransform(-289.3,116.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjVCsIBMhaQBLA7BTAAQA5AAAAgiIAAgBQAAgQgRgKQgRgKgxgMQhcgVgngbQg2gkAAhEIAAgCQAAhFAzgsQA0gsBXAAQB4AABRBBIhEBgQhDgwhFAAQgyAAAAAgIAAABQAAARASAJQARAKAyAMQBcAUApAfQAxAkAABBIAAABQAABKg2ArQg2ArhaAAQiJAAhchSg");
	this.shape_11.setTransform(285.225,55.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhDD1IAAlyIiTAAIAAh3IGtAAIAAB3IiUAAIAAFyg");
	this.shape_12.setTransform(241.175,55.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjVCsIBMhaQBLA7BTAAQA5AAAAgiIAAgBQAAgQgRgKQgRgKgxgMQhcgVgngbQg2gkAAhEIAAgCQAAhFAzgsQA0gsBXAAQB4AABRBBIhEBgQhDgwhFAAQgyAAAAAgIAAABQAAARASAJQARAKAyAMQBcAUApAfQAxAkAABBIAAABQAABKg2ArQg2ArhaAAQiJAAhchSg");
	this.shape_13.setTransform(195.675,55.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai8C1QhLhJAAhrIAAgBQAAhqBLhKQBNhKBwAAQBwAABMBKQBLBJAABqIAAABQAABqhMBKQhMBLhwAAQhwAAhMhKgAhbhdQgiAmAAA2IAAABQAAA2AkAnQAjAnA3AAQA2AAAkgnQAhglAAg3IAAgBQAAg2gigmQgkgog2AAQg3AAgkAng");
	this.shape_14.setTransform(144.925,55.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AigC3QhKhJAAhtIAAgBQAAhrBJhJQBKhKBuAAQCGAABKBlIhmBQQgvg6g8AAQgyAAgiAmQghAmAAA2IAAABQAAA4AhAlQAiAmAyAAQA9AAAxg8IBnBJQhRBviIAAQhpAAhJhIg");
	this.shape_15.setTransform(92.125,55.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjGD1IAAnpIGKAAIAABzIkDAAIAABLIDqAAIAABqIjqAAIAABOIEGAAIAABzg");
	this.shape_16.setTransform(23.9,55.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhDD1IAAlyIiTAAIAAh3IGtAAIAAB3IiUAAIAAFyg");
	this.shape_17.setTransform(-23.425,55.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACAD3IgjhYIi9AAIgjBYIiOAAIDRntICBAAIDRHtgAA2A1Ig2iKIg4CKIBuAAg");
	this.shape_18.setTransform(-68.1,54.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AB9D1IAAkYIh9C/IgCAAIh9i/IAAEYIiFAAIAAnpICQAAIB0C+IB1i+ICQAAIAAHpg");
	this.shape_19.setTransform(-126.425,55.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhDD1IAAnpICHAAIAAHpg");
	this.shape_20.setTransform(-168.3,55.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhDD1IAAlyIiTAAIAAh3IGtAAIAAB3IiUAAIAAFyg");
	this.shape_21.setTransform(-202.875,55.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjVCsIBMhaQBLA7BTAAQA5AAAAgiIAAgBQAAgQgRgKQgRgKgxgMQhcgVgngbQg2gkAAhEIAAgCQAAhFAzgsQA0gsBXAAQB4AABRBBIhEBgQhDgwhFAAQgyAAAAAgIAAABQAAARASAJQARAKAyAMQBcAUApAfQAxAkAABBIAAABQAABKg2ArQg2ArhaAAQiJAAhchSg");
	this.shape_22.setTransform(-248.325,55.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjGD1IAAnpIGJAAIAABzIkDAAIAABLIDrAAIAABqIjrAAIAABOIEHAAIAABzg");
	this.shape_23.setTransform(-292.95,55.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shad
	this.instance = new lib.HEAD1shad();
	this.instance.setTransform(143.8,182.35,1.4021,1.4021,0,0,0,0.1,-108.9);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-320,20.8,924.2,314.3), null);


(lib.HEADEndFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape.setTransform(192.7,68.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiZCvIAAhHICujFIioAAIAAhRIEtAAIAABGIiuDFICuAAIAABSg");
	this.shape_1.setTransform(158,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_2.setTransform(124.4,68.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_3.setTransform(91,68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyCvIhGhqIgrAAIAABqIhhAAIAAldIClAAQBMAAAlAlQAgAgAAAyIAAABQgBBNhHAeIBTB6gAg/gGIA/AAQAZAAAOgLQAOgLgBgUIAAgBQABgqg1AAIg/AAg");
	this.shape_4.setTransform(56.95,68.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AibCvIAAldICyAAQBAAAAfAfQAXAYAAAhIAAABQAAA2g2AYQBFAWAAA+IAAABQAAAugiAZQgjAag/AAgAg9BhIBKAAQAuAAABggIAAgBQgBgfgvgBIhJAAgAg9giIA9AAQAuAAgBgfIAAgBQAAgegsAAIg+AAg");
	this.shape_5.setTransform(20.75,68.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABbCwIgZg/IiGAAIgZA/IhmAAICVlfIBcAAICWFfgAAmAmIgmhiIgnBiIBNAAg");
	this.shape_6.setTransform(131.9,24.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiYB7IA2hBQA2AqA7ABQAoAAAAgZIAAgBQAAgLgMgHQgMgHgigJQhCgPgcgSQgmgaAAgxIAAgBQAAgyAkgfQAlgfA+AAQBVAAA6AvIgwBEQgwgjgxABQgjAAAAAWIAAABQAAAMAMAHQAMAGAkAJQBBAPAeAWQAjAYAAAvIAAABQAAA1gnAfQgmAehBAAQhhAAhCg6g");
	this.shape_7.setTransform(81.275,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2A2QA0gGgCgpIgmAAIAAhgIBhAAIAABPQAABhhmAEg");
	this.shape_8.setTransform(58.05,16.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwCvIAAkIIhoAAIAAhVIExAAIAABVIhpAAIAAEIg");
	this.shape_9.setTransform(34.875,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwCvIAAldIBgAAIAAFdg");
	this.shape_10.setTransform(10.2,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// breeze shad
	this.instance = new lib.HEADEndshad();
	this.instance.setTransform(278.15,200.7,1,1,0,0,0,0,-194.3);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,551.2,395), null);


(lib.HEAD_MySmile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// reg mark
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPgBAUIAAAAQABAVgPAPQgPAPgVAAQgUAAgPgPgAgfgfQgNAOAAARQAAATANANQANANASAAQASAAANgNQAOgNAAgTIAAAAQAAgSgOgNQgMgNgTAAQgSAAgNANgAAJAaIgJgQIgFAAIAAAQIgRAAIAAg1IAZAAQAXAAAAATQAAALgLAEIANATgAgFgBIAHAAQAIAAAAgGQgBgGgGAAIgIAAg");
	this.shape.setTransform(266.5,22.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Live Type
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah0B9QgxgwAAhMIAAgBQAAhIAugxQAwgzBHAAQBRAAAtA2QApAxAABNIgBAYIjcAAQAOA2A4AAQAnAAAigiIBAA1Qg1BEhaAAQhMAAgygwgAA6gaQgDgcgPgQQgQgQgYAAQguAAgKA8IByAAIAAAAg");
	this.shape_1.setTransform(244.15,34.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5DfIAAm9IBzAAIAAG9g");
	this.shape_2.setTransform(216.55,28.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4DfIAAlJIByAAIAAFJgAg7iIIAAhWIB3AAIAABWg");
	this.shape_3.setTransform(198.175,28.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACWCpIAAizQAAg3gtAAQgVAAgNAOQgNAPAAAaIAACzIhyAAIAAizQAAg3guAAQgVAAgNAOQgNAPAAAaIAACzIh0AAIAAlJIB0AAIAAAtQApg1A5AAQBCAAAcA2QAvg2A/AAQA1AAAeAgQAeAgAAA5IAADYg");
	this.shape_4.setTransform(159.525,33.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai5CWIBBhOQBBAyBJAAQAxAAAAgdIAAgBQAAgOgOgJQgPgIgqgLQhRgRgigYQgvggABg7IAAgBQAAg9AsgmQAtgmBMAAQBoAABHA5Ig8BUQg6gqg8gBQgrABAAAbIAAABQAAAPAPAIQAPAIArALQBRARAjAbQAsAfgBA5IAAABQABBAgwAmQgvAlhOAAQh3AAhQhHg");
	this.shape_5.setTransform(109.25,29.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AioC6IAkhRQAfASAUAAQARAAAKgOIiBlDIB5AAIBADHIA+jHIB4AAIh5FBQgWA7gbAYQgbAZgxAAQg4AAgygdg");
	this.shape_6.setTransform(71.05,39.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABtDVIAAj0IhtCnIgBAAIhuimIAADzIhzAAIAAmqIB9AAIBlClIBlilIB+AAIAAGqg");
	this.shape_7.setTransform(25.5,29.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// shad
	this.instance = new lib.HEAD_MSshad();
	this.instance.setTransform(303.55,184.6,1,1,0,0,0,0,-178.4);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD_MySmile, new cjs.Rectangle(-3,0,607.3,363), null);


(lib.DD_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DeltaDentalLogo_NoBox_Whiteai();
	this.instance.setTransform(129.75,15.65,0.9194,0.9191,0,0,0,141.1,17.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DD_logo, new cjs.Rectangle(0,0,259,30.8), null);


// stage content:
(lib.DD_CE_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,166];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_166 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(166).call(this.frame_166).wait(1));

	// pinwheel
	this.instance = new lib.pinwheel_mc();
	this.instance.setTransform(714,343.55,0.78,0.78);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({y:118.55},6,cjs.Ease.quadOut).wait(32).to({y:343.55},5,cjs.Ease.quadIn).to({_off:true},1).wait(56));

	// HEAD-EndFrame
	this.instance_1 = new lib.HEADEndFrame();
	this.instance_1.setTransform(810.9,542.85,1.43,1.43,0,0,0,197.2,132.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).to({regY:132.1,x:507,y:238.9},10,cjs.Ease.quadOut).wait(43).to({x:828.75,y:560.6},5,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// CTA
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(841.25,123,1,1,0,0,0,0,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(123).to({_off:false},0).to({alpha:1},7).wait(37));

	// HEAD-MySmile
	this.instance_3 = new lib.HEAD_MySmile();
	this.instance_3.setTransform(801.25,540.7,1.5999,1.5999,0,0,0,300.8,181.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({_off:false},0).to({regY:181.6,x:611.25,y:350.55},8,cjs.Ease.quadOut).wait(44));

	// logo
	this.instance_4 = new lib.DD_logo();
	this.instance_4.setTransform(840.75,212.3,0.8,0.8,0,0,0,129.7,15.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({_off:false},0).wait(52));

	// HEAD1
	this.instance_5 = new lib.HEAD1();
	this.instance_5.setTransform(599.45,125.5,1,1,0,0,0,135.5,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({x:829.45,y:355.5},5,cjs.Ease.quadIn).to({_off:true},1).wait(110));

	// bkgd
	this.instance_6 = new lib.CE300x600bkgd15();
	this.instance_6.setTransform(578,293,1,1,-90);

	this.instance_7 = new lib.CE300x600bkgd15();
	this.instance_7.setTransform(-7,293,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(167));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478,118,856.9000000000001,818.5);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 970,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_CE_970x250_atlas_P_1.png?1598481487717", id:"DD_CE_970x250_atlas_P_1"},
		{src:"images/DD_CE_970x250_atlas_NP_1.jpg?1598481487717", id:"DD_CE_970x250_atlas_NP_1"}
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;