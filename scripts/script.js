"use strict"


var data = Repository;
var selectedSport;

var Model = function addPolls(randomNum, polls) {
    var selectOneRandomEvent = data[randomNum];
    selectOneRandomEvent.polls = {
        homePolls: polls.n1,
        drawPolls: polls.n2,
        awayPolls: polls.n3
    };
    selectedSport = selectOneRandomEvent;
};


var init = function () {
    var randomNum = Math.floor((Math.random() * 18) + 0);
    var polls = {
        n1: Math.floor((Math.random() * 1000) + 0),
        n2: Math.floor((Math.random() * 1000) + 0),
        n3: Math.floor((Math.random() * 1000) + 0)
    }
    Model(randomNum, polls);
    View();
};


var Controller = (function () {

    $('#pollHomeButton').click(function () {
        var e = selectedSport;
        var initialHomePolls = e.polls.homePolls;
        initialHomePolls = initialHomePolls + 1;
        e.polls.homePolls = initialHomePolls;
        show(initialHomePolls, $("#showHomePolls"));
    });

    $("#pollDrawButton").click(function () {
        var e = selectedSport;
        var initialDrawPolls = e.polls.drawPolls;
        initialDrawPolls = initialDrawPolls + 1;
        e.polls.drawPolls = initialDrawPolls;
        show(initialDrawPolls, $("#showDrawPolls"));
    });

    $("#pollAwayButton").click(function () {
        var e = selectedSport;
        var initialAwayPolls = e.polls.awayPolls;
        initialAwayPolls = initialAwayPolls + 1;
        e.polls.awayPolls = initialAwayPolls;
        show(initialAwayPolls, $("#showAwayPolls"));
    });

    function show(voteAdded, elementName) {
        elementName.html(voteAdded);
        $(".poll-buttons").fadeTo('slow', .6).attr("disabled", true);
        elementName.addClass("poll-up");
        setTimeout(function () {
            $(".poll-buttons").removeAttr("disabled", false).fadeTo('fast', 1);
            elementName.removeClass("poll-up");
            init();
        }, 500)
    };
})();


var View = function () {
    var e = selectedSport;
    var getUl = document.querySelector('ul');
    var createLi = document.createElement('li');
    getUl.innerHTML = "";
    getUl.appendChild(createLi);
    createLi.innerHTML = "SPORT : " +
        e.sport + "<br/> COUNTRY : " + e.country + "<br/><br/> HOST TEAM : " + e.homeName + "<br/> VS" + "<br/> GUEST TEAM : " + e.awayName + "<br/><br/> STATUS : " + e.state;
    $("#showHomePolls").html(e.polls.homePolls);
    $("#showDrawPolls").html(e.polls.drawPolls);
    $("#showAwayPolls").html(e.polls.awayPolls);

};



init();