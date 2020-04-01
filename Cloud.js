function StyleCloud(style) {
    switch (style) {
        case 0:
            return {
                x: 1100,
                y: 50,
                width: 142,
                height: 76,
                src: './img/Cloud-01.png',
            };
        case 1:
            return {
                x: 1100,
                y: 20,
                width: 169,
                height: 89,
                src: './img/Cloud-02.png',
            };
        case 2:
            return {
                x: 1100,
                y: 75,
                width: 170,
                height: 49,
                src: './img/Cloud-03.png',
            };
        case 3:
            return {
                x: 1100,
                y: 10,
                width: 195,
                height: 85,
                src: './img/Cloud-04.png',
            };
        case 4:
            return {
                x: 1100,
                y: 55,
                width: 134,
                height: 68,
                src: './img/Cloud-05.png',
            };
    }
}

let style2 = 0;
const cloud = new object(1100, 50, 142, 76, 'left');
const arrCloud = [];
const cloudImg = new Image();
cloud.setStyle(StyleCloud(style2));
arrCloud.push({...cloud});