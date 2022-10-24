export function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}

//This is conditional styling for the display of images 
//for every 5 images there returns a bigger size
//for every 6 images after that returns a wider image