const styleTrail = {
    x: 1285,
    y: 310,
    width: 340,
    height: 32,
    src: './img/Ground-0.png',
};

const trail = new object(0, 1285, 310, 32, 'left');
const arrTrail = [];
const trailImg = new Image();
trail.setStyle(styleTrail);
arrTrail.push({...trail, x: 0},{...trail, x: 325},{...trail, x: 650},{...trail, x: 975});
