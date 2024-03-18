$(document).ready(function() {
    var canvas = $('#canvas')[0];
    var rainTar;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //강우량 효과
    function rainDraw(max,timer){
        if(canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var w = canvas.width;
            var h = canvas.height;
            ctx.strokeStyle = 'rgba(174,194,224,0.3)';
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';


            var init = [];
            var maxParts = max;
            for(var a = 0; a < maxParts; a++) {
                init.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    l: Math.random() * 3,
                    xs: -4 + Math.random() * 4 + 2,
                    ys: Math.random() * 10 + 10
                })
            }

            var particles = [];
            for(var b = 0; b < maxParts; b++) {
                particles[b] = init[b];
            }

            function draw() {
                ctx.clearRect(0, 0, w, h);
                for(var c = 0; c < particles.length; c++) {
                    var p = particles[c];
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                    ctx.stroke();
                }
                move();
            }

            function move() {
                for(var b = 0; b < particles.length; b++) {
                    var p = particles[b];
                    p.x += p.xs;
                    p.y += p.ys;
                    if(p.x > w || p.y > h) {
                        p.x = Math.random() * w;
                        p.y = -20;
                    }
                }
            }

            rainTar = setInterval(draw, timer);
        }
    }
    //안개
    function smokeDraw(){
        // Create an array to store our particles
        var particles = [];

// The amount of particles to render
        var particleCount = 30;

// The maximum velocity in each direction
        var maxVelocity = 2;

// The target frames per second (how often do we want to update / redraw the scene)
        var targetFPS = 33;

// Set the dimensions of the canvas as variables so they can be used.
        var canvasWidth = 400;
        var canvasHeight = 400;

// Create an image object (only need one instance)
        var imageObj = new Image();

// Once the image has been downloaded then set the image on all of the particles
        imageObj.onload = function() {
            particles.forEach(function(particle) {
                particle.setImage(imageObj);
            });
        };

// Once the callback is arranged then set the source of the image
        imageObj.src = "/images/simulation_1/Smoke10.png";

// A function to create a particle object.
        function Particle(context) {

            // Set the initial x and y positions
            this.x = 0;
            this.y = 0;

            // Set the initial velocity
            this.xVelocity = 0;
            this.yVelocity = 0;

            // Set the radius
            this.radius = 5;

            // Store the context which will be used to draw the particle
            this.context = context;

            // The function to draw the particle on the canvas.
            this.draw = function() {

                // If an image is set draw it
                if(this.image){
                    this.context.drawImage(this.image, this.x-128, this.y-128);
                    // If the image is being rendered do not draw the circle so break out of the draw function
                    return;
                }
                // Draw the circle as before, with the addition of using the position and the radius from this object.
                this.context.beginPath();
                this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                this.context.fillStyle = "rgba(0, 255, 255, 1)";
                this.context.fill();
                this.context.closePath();
            };

            // Update the particle.
            this.update = function() {
                // Update the position of the particle with the addition of the velocity.
                this.x += this.xVelocity;
                this.y += this.yVelocity;

                // Check if has crossed the right edge
                if (this.x >= canvasWidth) {
                    this.xVelocity = -this.xVelocity;
                    this.x = canvasWidth;
                }
                // Check if has crossed the left edge
                else if (this.x <= 0) {
                    this.xVelocity = -this.xVelocity;
                    this.x = 0;
                }

                // Check if has crossed the bottom edge
                if (this.y >= canvasHeight) {
                    this.yVelocity = -this.yVelocity;
                    this.y = canvasHeight;
                }

                // Check if has crossed the top edge
                else if (this.y <= 0) {
                    this.yVelocity = -this.yVelocity;
                    this.y = 0;
                }
            };

            // A function to set the position of the particle.
            this.setPosition = function(x, y) {
                this.x = x;
                this.y = y;
            };

            // Function to set the velocity.
            this.setVelocity = function(x, y) {
                this.xVelocity = x;
                this.yVelocity = y;
            };

            this.setImage = function(image){
                this.image = image;
            }
        }

// A function to generate a random number between 2 values
        function generateRandom(min, max){
            return Math.random() * (max - min) + min;
        }

// The canvas context if it is defined.
        var context;

// Initialise the scene and set the context if possible
        function init() {
            var canvas = document.getElementById('smoke');
            if (canvas.getContext) {

                // Set the context variable so it can be re-used
                context = canvas.getContext('2d');

                // Create the particles and set their initial positions and velocities
                for(var i=0; i < particleCount; ++i){
                    var particle = new Particle(context);

                    // Set the position to be inside the canvas bounds
                    particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));

                    // Set the initial velocity to be either random and either negative or positive
                    particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
                    particles.push(particle);
                }
            }
            else {
                alert("Please use a modern browser");
            }
        }

