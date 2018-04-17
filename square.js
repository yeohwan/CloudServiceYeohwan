module.exports = function (width) { //전역객체(module) 밑에 있는 객체(exports)가 함수가 된 상태이다. 입력을 width 로 받은 상태
    return {
        width: width,
        area: function () {
            return this.width * this.width;
        },
        circum: function () {
            return 4 * this.width;
        }
    };
}