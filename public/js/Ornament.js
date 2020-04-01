function StyleCay(style) {
    switch (style) {
        case 0:
            return {
                x: 1100,
                y: 282,
                width: 195,
                height: 29,
                src: './image/Fence.png',
            };
        case 1:
            return {
                x: 1100,
                y: 167,
                width: 142,
                height: 146,
                src: './image/Plant-0.png',
            };
        case 2:
            return {
                x: 1100,
                y: 220,
                width: 38,
                height: 93,
                src: './image/Rock-0.png',
            };
        case 3:
            return {
                x: 1100,
                y: 273,
                width: 59,
                height: 41,
                src: './image/Rock-1.png',
            };
        case 4:
            return {
                x: 1100,
                y: 180,
                width: 127,
                height: 132,
                src: './image/Plant-1.png',
            };
        case 5:
            return {
                x: 1100,
                y: 287,
                width: 46,
                height: 28,
                src: './image/Rock-2.png',
            };
    }
}

let style1 = 0;
const tree = new object(1100, 282, 195, 29, 'left');
const arrTree = [];
const treeImg = new Image();
tree.setStyle(StyleCay(style1));
arrTree.push({...tree});