// The function to draw the scene
        function draw() {
            // Clear the drawing surface and fill it with a black background
            context.fillStyle = "rgba(0, 0, 0, 0.5)";
            context.fillRect(0, 0, 400, 400);

            // Go through all of the particles and draw them.
            particles.forEach(function(particle) {
                particle.draw();
            });
        }

// Update the scene
        function update() {
            particles.forEach(function(particle) {
                particle.update();
            });
        }

// Initialize the scene
        init();

// If the context is set then we can draw the scene (if not then the browser does not support canvas)
        if (context) {
            setInterval(function() {
                // Update the scene befoe drawing
                update();

                // Draw the scene
                draw();
            }, 1000 / targetFPS);
        }
    }
    smokeDraw();

    //번개
    function thunder(){
        /*=============================================================================*/
        /* Canvas Lightning v1
        /*=============================================================================*/
        var canvasLightning = function(c, cw, ch){

            /*=============================================================================*/
            /* Initialize
            /*=============================================================================*/
            this.init = function(){
                this.loop();
            };

            /*=============================================================================*/
            /* Variables
            /*=============================================================================*/
            var _this = this;
            this.c = c;
            this.ctx = c.getContext('2d');
            this.cw = cw;
            this.ch = ch;
            this.mx = 0;
            this.my = 0;

            this.lightning = [];
            this.lightTimeCurrent = 0;
            this.lightTimeTotal = 50;

            /*=============================================================================*/
            /* Utility Functions
            /*=============================================================================*/
            this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
            this.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};

            /*=============================================================================*/
            /* Create Lightning
            /*=============================================================================*/
            this.createL= function(x, y, canSpawn){
                this.lightning.push({
                    x: x,
                    y: y,
                    xRange: this.rand(5, 30),
                    yRange: this.rand(5, 25),
                    path: [{
                        x: x,
                        y: y
                    }],
                    pathLimit: this.rand(10, 35),
                    canSpawn: canSpawn,
                    hasFired: false
                });
            };

            /*=============================================================================*/
            /* Update Lightning
            /*=============================================================================*/
            this.updateL = function(){
                var i = this.lightning.length;
                while(i--){
                    var light = this.lightning[i];


                    light.path.push({
                        x: light.path[light.path.length-1].x + (this.rand(0, light.xRange)-(light.xRange/2)),
                        y: light.path[light.path.length-1].y + (this.rand(0, light.yRange))
                    });

                    if(light.path.length > light.pathLimit){
                        this.lightning.splice(i, 1)
                    }
                    light.hasFired = true;
                };
            };

            /*=============================================================================*/
            /* Render Lightning
            /*=============================================================================*/
            this.renderL = function(){
                var i = this.lightning.length;
                while(i--){
                    var light = this.lightning[i];

                    this.ctx.strokeStyle = 'hsla(0, 100%, 100%, '+this.rand(10, 100)/100+')';
                    this.ctx.lineWidth = 1;
                    if(this.rand(0, 30) == 0){
                        this.ctx.lineWidth = 2;
                    }
                    if(this.rand(0, 60) == 0){
                        this.ctx.lineWidth = 3;
                    }
                    if(this.rand(0, 90) == 0){
                        this.ctx.lineWidth = 4;
                    }
                    if(this.rand(0, 120) == 0){
                        this.ctx.lineWidth = 5;
                    }
                    if(this.rand(0, 150) == 0){
                        this.ctx.lineWidth = 6;
                    }

                    this.ctx.beginPath();

                    var pathCount = light.path.length;
                    this.ctx.moveTo(light.x, light.y);
                    for(var pc = 0; pc < pathCount; pc++){

                        this.ctx.lineTo(light.path[pc].x, light.path[pc].y);

                        if(light.canSpawn){
                            if(this.rand(0, 100) == 0){
                                light.canSpawn = false;
                                this.createL(light.path[pc].x, light.path[pc].y, false);
                            }
                        }
                    }

                    if(!light.hasFired){
                        this.ctx.fillStyle = 'rgba(255, 255, 255, '+this.rand(4, 12)/100+')';
                        this.ctx.fillRect(0, 0, this.cw, this.ch);
                    }

                    if(this.rand(0, 30) == 0){
                        this.ctx.fillStyle = 'rgba(255, 255, 255, '+this.rand(1, 3)/100+')';
                        this.ctx.fillRect(0, 0, this.cw, this.ch);
                    }

                    this.ctx.stroke();
                };
            };

            /*=============================================================================*/
            /* Lightning Timer
            /*=============================================================================*/
            this.lightningTimer = function(){
                this.lightTimeCurrent++;
                if(this.lightTimeCurrent >= this.lightTimeTotal){
                    var newX = this.rand(100, cw - 100);
                    var newY = this.rand(0, ch / 2);
                    var createCount = this.rand(1, 3);
                    while(createCount--){
                        this.createL(newX, newY, true);
                    }
                    this.lightTimeCurrent = 0;
                    this.lightTimeTotal = this.rand(300, 500);
                }
            }

            /*=============================================================================*/
            /* Clear Canvas
            /*=============================================================================*/
            this.clearCanvas = function(){
                this.ctx.globalCompositeOperation = 'destination-out';
                this.ctx.fillStyle = 'rgba(0,0,0,'+this.rand(1, 30)/100+')';
                this.ctx.fillRect(0,0,this.cw,this.ch);
                this.ctx.globalCompositeOperation = 'source-over';
            };

            /*=============================================================================*/
            /* Resize on Canvas on Window Resize
            /*=============================================================================*/
            $(window).on('resize', function(){
                _this.cw = _this.c.width = window.innerWidth;
                _this.ch = _this.c.height = window.innerHeight;
            });

            /*=============================================================================*/
            /* Animation Loop
            /*=============================================================================*/
            this.loop = function(){
                var loopIt = function(){
                    requestAnimationFrame(loopIt, _this.c);
                    _this.clearCanvas();
                    _this.updateL();
                    _this.lightningTimer();
                    _this.renderL();
                };
                loopIt();
            };

        };

        /*=============================================================================*/
        /* Check Canvas Support
        /*=============================================================================*/
        var isCanvasSupported = function(){
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        };

        /*=============================================================================*/
        /* Setup requestAnimationFrame
        /*=============================================================================*/
        var setupRAF = function(){
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requ0estAnimationFrame; ++x){
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
            };

            if(!window.requestAnimationFrame){
                window.requestAnimationFrame = function(callback, element){
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            };

            if (!window.cancelAnimationFrame){
                window.cancelAnimationFrame = function(id){
                    clearTimeout(id);
                };
            };
        };

        /*=============================================================================*/
        /* Define Canvas and Initialize
        /*=============================================================================*/
        $(window).load(function(){
            if(isCanvasSupported){
                var c = document.getElementById('thunder');
                var cw = c.width = window.innerWidth;
                var ch = c.height = window.innerHeight;
                var cl = new canvasLightning(c, cw, ch);

                setupRAF();
                cl.init();
            }
        });
    }
    thunder();




    //제어하기
    $(".stdnSmltSelect").change(function(){
        var val = $(".stdnSmltSelect option:selected").data("rain");
        //console.log("selected index: " + val);
        if(val === 1) {
            clearEff();
            $("#canvas").fadeIn(500);
            rainDraw(200,30);
            sound13.play(true);
        }else if(val === 2) {
            clearEff();
            $("#canvas").fadeIn(500);
            rainDraw(1000, 15);
            $("#thunder").show();
            sound11.play(true);
        }else if(val === 3){
            clearEff();
            $(".smoke").addClass("-active");
        }else {
            clearEff();
            sound14.play();
        }
    });
    function clearEff(){
        $("#canvas").fadeOut(500);
        $(".smoke").removeClass("-active");
        $("#thunder").hide();
        clearInterval(rainTar);
        clearInterval(rainTar);
        sound11.pause();
        sound13.pause();
        sound14.pause();
    }

});