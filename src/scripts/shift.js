function shift(str, shiftFunc) {
    let out = "";
    
    for (let x = 0; x < str.length; x++) {
        out += shiftFunc(str[x]);
    }

    return out;
}

export { shift as shift };