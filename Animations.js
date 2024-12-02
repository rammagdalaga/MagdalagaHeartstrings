const upObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }  else {
            entry.target.classList.remove('show');
        }
    });
});

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }  else {
            entry.target.classList.remove('show');
        }
    });
});

const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }  else {
            entry.target.classList.remove('show');
        }
    });
});

const downObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }  else {
            entry.target.classList.remove('show');
        }
    });
});

const upElements = document.querySelectorAll('.slideUp');
upElements.forEach((el) => upObserver.observe(el));

const fadeElements = document.querySelectorAll('.hidden');
fadeElements.forEach((el) => fadeObserver.observe(el));

const leftElements = document.querySelectorAll('.slideLeft');
leftElements.forEach((el) => leftObserver.observe(el));

const downElements = document.querySelectorAll('.slideDown');
downElements.forEach((el) => downObserver.observe(el));