var canvas = document.getElementsByTagName('canvas')[0],
    ctx = canvas.getContext('2d'),
    colors = [
        '#79fa5b',
        '#42b6e2',
        '#efefef',
        '#eb8433',
        '#e03353',
        '#d7d7d7'
    ],
    i,
    j,
    x,
    y,
    RADIUS = 80,
    PADDING = 60,
    PADDINGY = 60,
    circles = [],
    mouseX = document.querySelector('#equipe .container').offsetWidth/2,
    mouseY = document.querySelector('#equipe .container').offsetHeight/2,
    centerX,
    centerY,
    offsetX,
    offsetY,
    c;

canvas.width = document.querySelector('#equipe .container').offsetWidth;
canvas.height = document.querySelector('#equipe .container').offsetHeight;
centerX = canvas.width / 2;
centerY = canvas.height / 2;

x = 0;
y = 0;

for (i = 0; i < 5; i += 1) {
    for (j = 0; j < 5; j += 1) {
        c = Math.floor(Math.random() * colors.length);
        circles.push({x: x, y: y, color: colors[c]});
        x += RADIUS + PADDING;
    }

    if (i % 2 == 0) {
        x = PADDING;
    } else {
        x = 0;
    }

    y += RADIUS + PADDINGY;

}

function draw() {
    var scale,
        closest;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    offsetX = mouseX - centerX;
    offsetY = mouseY - centerY;
    ctx.translate(offsetX, offsetY);

    closest = getClosest();

    for (i = 0; i < circles.length; i += 1) {
        ctx.save();

        scale = getDistance(circles[i]);
        ctx.translate(circles[i].x, circles[i].y);
        ctx.translate(RADIUS / 2, RADIUS/ 2);
        ctx.scale(scale, scale);
        ctx.translate(-RADIUS / 2, -RADIUS/ 2);


        ctx.fillStyle = circles[i].color;
        ctx.beginPath();
        ctx.arc(0, 0, RADIUS, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        if (i == closest) {
            ctx.strokeStyle = "white";
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        ctx.restore();
    }

    ctx.restore();

    requestAnimationFrame(draw);
}

draw();
document.querySelector('#equipe .container').addEventListener('mousemove', handle_MOUSEMOVE);
window.addEventListener('resize', handle_RESIZE);


function handle_MOUSEMOVE(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

function getClosest() {
    var close,
        dx,
        dy,
        dist,
        closest;

    for (i = 0; i < circles.length; i += 1) {
        dx = circles[i].x + offsetX - centerX;
        dy = circles[i].y + offsetY - centerY;

        dist = Math.sqrt(dx * dx + dy * dy);

        if (!close) {
            close = dist;
            closest = i;
        } else if (dist < close) {
            close = dist;
            closest = i;
        }

    }

    return closest;
}

function getDistance(circle) {
    var dx,
        dy,
        dist;

    dx = circle.x + offsetX - centerX;
    dy = circle.y + offsetY - centerY;

    dist = Math.sqrt(dx * dx + dy * dy);
    scale = 1 - (dist / 400);
    scale = scale > 0 ? scale : 0;

    return scale;
}

function handle_RESIZE() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
}