var myApp = angular.module('qbApp', []);
myApp.controller('qbCtrl', function($scope,$interval) {
    var qbHeaderEle=angular.element(document.querySelector(".qb-header"));
    angular.element(window).bind("scroll",function(){
        if(window.scrollY>=150)
        {
            qbHeaderEle.addClass("qbColorGreen");
        }
        else
        {
            qbHeaderEle.removeClass("qbColorGreen");
        }
    });

    var qbSlideInUpDivs=document.querySelectorAll(".qbSlideInUp");
    console.log(qbSlideInUpDivs);
});
