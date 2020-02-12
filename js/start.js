$( document ).ready(function() {
    $('#rec1').click(function(){
        var mapBlock = $('#map-block1');
        if (mapBlock.hasClass('map-block-block')){
            mapBlock.removeClass('map-block-block').addClass('map-block-hid');
            $('#rec1').removeClass('rec-light').addClass('rec-dark');
        }
        else {
            $('.map-obj-block').removeClass('map-block-block').addClass('map-block-hid');
            $('.map-obj-img').removeClass('rec-light').addClass('rec-dark');
            mapBlock.removeClass('map-block-hid').addClass('map-block-block');
            $('#rec1').removeClass('rec-dark').addClass('rec-light');
        }
        // $('#map-block1').addClass('map-block-block').removeClass('map-block-none');
    });

    $('#rec2').click(function(){
        var mapBlock = $('#map-block2');
        if (mapBlock.hasClass('map-block-block')){
            mapBlock.removeClass('map-block-block').addClass('map-block-hid');
            $('#rec2').removeClass('rec-light').addClass('rec-dark');
        }
        else {
            $('.map-obj-block').removeClass('map-block-block').addClass('map-block-hid');
            $('.map-obj-img').removeClass('rec-light').addClass('rec-dark');
            mapBlock.removeClass('map-block-hid').addClass('map-block-block');
            $('#rec2').removeClass('rec-dark').addClass('rec-light');
        }
        // $('#map-block1').addClass('map-block-block').removeClass('map-block-none');
    });

    $('#rec3').click(function(){

        var mapBlock = $('#map-block3');
        if (mapBlock.hasClass('map-block-block')){
            mapBlock.removeClass('map-block-block').addClass('map-block-hid');
            $('#rec3').removeClass('rec-light').addClass('rec-dark');
        }
        else {
            $('.map-obj-block').removeClass('map-block-block').addClass('map-block-hid');
            $('.map-obj-img').removeClass('rec-light').addClass('rec-dark');
            mapBlock.removeClass('map-block-hid').addClass('map-block-block');
            $('#rec3').removeClass('rec-dark').addClass('rec-light');
        }
        // $('#map-block1').addClass('map-block-block').removeClass('map-block-none');
    });

    $('#rec4').click(function(){
        var mapBlock = $('#map-block4');
        if (mapBlock.hasClass('map-block-block')){
            mapBlock.removeClass('map-block-block').addClass('map-block-hid');
            $('#rec4').removeClass('rec-light').addClass('rec-dark');
        }
        else {
            $('.map-obj-block').removeClass('map-block-block').addClass('map-block-hid');
            $('.map-obj-img').removeClass('rec-light').addClass('rec-dark');
            mapBlock.removeClass('map-block-hid').addClass('map-block-block');
            $('#rec4').removeClass('rec-dark').addClass('rec-light');
        }
        // $('#map-block1').addClass('map-block-block').removeClass('map-block-none');
    });

    $('#rec5').click(function(){
        var mapBlock = $('#map-block5');
        if (mapBlock.hasClass('map-block-block')){
            mapBlock.removeClass('map-block-block').addClass('map-block-hid');
            $('#rec5').removeClass('rec-light').addClass('rec-dark');
        }
        else {
            $('.map-obj-block').removeClass('map-block-block').addClass('map-block-hid');
            $('.map-obj-img').removeClass('rec-light').addClass('rec-dark');
            mapBlock.removeClass('map-block-hid').addClass('map-block-block');
            $('#rec5').removeClass('rec-dark').addClass('rec-light');
        }
        // $('#map-block1').addClass('map-block-block').removeClass('map-block-none');
    });
});