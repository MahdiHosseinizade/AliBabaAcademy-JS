function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return "";
    }
    const firstCharAscciCode = str.charCodeAt(0);
    const convertToCapatalized = firstCharAscciCode - 32;
    const capitalizedFirstLetter = String.fromCharCode(convertToCapatalized);
    // console.log(capitalizedFirstLetter ,convertToCapatalized );
    const sliceFirstChar = str.slice(1);
    return capitalizedFirstLetter + sliceFirstChar;
}
const input = "hello";
const output = capitalizeFirstLetter(input);
console.log(output); 
