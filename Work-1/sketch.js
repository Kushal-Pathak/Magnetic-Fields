const _0x46f770=_0x3205;function _0x4af0(){const _0x26c45f=['27801bxqVEA','log','1715819oLUaWq','1470vdPMlg','thickness','sub','draw','mid','grab','apart','62798DrPBQS','921385qBCOAV','influence_by','origin','north','angle','102951qjITJh','normalize','47DAVvri','cosine','dir','value','Vector','position','6kNyIcR','south','copy','3821880xQlRuK','add','size','push','pos','center','225248LvlNxL','mult','special','dist','len','plot','update','heading'];_0x4af0=function(){return _0x26c45f;};return _0x4af0();}(function(_0x32cfa2,_0x2a34b3){const _0x50a289=_0x3205,_0x52cd71=_0x32cfa2();while(!![]){try{const _0x1f2480=-parseInt(_0x50a289(0x167))/0x1*(-parseInt(_0x50a289(0x15f))/0x2)+parseInt(_0x50a289(0x155))/0x3+parseInt(_0x50a289(0x170))/0x4+-parseInt(_0x50a289(0x160))/0x5+parseInt(_0x50a289(0x16d))/0x6*(parseInt(_0x50a289(0x157))/0x7)+-parseInt(_0x50a289(0x176))/0x8+-parseInt(_0x50a289(0x165))/0x9*(parseInt(_0x50a289(0x158))/0xa);if(_0x1f2480===_0x2a34b3)break;else _0x52cd71['push'](_0x52cd71['shift']());}catch(_0x11d1bc){_0x52cd71['push'](_0x52cd71['shift']());}}}(_0x4af0,0xc1459));let magnet,particles=[],redlines=[],con=0x1,width1=0x12c,height1=0x12c,width2=0x145,height2=0xfa,redAngle=0x0,graph,scl=0xa,cols,compass,alignX=0x0,diff=0x0;function _0x3205(_0x1ecaae,_0x13c21c){const _0x4af074=_0x4af0();return _0x3205=function(_0x320597,_0x56fb99){_0x320597=_0x320597-0x14e;let _0x242f93=_0x4af074[_0x320597];return _0x242f93;},_0x3205(_0x1ecaae,_0x13c21c);}function setup(){const _0x53413c=_0x3205;createCanvas(windowWidth,windowHeight),angleMode(DEGREES),slider1=createSlider(0x0,0x168,0x0,0x0),slider1['position'](0x19,height1+0x32+height2+0x19),slider1[_0x53413c(0x172)](width2-0x19),slider2=createSlider(0x0,0x168,0x0,0x0),slider2[_0x53413c(0x16c)](0x19,height1+0x32+height2+0x19+0x19),slider2[_0x53413c(0x172)](width2-0x19),magnet=new Dipole(width2/0x2,height1+0x32+height2/0x2+0x14);for(let _0x27eabe=0x0;_0x27eabe<0x3e8;_0x27eabe++){particles[_0x53413c(0x173)](new Particle(random(0x19,width2),random(height1+0x1e,height1+0x32+height2)));}cols=floor(width2/scl)-0x2;for(let _0x349d02=0x0;_0x349d02<cols;_0x349d02++){particles[_0x53413c(0x173)](new Particle(0x19+_0x349d02*scl,height1+0x32+0x32,!![]));}graph=new Graph(0x19,0x5,width1,height1),compass=new Compass(width1-0x2,0x21);}function draw(){const _0x4783a2=_0x3205;background(0xff),move(),push(),noStroke(),fill(0x0,0xbe,0x0),rect(0x19,height1+0x32+0x32,width2-0x19,0xa),fill(0xcd,0x5c,0x8),rect(0x19,height1+0x32+0x32+0xa,width2-0x19,height2-0x32),pop();for(let _0x48aeed of particles){_0x48aeed[_0x4783a2(0x161)](magnet),_0x48aeed[_0x4783a2(0x153)](magnet),_0x48aeed[_0x4783a2(0x15b)]();}redAngle=slider2[_0x4783a2(0x16a)](),magnet[_0x4783a2(0x164)]=slider1[_0x4783a2(0x16a)](),magnet[_0x4783a2(0x15b)](),graph['update'](particles),graph[_0x4783a2(0x15b)](),compass[_0x4783a2(0x164)]=redAngle,compass['draw'](),strokeWeight(0x1),textSize(0x14),fill(0x0);}function rotateVector(_0x50f582,_0x363147,_0x1efa0c){return createVector(_0x363147['x']+(_0x50f582['x']-_0x363147['x'])*cos(_0x1efa0c)-(_0x50f582['y']-_0x363147['y'])*sin(_0x1efa0c),_0x363147['y']+(_0x50f582['x']-_0x363147['x'])*sin(_0x1efa0c)+(_0x50f582['y']-_0x363147['y'])*cos(_0x1efa0c));}function windowResized(){resizeCanvas(windowWidth-0x4,windowHeight-0x4);}function move(){const _0x4b9c11=_0x3205;mouseIsPressed&&mouseX>0x19&&mouseX<width2&&mouseY>height1+0x6e&&mouseY<height1+height2+0x32?(cursor(_0x4b9c11(0x15d)),magnet['center']['x']=mouseX,magnet['center']['y']=mouseY):cursor();}class Compass{constructor(_0x122ca8,_0x31cc2a){const _0x183342=_0x3205;this['r']=0x14,this[_0x183342(0x15e)]=this['r'],this[_0x183342(0x175)]=createVector(_0x122ca8,_0x31cc2a),this['north']=createVector(_0x122ca8-this[_0x183342(0x15e)],_0x31cc2a),this[_0x183342(0x16e)]=createVector(_0x122ca8+this[_0x183342(0x15e)],_0x31cc2a),this['nr']=this['north'],this['sr']=this['south'],this[_0x183342(0x164)]=0x0;}[_0x46f770(0x15b)](){const _0x16fb4d=_0x46f770;push(),noFill(),strokeWeight(1.5),circle(this[_0x16fb4d(0x175)]['x'],this[_0x16fb4d(0x175)]['y'],this['r']*0x2),pop(),push(),strokeWeight(2.2),stroke(0xff,0x0,0x0),translate(this['center']['x'],this['center']['y']),rotate(this['angle']),line(0x0,0x0,-this['r']+0x3,0x0),fill(0xff,0x0,0x0),triangle(-this['r']+0x3,0x0,-this['r']+4.5,-1.5,-this['r']+4.5,1.5),stroke(0x0),strokeWeight(1.5),fill(0xff),circle(0x0,0x0,0x5),pop();}}class Dipole{constructor(_0x3cb3cb,_0x58497e){const _0x5db3d2=_0x46f770;this[_0x5db3d2(0x15e)]=0x32,this[_0x5db3d2(0x164)]=0x0,this['r']=0xf,this[_0x5db3d2(0x175)]=createVector(_0x3cb3cb,_0x58497e),this[_0x5db3d2(0x163)]=createVector(this[_0x5db3d2(0x175)]['x']-this['apart'],_0x58497e),this[_0x5db3d2(0x16e)]=createVector(this['center']['x']+this[_0x5db3d2(0x15e)],_0x58497e),this['nr']=this[_0x5db3d2(0x163)],this['sr']=this[_0x5db3d2(0x16e)];}[_0x46f770(0x15b)](){const _0x4239e3=_0x46f770;this['update'](),push(),strokeWeight(0x2),fill(0xff,0x0,0x0),push(),translate(this[_0x4239e3(0x175)]['x'],this[_0x4239e3(0x175)]['y']),rotate(this['angle']),rect(-this[_0x4239e3(0x15e)],-this['r'],this[_0x4239e3(0x15e)],this['r']*0x2),fill(0xff),noStroke(),textSize(0x1e),text('N',-this[_0x4239e3(0x15e)]+0xa,this['r']/0x2+0x2),pop(),fill(0x0,0x0,0xff),push(),translate(this['center']['x'],this[_0x4239e3(0x175)]['y']),rotate(this[_0x4239e3(0x164)]),rect(0x0,-this['r'],this[_0x4239e3(0x15e)],this['r']*0x2),fill(0xff),noStroke(),textSize(0x1e),text('S',this['apart']-0x19,this['r']/0x2+0x2),pop(),fill(0xff),circle(this[_0x4239e3(0x175)]['x'],this[_0x4239e3(0x175)]['y'],0x5),pop();}[_0x46f770(0x153)](){const _0x32a5d4=_0x46f770;this[_0x32a5d4(0x163)]=createVector(this[_0x32a5d4(0x175)]['x']-this[_0x32a5d4(0x15e)],this['center']['y']),this[_0x32a5d4(0x16e)]=createVector(this[_0x32a5d4(0x175)]['x']+this['apart'],this[_0x32a5d4(0x175)]['y']),this['nr']=rotateVector(this[_0x32a5d4(0x163)],this[_0x32a5d4(0x175)],this[_0x32a5d4(0x164)]),this['sr']=rotateVector(this[_0x32a5d4(0x16e)],this[_0x32a5d4(0x175)],this[_0x32a5d4(0x164)]);}}class Graph{constructor(_0x24ff12,_0x53e9d2,_0x5bfaf6,_0x34b107){const _0x22e71d=_0x46f770;this['x']=_0x24ff12,this['y']=_0x53e9d2,this['w']=_0x5bfaf6,this['h']=_0x34b107,this['origin']=createVector(this['x'],this['y']+this['h']/0x2),this[_0x22e71d(0x152)]=[],this[_0x22e71d(0x15e)]=(this['h']-0x8c)/0x2;}['draw'](){const _0x4a6216=_0x46f770;noFill(),push(),stroke(0x0),strokeWeight(0x6),point(this[_0x4a6216(0x162)]['x'],this[_0x4a6216(0x162)]['y']),strokeWeight(0x2),rect(this['x'],this['y'],this['w'],this['h']),line(this[_0x4a6216(0x162)]['x'],this[_0x4a6216(0x162)]['y'],this[_0x4a6216(0x162)]['x']+this['w'],this[_0x4a6216(0x162)]['y']);for(let _0x273cb=-0x1;_0x273cb<=0x1;_0x273cb+=0.1){let _0x38f474=this[_0x4a6216(0x162)]['x']-0x3,_0x114959=this[_0x4a6216(0x162)]['x']+0x3,_0x366300=map(_0x273cb,-0x1,0x1,this[_0x4a6216(0x162)]['y']-this[_0x4a6216(0x15e)],this[_0x4a6216(0x162)]['y']+this['apart']);strokeWeight(0x1),line(_0x38f474,_0x366300,_0x114959,_0x366300);}pop(),beginShape(),strokeWeight(0x2);let _0xb030e4=0x0;for(let _0x127c77 of this[_0x4a6216(0x152)]){vertex(map(_0xb030e4,0x0,cols-0x1,this['origin']['x'],this['origin']['x']+this['w']),_0x127c77),_0xb030e4++;}endShape(),_0xb030e4=0x0,push();for(let _0x2f44dd of this['plot']){stroke(0xff,0x0,0x0),strokeWeight(0x5),point(map(_0xb030e4,0x0,cols-0x1,this[_0x4a6216(0x162)]['x'],this[_0x4a6216(0x162)]['x']+this['w']),_0x2f44dd),_0xb030e4++;}pop();}[_0x46f770(0x153)](_0x559d61){const _0x324ebb=_0x46f770;this['plot']=[];for(let _0x1d5da2 of _0x559d61){if(_0x1d5da2[_0x324ebb(0x14f)]){let _0x49f000=-_0x1d5da2[_0x324ebb(0x168)];_0x49f000=map(_0x49f000,-0x1,0x1,this['origin']['y']+this[_0x324ebb(0x15e)],this[_0x324ebb(0x162)]['y']-this[_0x324ebb(0x15e)]),this[_0x324ebb(0x152)]['push'](_0x49f000);}}}}class Particle{constructor(_0x27bd0c,_0x52d308,_0x4b5b32=![]){const _0x29b873=_0x46f770;this['pos']=createVector(_0x27bd0c,_0x52d308),this[_0x29b873(0x169)]=createVector(0x0,0x1),this['a']=createVector(0x0,0x0),this['v']=createVector(0x0,0x0),this['len']=0xf,this['thickness']=0.7,this[_0x29b873(0x14f)]=_0x4b5b32;}[_0x46f770(0x161)](_0x298b86){const _0xcb09fd=_0x46f770;let _0x399187=p5['Vector'][_0xcb09fd(0x15a)](this[_0xcb09fd(0x174)],_0x298b86['nr']),_0x416f58=p5[_0xcb09fd(0x16b)]['dist'](_0x298b86['nr'],this[_0xcb09fd(0x174)]);_0x399187['normalize'](),_0x399187[_0xcb09fd(0x14e)](con/pow(_0x416f58,0x2));let _0x187c40=p5[_0xcb09fd(0x16b)][_0xcb09fd(0x15a)](_0x298b86['sr'],this[_0xcb09fd(0x174)]),_0x143fff=p5[_0xcb09fd(0x16b)][_0xcb09fd(0x150)](_0x298b86['sr'],this[_0xcb09fd(0x174)]);_0x187c40[_0xcb09fd(0x166)](),_0x187c40[_0xcb09fd(0x14e)](con/pow(_0x143fff,0x2));let _0x487183=p5[_0xcb09fd(0x16b)][_0xcb09fd(0x171)](_0x399187,_0x187c40);this[_0xcb09fd(0x169)]=_0x487183[_0xcb09fd(0x16f)]();}[_0x46f770(0x15b)](){const _0x2aa097=_0x46f770;push(),stroke(0x0),strokeWeight(this[_0x2aa097(0x159)]),translate(this['pos']['x'],this['pos']['y']),rotate(this[_0x2aa097(0x169)][_0x2aa097(0x154)]()),this[_0x2aa097(0x14f)]&&(stroke(0x0,0x0,0xff),strokeWeight(0x2),fill(0x0,0x0,0xff),triangle(this['len'],0x2,this[_0x2aa097(0x151)],-0x2,this['len']+0x5,0x0)),line(0x0,0x0,this['len'],0x0),pop();}['update'](_0x3721b6){const _0x128d42=_0x46f770;if(this['special']){let _0x539c61=abs(this[_0x128d42(0x169)][_0x128d42(0x154)]()-redAngle),_0x3ba0da=cos(_0x539c61);this[_0x128d42(0x168)]=_0x3ba0da,round(abs(this[_0x128d42(0x168)]),0x1)==0.9&&(console[_0x128d42(0x156)]('yes'),diff=_0x539c61);}}}class Redline{constructor(_0x429db8,_0x8eaafb){const _0x4ff92b=_0x46f770;this['apart']=0x14,this[_0x4ff92b(0x15c)]=createVector(_0x429db8,_0x8eaafb),this[_0x4ff92b(0x163)]=createVector(_0x429db8-this[_0x4ff92b(0x15e)],_0x8eaafb),this[_0x4ff92b(0x16e)]=createVector(_0x429db8+this[_0x4ff92b(0x15e)],_0x8eaafb),this['nr']=createVector(_0x429db8-this[_0x4ff92b(0x15e)],_0x8eaafb),this['sr']=createVector(_0x429db8+this[_0x4ff92b(0x15e)],_0x8eaafb),this[_0x4ff92b(0x164)]=0x0,this[_0x4ff92b(0x159)]=0x1;}['draw'](){const _0x52d0dd=_0x46f770;this[_0x52d0dd(0x153)](),push(),stroke(0xff,0x0,0x0),strokeWeight(this[_0x52d0dd(0x159)]),line(this['nr']['x'],this['nr']['y'],this['sr']['x'],this['sr']['y']),pop();}['update'](){const _0x234bca=_0x46f770;this['nr']=rotateVector(this[_0x234bca(0x163)],this[_0x234bca(0x15c)],this[_0x234bca(0x164)]),this['sr']=rotateVector(this[_0x234bca(0x16e)],this[_0x234bca(0x15c)],this[_0x234bca(0x164)]);}}