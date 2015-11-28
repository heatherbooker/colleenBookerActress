var keyword;

function setKey(key) {
    keyword = key;
}
$(".htmlGen").click(function() {
    var newHtml = '<div class="element transition ' + keyword + '" data-category="transition"> <a href="assets-lee/img/' + fileName + '.jpg" class="thumb"><figure class="img-polaroid"><img src="assets-lee/img/' + fileName + '-crop.png"></figure></a></div>';
    $(".htmlOutput").html("<input id='long-input' type='text' value='" + newHtml + "' autofocus></input>");
});
var fileName;
$('input[type="file"]').change(function(e) {
    fileName1 = e.target.files[0].name;
    fileName = fileName1.split('.');
    fileName.pop();
});

window.onload = function() {
    var options = {
        imageBox: '.imageBox',
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: 'avatar.png',
        myHeight: 180,
        myWidth: 270
    }
    var cropper;
    document.querySelector('#file').addEventListener('change', function() {
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = new cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    document.querySelector('#btnCrop').addEventListener('click', function() {
        var img = cropper.getDataURL();
        document.querySelector('.cropped').innerHTML += '<a href="' + img + '" download="' + fileName + '-crop.png"> <img src="' + img + '"></a>';
    })
    document.querySelector('#btnZoomIn').addEventListener('click', function() {
        cropper.zoomIn();
    })
    document.querySelector('#btnZoomOut').addEventListener('click', function() {
        cropper.zoomOut();
    })
};