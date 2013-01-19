
// Member elements for easy access
var header_field;
var subheader_field;
var image_fileupload;
var page1;
var page1_header;
var page1_subheader;
var page1_image;
var page2;
var page2_header;
var page2_subheader;
var page2_image;
var page3;
var page3_header;
var page3_subheader;
var page3_image;
var page4;
var page4_header;
var page4_subheader;
var page4_image;

// Modifies the header for the given page (1 indexed) as characters are typed in the corresponding field
function update_header(page_num)
{
    switch(page_num)
    {
        case 1:
            page1_header.innerHTML = header_field.value;
            break;
        case 2:
            page2_header.innerHTML = header_field.value;
            break;
        case 3:
            page3_header.innerHTML = header_field.value;
            break;
        case 4:
            page4_header.innerHTML = header_field.value;
    }
}

// Modifies the subheader for the given page (1 indexed) as characters are typed in the corresponding field
function update_subheader(page_num)
{
    switch(page_num)
    {
        case 1:
            page1_subheader.innerHTML = subheader_field.value;
            break;
        case 2:
            page2_subheader.innerHTML = subheader_field.value;
            break;
        case 3:
            page3_subheader.innerHTML = subheader_field.value;
            break;
        case 4:
            page4_subheader.innerHTML = subheader_field.value;
    }
}

// Modifies the image for the given page (1 indexed) as it is selected in the file uploader
function upload_image(page_num)
{
    switch(page_num)
    {
        case 1:
            page1_image.innerHTML = image_fileupload.value;
            break;
        case 2:
            page2_image.innerHTML = image_fileupload.value;
            break;
        case 3:
            page3_image.innerHTML = image_fileupload.value;
            break;
        case 4:
            page4_image.innerHTML = image_fileupload.value;
    }
}

$(function () {
    // Member elements for easy access
    header_field = document.getElementById("header_field");
    subheader_field = document.getElementById("subheader_field");
    image_fileupload = document.getElementById("image_fileupload");
    page1 = document.getElementById("page1");
    page1_header = document.getElementById("page1_header");
    page1_subheader = document.getElementById("page1_subheader");
    page1_image = document.getElementById("page1_image")
    page2 = document.getElementById("page2");
    page2_header = document.getElementById("page2_header");
    page2_subheader = document.getElementById("page2_subheader");
    page2_image = document.getElementById("page2_image")
    page3 = document.getElementById("page3");
    page3_header = document.getElementById("page3_header");
    page3_subheader = document.getElementById("page3_subheader");
    page3_image = document.getElementById("page3_image")
    page4 = document.getElementById("page4");
    page4_header = document.getElementById("page4_header");
    page4_subheader = document.getElementById("page4_subheader");
    page4_image = document.getElementById("page4_image")

    $('#card').turn({gradients: true, acceleration: true});
});
