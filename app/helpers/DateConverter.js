class DateConverter {

    constructor() {
        throw Error('This is an abstract class and must not be instantiated');
    }

    static toText(date) {
        return `${date.getDate()}\${date.getMonth() - 1}\${date.getFullYear}`;
    }
}
