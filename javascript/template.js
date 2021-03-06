// Author's note: I recognize that my way of capturing all the members as I have is very sub-optimal.
// A good /FIX/ would be to simply access them in their necessary functions ONCE, based off the params
// provided to the given method.

// Member elements for easy access
var header_field;
var subheader_field;
var media_fileupload;
var page1;
var page1_header;
var page1_subheader;
var page1_media;
var page2;
var page2_header;
var page2_subheader;
var page2_media;
var page3;
var page3_header;
var page3_subheader;
var page3_media;
var page4;
var page4_header;
var page4_subheader;
var page4_media;
var page5_header;
var page5_subheader;
var page5_media;
var page6_header;
var page6_subheader;
var page6_media;
var page_num;
var page_num_form;
var editing_area;

function change_font_header(className){
    page_num = getPageNum();
    switch(page_num)
    {
        case 1:
            $(page1_header).removeClass('serif');
            $(page1_header).removeClass('sans-serif');
            $(page1_header).removeClass('mono');
            $(page1_header).addClass(className);
            break;
        case 2:
            $(page2_header).removeClass('serif');
            $(page2_header).removeClass('sans-serif');
            $(page2_header).removeClass('mono');
            $(page2_header).addClass(className);
            break;
        case 3:
            $(page3_header).removeClass('serif');
            $(page3_header).removeClass('sans-serif');
            $(page3_header).removeClass('mono');
            $(page3_header).addClass(className);
            break;
        case 4:
            $(page4_header).removeClass('serif');
            $(page4_header).removeClass('sans-serif');
            $(page4_header).removeClass('mono');
            $(page4_header).addClass(className);
            break;
        case 5:
            $(page5_header).removeClass('serif');
            $(page5_header).removeClass('sans-serif');
            $(page5_header).removeClass('mono');
            $(page5_header).addClass(className);
            break;
        case 6:
            $(page6_header).removeClass('serif');
            $(page6_header).removeClass('sans-serif');
            $(page6_header).removeClass('mono');
            $(page6_header).addClass(className);
            break;
    }
}

function change_font_subheader(className){
    page_num = getPageNum();
    switch(page_num)
    {
        case 1:
            $(page1_subheader).removeClass('serif');
            $(page1_subheader).removeClass('sans-serif');
            $(page1_subheader).removeClass('mono');
            $(page1_subheader).addClass(className);
            break;
        case 2:
            $(page2_subheader).removeClass('serif');
            $(page2_subheader).removeClass('sans-serif');
            $(page2_subheader).removeClass('mono');
            $(page2_subheader).addClass(className);
            break;
        case 3:
            $(page3_subheader).removeClass('serif');
            $(page3_subheader).removeClass('sans-serif');
            $(page3_subheader).removeClass('mono');
            $(page3_subheader).addClass(className);
            break;
        case 4:
            $(page4_subheader).removeClass('serif');
            $(page4_subheader).removeClass('sans-serif');
            $(page4_subheader).removeClass('mono');
            $(page4_subheader).addClass(className);
            break;
        case 5:
            $(page5_subheader).removeClass('serif');
            $(page5_subheader).removeClass('sans-serif');
            $(page5_subheader).removeClass('mono');
            $(page5_subheader).addClass(className);
            break;
        case 6:
            $(page6_subheader).removeClass('serif');
            $(page6_subheader).removeClass('sans-serif');
            $(page6_subheader).removeClass('mono');
            $(page6_subheader).addClass(className);
            break;
    }
}

function bold_header(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_header).addClass('bold');
            break;
        case 2:
            $(page2_header).addClass('bold');
            break;
        case 3:
            $(page3_header).addClass('bold');
            break;
        case 4:
            $(page4_header).addClass('bold');
            break;
        case 5:
            $(page5_header).addClass('bold');
            break;
        case 6:
            $(page6_header).addClass('bold');
            break;
    }
}

function unbold_header(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_header).removeClass('bold');
            break;
        case 2:
            $(page2_header).removeClass('bold');
            break;
        case 3:
            $(page3_header).removeClass('bold');
            break;
        case 4:
            $(page4_header).removeClass('bold');
            break;
        case 5:
            $(page5_header).removeClass('bold');
            break;
        case 6:
            $(page6_header).removeClass('bold');
            break;
    }
}

