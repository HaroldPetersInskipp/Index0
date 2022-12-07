export function newRecipe (ingredients, measurements, steps) {
    if (steps <= 10) {
        let placeholder = [];
        for (let i = 0; i < ingredients.length; i++) {
            placeholder.push((ingredients[i]+measurements[i]));
        };
        return placeholder;
    };
};

export function love (a,b) {
    let x = false;
    if ((a == "ben" || a == "heather")) {
        if ((b == "ben" || b == "heather")) {
            x = true;
        };
    };
    return x;
};

function yolo () {
    // this does nothing
};

function someMath (x,y) {
    let result = (3.5 * x)/y;
    return result;
};