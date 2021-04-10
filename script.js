(() => {

    //Hello World!
    const appendClock = document.getElementById('clock');

    function timer() {
        let date = new Date();
        let HOUR = date.getHours();
        let MINUTE = date.getMinutes();
        let SECOND = date.getSeconds();

        HOUR = (HOUR < 10) ? "0" + HOUR : HOUR;
        MINUTE = (MINUTE < 10) ? "0" + MINUTE : MINUTE;
        SECOND = (SECOND < 10) ? "0" + SECOND : SECOND;

        let time = HOUR + ":" + MINUTE + ":" + SECOND;
        appendClock.textContent = time;
    }

    function clock() {
        setInterval(() => {
            return timer();
        },1000);
    }

    function run() {
        clock();
    }

    run();

})();