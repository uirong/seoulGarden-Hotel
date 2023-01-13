$(document).ready(function(){
    customSlider(".mainSlider",'full',1,1,0,0,".mainNext",".mainPrev");
    customSlider('.eventCarousel','short',1,3,375,35,'.eventNext','.eventPrev');
    customSlider('.roomCarousel','short',1,3,375,35,'.roomNext','.roomPrev');
    customSlider('.roomSlide','full',1,1,0,0,null,null);
    customSlider('.diningSlide','full',1,1,0,0,null,null);
    customSlider('.meetingSlide','full',1,1,0,0,null,null);
    customSlider('.weddingSlide','full',1,1,0,0,null,null);
    customSlider('.facilitiesSlide','full',1,1,0,0,null,null);
    tabControl(".tabUI li",".tabPage");
    tabControl(".smallTab li",".tabPin");
    toggleControl(".roomTitle");
    toggleControl("header > input[type='button']");
    toggleControl(".popup>form>div> select[id$='Select']");
    $("iframe").fitVids();
    popControl();
    numCount(".roomCount");
    numCount(".guestCount");
});

function customSlider(target,pagerVal,minCount,maxCount,widthVal,marginVal,nextTarget,prevTarget){
    $(target).bxSlider({
        pagerType: pagerVal,
        minSlides: minCount,
        maxSlides: maxCount,
        slideWidth: widthVal,
        slideMargin: marginVal,
        nextSelector : nextTarget,
        prevSelector : prevTarget,
    });
}
function tabControl(btnTab,tabPage){
    var currentTab = null;
    $(btnTab).click(function(){
        currentTab = "#" + $(this).attr('data-tabName'); 
        // console.log(currentTab);
        $(tabPage).removeClass("active");
        $(currentTab).addClass("active");
        $(btnTab).removeClass("active"); 
        $(this).addClass("active");
    });
}
function toggleControl(target){
    $(target).click(function(){
        $(this).toggleClass('active');
    });
}
function popControl(){
    var popName = null;
    $("input[value='SGH.COM']").click(function(){
        popName = "#" + $(this).attr('data-popname');
        $(popName).addClass("active");
        $('.shadow').show();
    });
    $(".btn_close").click(function(){
        $(popName).removeClass("active");
        $('.shadow').hide();
    });
}
function numCount(target){
    var count = 1;
    var btnPlus = $(target).children(".numPlus");
    var btnMinus = $(target).children(".numMinus");
    var val = $(target).children("input[type='number']");
    $(btnPlus).click(function(){
       if(count > 5){
        $(val).val(5);
       }else if(count <= 5){
        count ++; 
        $(val).val(count);
       }
    });
    $(btnMinus).click(function(){
        if(count < 1){
            $(val).val(1);
        }else if(count >= 1){
            count --; 
            $(val).val(count);
        }
    });
}