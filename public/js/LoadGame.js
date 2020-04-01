let speed = 1;
let point = 0;
let timer = '';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function LoadImg() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let length2 = arrCloud.length;
    for (let t = 0; t < length2; t++) {
        if (arrCloud[t].x < -200) {
            arrCloud.splice(t, 1);
            length2--
        }
        if (arrCloud[t].status === 'left') {
            cloudImg.src = arrCloud[t].src;
            arrCloud[t].setX(-1 - (speed));
            ctx.drawImage(cloudImg, arrCloud[t].x, arrCloud[t].y, arrCloud[t].width, arrCloud[t].height);
        }
    }
    if (arrCloud[length2 - 1].x < 400) {
        style2++;
        cloud.setStyle(StyleCloud(style2));
        arrCloud.push({...cloud});
        if (style2 === 4) {
            style2 = 0;
        }
    }

    let length1 = arrTree.length;
    for (let j = 0; j < length1; j++) {
        // debugger;
        if (arrTree[j].x < -200) {
            arrTree.splice(j, 1);
            length1--
        }
        if (arrTree[j].status === 'left') {
            treeImg.src = arrTree[j].src;
            arrTree[j].setX(-4 - (speed));
            ctx.drawImage(treeImg, arrTree[j].x, arrTree[j].y, arrTree[j].width, arrTree[j].height);
        }
    }
    if (arrTree[length1 - 1].x < -50) {
        style1++;
        tree.setStyle(StyleCay(style1));
        arrTree.push({...tree});
        if (style1 === 5) {
            style1 = 0;
        }
    }

    let length = arrTrail.length;
    for (let i = 0; i < length; i++) {
        if (arrTrail[i].x < -340) {
            arrTrail.splice(i, 1);
            length--;
        }
        if (arrTrail[i].status === 'left') {
            trailImg.src = arrTrail[i].src;
            arrTrail[i].setX(-4 - (speed));
            ctx.drawImage(trailImg, arrTrail[i].x, arrTrail[i].y, arrTrail[i].width, arrTrail[i].height)
        }
    }
    if (arrTrail[length - 1].x + arrTrail[length - 1].width < 1310) {
        trail.setStyle(styleTrail);
        arrTrail.push({...trail});
    }

    let length3 = arrStone.length;
    for (let r = 0; r < length3; r++) {
        // debugger;
        if (arrStone[r].x < -200) {
            arrStone.splice(r, 1);
            length3--
            point++;
        }
        if (arrStone[r].status === 'left') {
            stoneImg.src = arrStone[r].src;
            arrStone[r].setX(-4 - (speed));
            ctx.drawImage(stoneImg, arrStone[r].x, arrStone[r].y, arrStone[r].width, arrStone[r].height);
        }
    }
    if (arrStone[length3 - 1].x < 142) {
        style3++;
        stone.setStyle(StyleStone(style3));
        arrStone.push({...stone});
        if (style3 === 11) {
            style3 = 0;
        }
    }

    if (gecko.status === 'run' && style4 % 2 === 0) {
        gecko.setStyle(StyleGecko(style4));
        switch (style4) {
            case 0:
                ctx.drawImage(IMAGE0, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 2:
                ctx.drawImage(IMAGE1, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 4:
                ctx.drawImage(IMAGE2, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 6:
                ctx.drawImage(IMAGE3, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 8:
                ctx.drawImage(IMAGE4, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 10:
                ctx.drawImage(IMAGE5, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 12:
                ctx.drawImage(IMAGE6, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 14:
                ctx.drawImage(IMAGE7, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 16:
                ctx.drawImage(IMAGE8, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 18:
                ctx.drawImage(IMAGE9, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 20:
                ctx.drawImage(IMAGE10, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 22:
                ctx.drawImage(IMAGE11, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 24:
                ctx.drawImage(IMAGE12, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 26:
                ctx.drawImage(IMAGE13, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 28:
                ctx.drawImage(IMAGE14, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 30:
                ctx.drawImage(IMAGE15, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 32:
                ctx.drawImage(IMAGE16, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 34:
                ctx.drawImage(IMAGE17, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 36:
                ctx.drawImage(IMAGE18, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 38:
                ctx.drawImage(IMAGE19, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 40:
                ctx.drawImage(IMAGE20, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 42:
                ctx.drawImage(IMAGE21, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 44:
                ctx.drawImage(IMAGE22, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 46:
                ctx.drawImage(IMAGE23, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 48:
                ctx.drawImage(IMAGE24, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 50:
                ctx.drawImage(IMAGE25, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 52:
                ctx.drawImage(IMAGE26, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 54:
                ctx.drawImage(IMAGE27, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 56:
                ctx.drawImage(IMAGE28, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
            case 58:
                ctx.drawImage(IMAGE29, gecko.x, gecko.y, gecko.width, gecko.height);
                break;
        }
    }
    if (gecko.status === 'up') {
        gecko.setTop(geckoTop);
        geckoTop = geckoTop - 6;
        ctx.drawImage(IMAGE32, gecko.x, gecko.y, gecko.width, gecko.height);
        if (gecko.y < 70) {
            geckoTop = gecko.y
            gecko.setStatus(1)
            gecko.setStyle(StyleGecko(64))
            // debugger;
        }
    }
    if (gecko.status === 'down') {
        gecko.setTop(geckoTop);
        geckoTop = geckoTop + 6;
        ctx.drawImage(IMAGE47, gecko.x, gecko.y, gecko.width, gecko.height);
        if (gecko.y >= 245) {
            style4 = 0;
            gecko.setStatus(3)
            gecko.setStyle(StyleGecko(style4));
        }
    }
    style4 = style4 + 2;
    if (style4 === 60) {
        style4 = 0;
    }

    let gradient = ctx.createLinearGradient(0, 0, 50, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    ctx.fillText("Point: " + point, 50, 60);

    speed = speed + 0.001;
    if (speed > 13) {
        speed = 13;
    }

    timer = setTimeout(LoadImg, 10);

    const c2 = {};

    c2.x = gecko.x + (gecko.width / 2);
    c2.y = gecko.y + (gecko.height / 2);
    if(gecko.width < gecko.height){
        c2.radius = gecko.width / 2
    }else {
        c2.radius = gecko.height / 2
    }

    for (let z = 0; z < length3; z++) {
        const c1 = {};

        c1.x = arrStone[z].x + (arrStone[z].width / 2)
        c1.y = arrStone[z].y + (arrStone[z].height / 2)
        if(arrStone[z].width < arrStone[z].height){
            c1.radius = arrStone[z].width / 2
        }else {
            c1.radius = arrStone[z].height / 2
        }

        let dx = c1.x - c2.x;
        let dy = c1.y - c2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < c1.radius + c2.radius) {
            clearTimeout(timer)
            StartGame(100);
            ctx.fillText("Game Over", 390, 220);
            speed = 1;
            break;
        }
    }
}

StartGame(100);

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 32 && gecko.status !== 'down ') {
        geckoTop = gecko.y
        gecko.setStatus(1)
        gecko.setStyle(StyleGecko(64))
        gecko.setTop(geckoTop);
    }
});
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 32 && gecko.status === 'run') {
        geckoTop = gecko.y
        gecko.setStatus(0)
        gecko.setStyle(StyleGecko(62))
    }
});