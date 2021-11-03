let dropRegion = document.getElementById("drop-region");

let imagePreviewRegion = document.getElementById("image-preview");

let fakeInput = document.createElement("input");
fakeInput.type = "file";
fakeInput.accept = "image/*, text/plain, .csv";
fakeInput.multiple = true;
dropRegion.addEventListener('click', function() {
    fakeInput.click();
});

fakeInput.addEventListener("change", function() {
    let files = fakeInput.files;
    handleFiles(files);
});


function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropRegion.addEventListener('dragenter', preventDefault, false)
dropRegion.addEventListener('dragleave', preventDefault, false)
dropRegion.addEventListener('dragover', preventDefault, false)
dropRegion.addEventListener('drop', preventDefault, false)


function handleDrop(e) {
    let dt = e.dataTransfer,
        files = dt.files;

    if (files.length) {

        handleFiles(files);

    } else {

        let html = dt.getData('text/html'),
            match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html),
            url = match && match[1];



        if (url) {
            uploadImageFromURL(url);
            return;
        }

    }


    function uploadImageFromURL(url) {
        let img = new Image;
        let c = document.createElement("canvas");
        let ctx = c.getContext("2d");

        img.onload = function() {
            c.width = this.naturalWidth;
            c.height = this.naturalHeight;
            ctx.drawImage(this, 0, 0);
            c.toBlob(function(blob) {

                handleFiles([blob]);

            }, "image/png");
        };
        img.onerror = function() {
            alert("Error in uploading");
        }
        img.crossOrigin = "";
        img.src = url;
    }

}

dropRegion.addEventListener('drop', handleDrop, false);



function handleFiles(files) {
    for (let i = 0, len = files.length; i < len; i++) {
        if (validateImage(files[i]))
            previewAnduploadImage(files[i]);
    }
}

function validateImage(image) {
    let validTypes = ['image/jpeg', 'image/png', 'image/gif', 'text/plain', '.csv'];
    if (validTypes.indexOf(image.type) === -1) {
        alert("Invalid File Type");
        return false;
    }

    let maxSizeInBytes = 10e6;
    if (image.size > maxSizeInBytes) {
        alert("File too large");
        return false;
    }

    return true;

}

function previewAnduploadImage(image) {

    let imgView = document.createElement("div");
    imgView.className = "image-view";
    imagePreviewRegion.appendChild(imgView);

    let img = document.createElement("img");
    imgView.appendChild(img);

    var overlay = document.createElement("div");
    overlay.className = "overlay";
    imgView.appendChild(overlay);

    var reader = new FileReader();
    reader.onload = function(e) {
        img.src = e.target.result;
    }
    reader.readAsDataURL(image);

    var formData = new FormData();
    formData.append('image', image);

    var uploadLocation = 'https://api.imgbb.com/1/upload';
    formData.append('key', 'bb63bee9d9846c8d5b7947bcdb4b3573');

    var ajax = new XMLHttpRequest();
    ajax.open("POST", uploadLocation, true);

    ajax.onreadystatechange = function(e) {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {

            } else {

            }
        }
    }

    ajax.upload.onprogress = function(e) {


        var perc = (e.loaded / e.total * 100) || 100,
            width = 100 - perc;

        overlay.style.width = width;
    }

    ajax.send(formData);

}

Завдання виконано неповністю
