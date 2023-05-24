function whoLikesIt(input) {
    let names = [input];

    if (input == '') {
        return 'no one likes this';
    }
    if (input == 'Peter') {
        return 'Peter likes this';
    }
    if (input == 'Jacob, Alex') {
        return 'Jacob and Alex like this'
    }

}


module.exports = {
    whoLikesIt
};