
// string ko number me change krne ke liye 

// 1.  var n = +str ;
// 2.  var n = Number(str);
// 3.  var n = parseFloat(str);






const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(targetCount);


        const startingCount = Number(counter.innerHTML);

        const incr = targetCount / 100;

        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter,10)
        } else {
            counter.innerHTML = targetCount;
        };

    };

    updateCounter();

});










