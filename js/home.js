var myApp = angular.module('qbApp', []);
myApp.controller('qbCtrl', function($scope,$interval) {
    var qbHeaderEle=angular.element(document.querySelector(".qb-header"));
    if(window.scrollY>=150)
    {
        qbHeaderEle.addClass("qbColorGreen");
    }
    else
    {
        qbHeaderEle.removeClass("qbColorGreen");
    }
    var qbWowDivs=document.querySelectorAll(".wow2");
    
    angular.element(window).bind("scroll",function(){
        if(window.scrollY>=150)
        {
            qbHeaderEle.addClass("qbColorGreen");
        }
        else
        {
            qbHeaderEle.removeClass("qbColorGreen");
        }

        angular.forEach(qbWowDivs, function(qbWowDiv,key){
            if((qbWowDiv.getBoundingClientRect().top>=50)&&(qbWowDiv.getBoundingClientRect().top<=(window.innerHeight-50)))
            {
                if(angular.element(qbWowDiv).attr("onDisplay")=="true")
                {

                }
                else
                {
                    console.log("called");
                    angular.element(qbWowDiv).attr("onDisplay","true");
                    angular.element(qbWowDiv).addClass("fadeInUp");
                }
            }
            else
            {
                if(angular.element(qbWowDiv).attr("onDisplay")=="true")
                {
                    angular.element(qbWowDiv).attr("onDisplay","false");
                }
                angular.element(qbWowDiv).removeClass("fadeInUp");
            }
        });
    });

    var qbWallBgCovers=document.querySelectorAll(".qb-wall-bg-cover");
    var num=0;
    window.setInterval(function(){
        angular.element(qbWallBgCovers[(num%3)]).css("opacity","0");
        num++;
        angular.element(qbWallBgCovers[(num%3)]).css("opacity","1");
    },4000);
    
});
