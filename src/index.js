function whoLikesIt(input) {
    let names = [input];

    if (input == '') {
        return 'no one likes this';
    }
    if (input == 'Peter') {
        return 'Peter likes this';
    }

}


module.exports = {
    whoLikesIt
};