function italic_header(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_header).addClass('italic');
            break;
        case 2:
            $(page2_header).addClass('italic');
            break;
        case 3:
            $(page3_header).addClass('italic');
            break;
        case 4:
            $(page4_header).addClass('italic');
            break;
        case 5:
            $(page5_header).addClass('italic');
            break;
        case 6:
            $(page6_header).addClass('italic');
            break;
    }
}

function unitalic_header(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_header).removeClass('italic');
            break;
        case 2:
            $(page2_header).removeClass('italic');
            break;
        case 3:
            $(page3_header).removeClass('italic');
            break;
        case 4:
            $(page4_header).removeClass('italic');
            break;
        case 5:
            $(page5_header).removeClass('italic');
            break;
        case 6:
            $(page6_header).removeClass('italic');
            break;
    }
}

function color_header(newColor, page_num){
    switch(page_num)
    {
        case 1:
            $(page1_header).css({color: newColor});
            break;
        case 2:
            $(page2_header).css({color: newColor});
            break;
        case 3:
            $(page3_header).css({color: newColor});
            break;
        case 4:
            $(page4_header).css({color: newColor});
            break;
        case 5:
            $(page5_header).css({color: newColor});
            break;
        case 6:
            $(page6_header).css({color: newColor});
            break;
    }
}

function bold_subheader(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_subheader).addClass('bold');
            break;
        case 2:
            $(page2_subheader).addClass('bold');
            break;
        case 3:
            $(page3_subheader).addClass('bold');
            break;
        case 4:
            $(page4_subheader).addClass('bold');
            break;
        case 5:
            $(page5_subheader).addClass('bold');
            break;
        case 6:
            $(page6_subheader).addClass('bold');
            break;
    }
}

function unbold_subheader(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_subheader).removeClass('bold');
            break;
        case 2:
            $(page2_subheader).removeClass('bold');
            break;
        case 3:
            $(page3_subheader).removeClass('bold');
            break;
        case 4:
            $(page4_subheader).removeClass('bold');
            break;
        case 5:
            $(page5_subheader).removeClass('bold');
            break;
        case 6:
            $(page6_subheader).removeClass('bold');
            break;
    }
}

function italic_subheader(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_subheader).addClass('italic');
            break;
        case 2:
            $(page2_subheader).addClass('italic');
            break;
        case 3:
            $(page3_subheader).addClass('italic');
            break;
        case 4:
            $(page4_subheader).addClass('italic');
            break;
        case 5:
            $(page5_subheader).addClass('italic');
            break;
        case 6:
            $(page6_subheader).addClass('italic');
            break;
    }
}

function unitalic_subheader(page_num){
    switch(page_num)
    {
        case 1:
            $(page1_subheader).removeClass('italic');
            break;
        case 2:
            $(page2_subheader).removeClass('italic');
            break;
        case 3:
            $(page3_subheader).removeClass('italic');
            break;
        case 4:
            $(page4_subheader).removeClass('italic');
            break;
        case 5:
            $(page5_subheader).removeClass('italic');
            break;
        case 6:
            $(page6_subheader).removeClass('italic');
            break;
    }
}

function color_subheader(newColor, page_num){
    switch(page_num)
    {
        case 1:
            $(page1_subheader).css({color: newColor});
            break;
        case 2:
            $(page2_subheader).css({color: newColor});
            break;
        case 3:
            $(page3_subheader).css({color: newColor});
            break;
        case 4:
            $(page4_subheader).css({color: newColor});
            break;
        case 5:
            $(page5_subheader).css({color: newColor});
            break;
        case 6:
            $(page6_subheader).css({color: newColor});
            break;
    }
}

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

// Modifies the media for the given page (1 indexed) as it is selected in the file uploader
function upload_media(page_num)
{
    switch(page_num)
    {
        case 1:
            page1_media.innerHTML = media_fileupload.value;
            break;
        case 2:
            page2_media.innerHTML = media_fileupload.value;
            break;
        case 3:
            page3_media.innerHTML = media_fileupload.value;
            break;
        case 4:
            page4_media.innerHTML = media_fileupload.value;
            break;
        case 5:
            page5_media.innerHTML = media_fileupload.value;
            break;
        case 6:
            page6_media.innerHTML = media_fileupload.value;
    }
}

