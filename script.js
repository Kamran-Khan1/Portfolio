document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function onScroll() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 70 && scrollPos < section.offsetTop + section.offsetHeight - 70) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});
