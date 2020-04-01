function StyleStone(style) {
    switch (style) {
        case 0:
            return {
                x: 1100,
                y: 235,
                width: 77,
                height: 82,
                src: './img/Stone-00.png',
            };
        case 1:
            return {
                x: 1100,
                y: 230,
                width: 75,
                height: 90,
                src: './img/Stone-02.png',
            };
        case 2:
            return {
                x: 1100,
                y: 230,
                width: 125,
                height: 89,
                src: './img/Stone-03.png',
            };
        case 3:
            return {
                x: 1100,
                y: 230,
                width: 74,
                height: 93,
                src: './img/Stone-04.png',
            };
        case 4:
            return {
                x: 1100,
                y: 227,
                width: 76,
                height: 92,
                src: './img/Stone-05.png',
            };
        case 5:
            return {
                x: 1100,
                y: 235,
                width: 76,
                height: 85,
                src: './img/Stone-06.png',
            };
        case 6:
            return {
                x: 1100,
                y: 245,
                width: 74,
                height: 77,
                src: './img/Stone-07.png',
            };
        case 7:
            return {
                x: 1100,
                y: 230,
                width: 76,
                height: 87,
                src: './img/Stone-08.png',
            };
        case 8:
            return {
                x: 1100,
                y: 240,
                width: 84,
                height: 87,
                src: './img/Stone-09.png',
            };
        case 9:
            return {
                x: 1100,
                y: 235,
                width: 82,
                height: 90,
                src: './img/Stone-11.png',
            };
        case 10:
            return {
                x: 1100,
                y: 230,
                width: 74,
                height: 95,
                src: './img/Stone-13.png',
            };
        case 11:
            return {
                x: 1100,
                y: 227,
                width: 76,
                height: 97,
                src: './img/Stone-14.png',
            };
    }
}

let style3 = 0;
const stone = new object(1100, 255, 77, 67, 'left');
let arrStone = [];
const stoneImg = new Image();
stone.setStyle(StyleStone(style3));
arrStone.push({...stone});