// Update the page number and the fields corresponding to the selected page
function updatePageNum(num)
{
    page_num = num;
    switch(page_num)
    {
        case 1:
            page1.style.visibility = "visible";
            page2.style.visibility = "hidden";
            page3.style.visibility = "hidden";
            page4.style.visibility = "hidden";
            page5.style.visibility = "hidden";
            page6.style.visibility = "hidden";

            $("#page_btn1").addClass('active');
            $("#page_btn2").removeClass('active');
            $("#page_btn3").removeClass('active');
            $("#page_btn4").removeClass('active');
            $("#page_btn5").removeClass('active');
            $("#page_btn6").removeClass('active');

            $("#page_next").removeClass("disabled");
            $("#page_prev").addClass("disabled");

            header_field.value = page1_header.innerHTML;
            subheader_field.value = page1_subheader.innerHTML;
            media_fileupload.value = page1_media.innerHTML;
            
            break;
        case 2:
            page1.style.visibility = "hidden";
            page2.style.visibility = "visible";
            page3.style.visibility = "visible";
            page4.style.visibility = "hidden";
            page5.style.visibility = "hidden";
            page6.style.visibility = "hidden";

            $("#page_btn1").removeClass('active');
            $("#page_btn2").addClass('active');
            $("#page_btn3").removeClass('active');
            $("#page_btn4").removeClass('active');
            $("#page_btn5").removeClass('active');
            $("#page_btn6").removeClass('active');

            $("#page_next").removeClass("disabled");
            $("#page_prev").removeClass("disabled");

            header_field.value = page2_header.innerHTML;
            subheader_field.value = page2_subheader.innerHTML;
            media_fileupload.value = page2_media.innerHTML;
            break;
        case 3:
            page1.style.visibility = "hidden";
            page2.style.visibility = "visible";
            page3.style.visibility = "visible";
            page4.style.visibility = "hidden";
            page5.style.visibility = "hidden";
            page6.style.visibility = "hidden";

            $("#page_btn1").removeClass('active');
            $("#page_btn3").addClass('active');
            $("#page_btn2").removeClass('active');
            $("#page_btn4").removeClass('active');
            $("#page_btn5").removeClass('active');
            $("#page_btn6").removeClass('active');

            $("#page_next").removeClass("disabled");
            $("#page_prev").removeClass("disabled");

            header_field.value = page3_header.innerHTML;
            subheader_field.value = page3_subheader.innerHTML;
            media_fileupload.value = page3_media.innerHTML;
            break;
        case 4:
            page1.style.visibility = "hidden";
            page2.style.visibility = "hidden";
            page3.style.visibility = "hidden";
            page4.style.visibility = "visible";
            page5.style.visibility = "visible";
            page6.style.visibility = "hidden";

            $("#page_btn1").removeClass('active');
            $("#page_btn4").addClass('active');
            $("#page_btn3").removeClass('active');
            $("#page_btn2").removeClass('active');
            $("#page_btn5").removeClass('active');
            $("#page_btn6").removeClass('active');

            $("#page_next").removeClass("disabled");
            $("#page_prev").removeClass("disabled");

            header_field.value = page4_header.innerHTML;
            subheader_field.value = page4_subheader.innerHTML;
            media_fileupload.value = page4_media.innerHTML;
            break;
        case 5:
            page1.style.visibility = "hidden";
            page2.style.visibility = "hidden";
            page3.style.visibility = "hidden";
            page4.style.visibility = "visible";
            page5.style.visibility = "visible";
            page6.style.visibility = "hidden";

            $("#page_btn1").removeClass('active');
            $("#page_btn5").addClass('active');
            $("#page_btn3").removeClass('active');
            $("#page_btn4").removeClass('active');
            $("#page_btn2").removeClass('active');
            $("#page_btn6").removeClass('active');

            $("#page_next").removeClass("disabled");
            $("#page_prev").removeClass("disabled");

            header_field.value = page5_header.innerHTML;
            subheader_field.value = page5_subheader.innerHTML;
            media_fileupload.value = page5_media.innerHTML;
            break;

        case 6:
            page1.style.visibility = "hidden";
            page2.style.visibility = "hidden";
            page3.style.visibility = "hidden";
            page4.style.visibility = "hidden";
            page5.style.visibility = "hidden";
            page6.style.visibility = "visible";

            $("#page_btn1").removeClass('active');
            $("#page_btn6").addClass('active');
            $("#page_btn3").removeClass('active');
            $("#page_btn4").removeClass('active');
            $("#page_btn5").removeClass('active');
            $("#page_btn2").removeClass('active');

            $("#page_next").addClass("disabled");
            $("#page_prev").removeClass("disabled");


            header_field.value = page6_header.innerHTML;
            subheader_field.value = page6_subheader.innerHTML;
            media_fileupload.value = page6_media.innerHTML;

            break;
    }

}

