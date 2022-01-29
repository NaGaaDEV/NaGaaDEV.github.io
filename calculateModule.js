exports.calculate = (n1, n2, operation) => {
    switch (operation) {
        case 'add':
            return parseInt(n1) + parseInt(n2);
        case 'subtruct':
            return parseInt(n1) - parseInt(n2);
        case 'multiply':
            return parseInt(n1) * parseInt(n2);
        default:
            return parseInt(n1) / parseInt(n2);
    }
}