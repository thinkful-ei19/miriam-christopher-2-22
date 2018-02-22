// your code here
$(function() {
    //DOM is ready...
    $('.catOne').on('click', function() {
        $('.hero').html('<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat1.jpg" alt="An orange-eyed grey cat stretches toward the camera."/>')
    });
    $('.catTwo').on('click', function() {
        $('.hero').html('<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat2.jpg" alt="Closeup of a blue-eyed, grey cat with markings."/>')
    });
    $('.catThree').on('click', function() {
        $('.hero').html('<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat3.jpg" alt="An orange cat licks its paw."/>')
    });
    $('.catFour').on('click', function() {
        $('.hero').html('<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat4.jpg" alt="A content brown cat lounges with eyes closed."/>')
    });
});