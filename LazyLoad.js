const observer  = new IntersectionObserver((entries)=>
{
    entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('show');
        else e.target.classList.remove('show');
    })
});

const hiddenElements = document.querySelectorAll('.hiden')
hiddenElements.forEach(e => observer.observe(e));