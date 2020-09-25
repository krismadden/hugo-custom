window.addEventListener('DOMContentLoaded', () => {

    const options = {
        root: null, // it is the viewport by default
        threshold: 0, // 0-1 scale. 0 by default. if threshold is at 1, 100% of item has to be on the page
        rootMargin: "30px 0px -75% 0px" // pulls root down (or up) needs to be in pixels or percentages (no just 0)
    }

    const observerForTableOfContentActiveState = new IntersectionObserver(function
        (entries, observer) {
            entries.forEach(entry => {
                console.log(entry);
                const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                
                clearActiveStatesInTableOfContents();

                
                document.querySelector(`ul li a[href="#${id}"]`).parentElement.classList.add('active');
                hidesubmenus();
            }
            });
        }, options);

    
    document.querySelectorAll('h1[id],h2[id],h3[id],h4[id]').forEach((section) => {
        observerForTableOfContentActiveState.observe(section);
    });

});

function clearActiveStatesInTableOfContents() {
    document.querySelectorAll('ul li').forEach((section) => {
        section.classList.remove('active');
    });


    // Smooth scrolling for browsers that don't support CSS smooth scrolling
    if (window.getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
        document.querySelectorAll('a[href^="#"]').forEach(internalLink => {
            const targetElement = document.querySelector(internalLink.getAttribute('href'));
            if (targetElement) {
                internalLink.addEventListener('click', (e) => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                    });
                    e.preventDefault();
                });
            }
        });
    }


    if (!$("h4").hasClass("subheading")) {
        $("h4").addClass('subheading');
        $(".subheading").before("<div class='section-divider'></div>");
        $('h4').wrapInner('<span class="padmarge" />')
    }


    if (!$("h1").hasClass("needs-divider")) {
        $("h1").addClass('needs-divider');
        $("h1").before("<div class='section-divider-dark'></div>");
    }

    if (!$("h3").hasClass("needs-divider")) {
        $("h3").addClass('needs-divider');
        $("h3").before("<div class='section-divider-dark'></div>");
    }


    if (!$("h2").hasClass("needs-divider")) {
        $("h2").addClass('needs-divider');
        $("h2").before("<div class='section-divider-dark'></div>");
    }

    $( ".active" ).parent( ".firstLevel" ).addClass("hereitis");

    $("#TableOfContents > ul > li").addClass("firstLevel");
    $(".firstLevel > ul > li").addClass("secondLevel");
    $(".secondLevel > ul > li").addClass("thirdLevel");
    $(".firstLevel > a").addClass("firstBold");
}


function hidesubmenus() {

    // if(!$(this ).children().hasClass("active")){
    //     $(this).removeClass("hereitis");
    // };
    
    $(".firstLevel.active").addClass("hereitis");

    $(".secondLevel.active").parents(".firstLevel").addClass("hereitis");
    $(".thirdLevel.active").parents(".firstLevel").addClass("hereitis");

    $( ".firstLevel" ).each(function() {
        if ($(this).hasClass("hereitis")) {
            $(this).children().css({"display": "initial"});
        }else{
            $(this).children().not('a').css({"display": "none"});
        }
        $(".firstLevel").children(".active").addClass("hereitis");
        if(!$(".firstLevel.hereitis").hasClass("active") ){

            $(this).removeClass("hereitis");
        };

    });
};

