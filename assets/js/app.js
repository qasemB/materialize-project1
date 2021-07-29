document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge : 'right',
    });

    var tabs = document.querySelectorAll('.main_ul_navbar');
    M.Tabs.init(tabs, {
        swipeable:true
    });

    var actionButton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(actionButton, {
        toolbarEnabled: true,
    });

    var quickAccessNodes = Array.prototype.slice.call(document.querySelectorAll('.quick_access_items'));

    for (const item of quickAccessNodes) {
        item.addEventListener('click' , function(){
            let index = quickAccessNodes.indexOf(item) + 1;
            let menuItemArray = document.querySelectorAll('.menu_item_list');
            setTimeout(function(){
                menuItemArray[index].click();
            } , 100)
        })
    }
    animateProgress('payProgressPath' , 'payProgressText' , 50)
    animateProgress('floorProgressPath' , 'floorProgressText' , 90)
    function animateProgress(PathDomId , textDomId , percent){
        let startPercent = 0;
        let maxPercent = percent;

        let startProgress = 0;
        let maxProgress = 253;

        let progressInterval = setInterval(function(){
            if (startPercent <= maxPercent) {
                document.getElementById(PathDomId).setAttribute('stroke-dasharray' , `${startProgress} , ${maxProgress}`)

                document.getElementById(textDomId).innerHTML = startPercent+"%";

                startPercent += 1
                startProgress += 2.53
                maxProgress -= 2.53
            }else{
                clearInterval(progressInterval);
            }

        } , 25)
    }
});