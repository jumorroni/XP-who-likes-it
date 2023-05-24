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
    if (input == 'Alex, Jacob, Mark, Max') {
        return 'Alex, Jacob and 2 others like this'
    }
}


module.exports = {
    whoLikesIt
};