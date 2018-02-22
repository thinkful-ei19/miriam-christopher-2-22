$(function() {
    function addItem() {
        $('#js-shopping-list-form').submit(function() {
            let item = $('.js-shopping-list-entry').val();
            $('.js-shopping-list-entry').val('');
            $('.shopping-list').append(`
            <li>
                <span class="shopping-item">`+ item + `</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>
            `);
            event.preventDefault();
        })
    }
    function checkItem() {
        $('ul').on('click', '.shopping-item-toggle' , function() {
            if ($(this).closest('li').children('.shopping-item').hasClass('shopping-item__checked')) {
              $(this).closest('li').children('.shopping-item').removeClass('shopping-item__checked');
            }
            else {
              $(this).closest('li').children('.shopping-item').addClass('shopping-item__checked');
            }
          })
    }
    function deleteItem() {
        $('ul').on('click', '.shopping-item-delete' , function(){
            $(this).closest('li').remove();
        })
    }
    addItem();
    checkItem();
    deleteItem();
})