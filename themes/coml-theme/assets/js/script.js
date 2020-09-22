window.addEventListener('DOMContentLoaded', () => {

    const observerForTableOfContentActiveState = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');

            if (entry.intersectionRatio > 0) {
                
                clearActiveStatesInTableOfContents();

                
                document.querySelector(`ul li a[href="#${id}"]`).parentElement.classList.add('active');
            }
        });
    });

    
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

// $( "<div class='section-divider'></div>" ).insertBefore( "h4" );
// var subheading = document.getElementsByTagName('h4')[3].innerHTML
// $( "<div class='section-divider'></div>" ).insertBefore( subheading );
// $('<div />').addClass('section-divider').insertBefore('h4');

if (!$("h4").hasClass("subheading")) {
    $("h4").addClass('subheading');
    $(".subheading").prepend("<div class='section-divider'></div>");
}

if (!$(".section").hasClass("needs-divider")) {
    $(".section").addClass('needs-divider');
    $(".section").prepend("<div class='section-divider-dark'></div>");
}


}