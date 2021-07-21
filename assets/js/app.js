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
});