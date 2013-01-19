// Author's note: I recognize that my way of capturing all the members as I have is very sub-optimal.
// A good /FIX/ would be to simply access them in their necessary functions ONCE, based off the params
// provided to the given method.

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
var page5_header;
var page5_subheader;
var page5_image;
var page6_header;
var page6_subheader;
var page6_image;
var page_num;
var page_num_form;

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
            break;
        case 5:
            page5_header.innerHTML = header_field.value;
            break;
        case 6:
            page6_header.innerHTML = header_field.value;
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
            break;
        case 5:
            page5_subheader.innerHTML = subheader_field.value;
            break;
        case 6:
            page6_subheader.innerHTML = subheader_field.value;
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
            break;
        case 5:
            page5_image.innerHTML = image_fileupload.value;
            break;
        case 6:
            page6_image.innerHTML = image_fileupload.value;
    }
}

// Update the page number and the fields corresponding to the selected page
function updatePageNum(num)
{
    page_num = num;
    switch(page_num)
    {
        case 1:
            header_field.value = page1_header.innerHTML;
            subheader_field.value = page1_subheader.innerHTML;
            image_fileupload.value = page1_image.innerHTML;
            break;
        case 2:
            header_field.value = page2_header.innerHTML;
            subheader_field.value = page2_subheader.innerHTML;
            image_fileupload.value = page2_image.innerHTML;
            break;
        case 3:
            header_field.value = page3_header.innerHTML;
            subheader_field.value = page3_subheader.innerHTML;
            image_fileupload.value = page3_image.innerHTML;
            break;
        case 4:
            header_field.value = page4_header.innerHTML;
            subheader_field.value = page4_subheader.innerHTML;
            image_fileupload.value = page4_image.innerHTML;
            break;
        case 5:
            header_field.value = page5_header.innerHTML;
            subheader_field.value = page5_subheader.innerHTML;
            image_fileupload.value = page5_image.innerHTML;
            break;
        case 6:
            header_field.value = page6_header.innerHTML;
            subheader_field.value = page6_subheader.innerHTML;
            image_fileupload.value = page6_image.innerHTML;
    }

}

// Accessor for page number
function getPageNum()
{
    return page_num;
}

// Run once the DOM is ready
$(function () {
    // Member elements for easy access
    header_field = document.getElementById("header_field");
    subheader_field = document.getElementById("subheader_field");
    image_fileupload = document.getElementById("image_fileupload");
    page1 = document.getElementById("page1");
    page1_header = document.getElementById("page1_header");
    page1_subheader = document.getElementById("page1_subheader");
    page1_image = document.getElementById("page1_image");
    page2 = document.getElementById("page2");
    page2_header = document.getElementById("page2_header");
    page2_subheader = document.getElementById("page2_subheader");
    page2_image = document.getElementById("page2_image");
    page3 = document.getElementById("page3");
    page3_header = document.getElementById("page3_header");
    page3_subheader = document.getElementById("page3_subheader");
    page3_image = document.getElementById("page3_image");
    page4 = document.getElementById("page4");
    page4_header = document.getElementById("page4_header");
    page4_subheader = document.getElementById("page4_subheader");
    page4_image = document.getElementById("page4_image");
    page5 = document.getElementById("page5");
    page5_header = document.getElementById("page5_header");
    page5_subheader = document.getElementById("page5_subheader");
    page5_image = document.getElementById("page5_image");
    page6 = document.getElementById("page6");
    page6_header = document.getElementById("page6_header");
    page6_subheader = document.getElementById("page6_subheader");
    page6_image = document.getElementById("page6_image");
    page_num = 1;
    page_num_form = document.getElementById("page_num_form");

    $('#card').turn({gradients: true, acceleration: true});
});
