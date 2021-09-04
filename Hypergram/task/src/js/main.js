const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", function (event) {
    if (event.target.files) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            let image = new Image();
            image.src = e.target.result;
            image.onload = function (ev) {
                let canvas = document.getElementById("draw_area");
                canvas.width = image.width;
                canvas.height = image.height;
                let ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0);
            };
        };
    }
});