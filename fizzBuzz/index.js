//3 = fizz, 5 = buzz, fizzbuzz if both. otherwise numbers. starting from 0.
$(function() {
    function handleSubmit() {
        //$('form :submit').on('click', function() {
        $('#number-chooser').submit(function() {
            event.preventDefault();
            $('.js-results').html(' ');
            let number = $('#number-choice').val();
            for (i=0; i<=number; i++) {
                if (i % 15 === 0) {
                    //fizzbuzz
                    $('.js-results').append(`
                    <span class="fizz-buzz-item fizzbuzz">fizzbuzz</span>
                    `);
                }
                else if (i % 3 === 0) {
                    //fizz
                    $('.js-results').append(`
                    <span class="fizz-buzz-item fizz">fizz</span>
                    `);
                }
                else if (i % 5 === 0) {
                    //buzz
                    $('.js-results').append(`
                    <span class="fizz-buzz-item buzz">buzz</span>
                    `);
                }
                else {
                    //number
                    $('.js-results').append(`
                    <span class="fizz-buzz-item">` + i + `</span>
                    `);
                }
            }
        })
    }
    handleSubmit();
})