// Accessor for page number
function getPageNum()
{
    return page_num;
}

// Function to be called when dragging an element
function drag(ev)
{
    var x = ev.clientX;
    var y = ev.clientY;
    if(ev.target.id == "")
    {
        ev.dataTransfer.setData("text/plain", x + "," + y + "," + ev.target.parentNode.id);
    }
    else
    {
        ev.dataTransfer.setData("text/plain", x + "," + y + "," + ev.target.id);
    }
}

// Function to allow drop in certain areas (mainly, the card area)
function allowDrop(ev)
{
    ev.preventDefault();
}

// Function to be called on drop
function drop(ev)
{
    ev.preventDefault();
    var info = ev.dataTransfer.getData("text/plain").split(",");
    var el = document.getElementById(info[2]);
    if(! el.style.left && ! el.style.top)
    {
        el.style.left = Math.abs(ev.clientX - parseInt(info[0], 10)) + "px";
        if($(el).hasClass("subheader"))
        {
            el.style.top = Math.abs(ev.clientY - parseInt(info[1], 10) + 60) + "px";
        }
        else
        {
            el.style.top = Math.abs(ev.clientY - parseInt(info[1], 10)) + "px";
        }
    }
    else
    {
        var leftcoord = el.style.left.substring(0, el.style.left.length - 2);
        var topcoord = el.style.top.substring(0, el.style.top.length - 2);
        el.style.left = Math.abs(ev.clientX - (parseInt(info[0])) + parseInt(leftcoord, 10)) + "px";
        el.style.top = Math.abs(ev.clientY - (parseInt(info[1])) + parseInt(topcoord, 10)) + "px";
    }
}

// Function called on left "page flip" in edit mode
function page_left()
{
    page = getPageNum();
    if(page != 1){
        console.log("Page Left");
        updatePageNum(page - 1);
        
    }
}

// Function called on right "page flip" in edit mode
function page_right()
{
    page = getPageNum();
    if(page != 6){
        console.log("Page Right");
        updatePageNum(page + 1);
        
    }
}

// Run once the DOM is ready
$(function () {
    // Member elements for easy access
    header_field = document.getElementById("header_field");
    subheader_field = document.getElementById("subheader_field");
    media_fileupload = document.getElementById("media_fileupload");
    page1 = document.getElementById("page1");
    page1_header = document.getElementById("page1_header");
    page1_subheader = document.getElementById("page1_subheader");
    page1_media = document.getElementById("page1_media");
    page2 = document.getElementById("page2");
    page2_header = document.getElementById("page2_header");
    page2_subheader = document.getElementById("page2_subheader");
    page2_media = document.getElementById("page2_media");
    page3 = document.getElementById("page3");
    page3_header = document.getElementById("page3_header");
    page3_subheader = document.getElementById("page3_subheader");
    page3_media = document.getElementById("page3_media");
    page4 = document.getElementById("page4");
    page4_header = document.getElementById("page4_header");
    page4_subheader = document.getElementById("page4_subheader");
    page4_media = document.getElementById("page4_media");
    page5 = document.getElementById("page5");
    page5_header = document.getElementById("page5_header");
    page5_subheader = document.getElementById("page5_subheader");
    page5_media = document.getElementById("page5_media");
    page6 = document.getElementById("page6");
    page6_header = document.getElementById("page6_header");
    page6_subheader = document.getElementById("page6_subheader");
    page6_media = document.getElementById("page6_media");
    page_num = 1;
    page_num_form = document.getElementById("page_num_form");
    editing_area = 1;

    //$('#card').turn({gradients: true, acceleration: true, page: 2, });

});
