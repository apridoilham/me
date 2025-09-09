document.addEventListener('DOMContentLoaded', () => {

    const portfolioData = {
        navLinks: [
            { href: "#hero", text: "Home" },
            { href: "#about", text: "About" },
            { href: "#skills", text: "Skills" },
            { href: "#experience", text: "Experience" },
            { href: "#projects", text: "Projects" },
            { href: "#contact", text: "Contact" }
        ],
        heroTitles: ["Software Engineer.", "Full-Stack Developer.", "Problem Solver."],
        about: {
            photoUrl: "assets/photo/profile.jpg",
            photoAlt: "A close-up photo of Aprido Ilham",
            description1: "As a Software Engineer, I have a passion for solving complex problems and turning ideas into real, tangible digital products. I believe the best technology is that which feels intuitive and empowers the user.",
            description2: "My expertise lies in full-stack development, from building responsive interfaces with React and Next.js to designing robust backends with Node.js and Go. Beyond coding, I enjoy following AI developments and contributing to open-source projects.",
            cvUrl: "path/to/your/cv.pdf"
        },
        skills: [
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
            { name: 'React', icon: 'devicon-react-original colored' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'Go', icon: 'devicon-go-original-wordmark colored' },
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
            { name: 'Docker', icon: 'devicon-docker-plain colored' },
        ],
        experiences: [
            {
                date: "June 2023 - Present",
                title: "Frontend Developer",
                company: "PT Teknologi Maju",
                description: "Led the development of the main analytics dashboard, successfully increasing page load speed by 30% and reducing backend data query time by 50% through optimization."
            },
            {
                date: "July 2021 - May 2023",
                title: "Junior Full-Stack Developer",
                company: "Startup Cipta Karya",
                description: "Collaborated in a 5-person team to build an e-commerce platform from scratch using the MERN stack, serving over 10,000 users in its first month of launch."
            }
        ],
        certificates: [
            {
                image: "assets/certificates/preview-1.jpg",
                title: "Meta Front-End Developer Professional Certificate",
                description: "A professional certification covering React, JavaScript, HTML, CSS, and UI/UX Design principles.",
                url: "assets/certificates/certification-1.pdf"
            },
            {
                image: "assets/certificates/preview-2.jpg",
                title: "AWS Certified Cloud Practitioner",
                description: "Validates a fundamental understanding of AWS Cloud services, architecture, security, and pricing models.",
                url: "assets/certificates/certification-2.pdf"
            },
            {
                image: "assets/certificates/preview-3.jpg",
                title: "AWS Certified Cloud Practitioner",
                description: "Validates a fundamental understanding of AWS Cloud services, architecture, security, and pricing models.",
                url: "assets/certificates/certification-3.pdf"
            },
            {
                image: "assets/certificates/preview-4.jpg",
                title: "AWS Certified Cloud Practitioner",
                description: "Validates a fundamental understanding of AWS Cloud services, architecture, security, and pricing models.",
                url: "assets/certificates/certification-4.pdf"
            },
            {
                image: "assets/certificates/preview-5.jpg",
                title: "AWS Certified Cloud Practitioner",
                description: "Validates a fundamental understanding of AWS Cloud services, architecture, security, and pricing models.",
                url: "assets/certificates/certification-5.pdf"
            },
            {
                image: "assets/certificates/preview-6.jpg",
                title: "AWS Certified Cloud Practitioner",
                description: "Validates a fundamental understanding of AWS Cloud services, architecture, security, and pricing models.",
                url: "assets/certificates/certification-6.pdf"
            }
        ],
        projects: [
            {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
                title: "Sales Analytics Platform",
                description: "An interactive dashboard for visualizing sales data, helping businesses make data-driven decisions.",
                demoUrl: "https://link-demo-anda.com",
                githubUrl: "https://github.com/yourusername/sales-analytics"
            },
            {
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
                title: "Collaborative Task Management App",
                description: "A task manager application with team collaboration features, real-time notifications, and a scalable backend architecture.",
                demoUrl: "https://link-demo-anda-2.com",
                githubUrl: "https://github.com/yourusername/task-app"
            }
        ],
        socials: [
            { name: "GitHub", url: "https://github.com/yourusername", icon: "fab fa-github" },
            { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "fab fa-linkedin" },
            { name: "Twitter", url: "https://twitter.com/yourusername", icon: "fab fa-twitter" }
        ]
    };

    function renderContent() {
        const navContainer = document.querySelector('.nav-links');
        navContainer.innerHTML = portfolioData.navLinks.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('');
        const aboutContainer = document.getElementById('about-container');
        if (aboutContainer) {
            aboutContainer.innerHTML = `
                <img src="${portfolioData.about.photoUrl}" alt="${portfolioData.about.photoAlt}" class="about-image" loading="lazy" width="280" height="280">
                <div class="about-text">
                    <p>${portfolioData.about.description1}</p>
                    <p>${portfolioData.about.description2}</p>
                    <a href="${portfolioData.about.cvUrl}" class="btn btn-secondary" download><i class="fas fa-file-arrow-down"></i> Download CV</a>
                </div>`;
        }
        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skillsContainer.innerHTML = portfolioData.skills.map(skill => `<div class="skill-card" style="animation-delay: ${Math.random() * 2}s"><i class="${skill.icon}"></i><span>${skill.name}</span></div>`).join('');
        }
        const expContainer = document.getElementById('experience-container');
        if (expContainer) {
            expContainer.innerHTML = portfolioData.experiences.map(exp => `
                <li class="timeline-item">
                    <div class="timeline-content">
                        <p style="color:var(--text-tertiary); font-size: 0.9rem;">${exp.date}</p>
                        <h3>${exp.title}</h3>
                        <p style="color: var(--accent-blue-light); font-weight: 600;">${exp.company}</p>
                        <p>${exp.description}</p>
                    </div>
                </li>`).join('');
        }
        const certContainer = document.getElementById('certificates-container');
        if (certContainer) {
            certContainer.innerHTML = portfolioData.certificates.map(cert => `
                <article class="card certificate-card" data-pdf-url="${cert.url}">
                    <img src="${cert.image}" alt="${cert.title}" class="card-image" loading="lazy">
                    <div class="card-info">
                        <h3 class="card-title">${cert.title}</h3>
                        <p class="card-description">${cert.description}</p>
                        <div class="card-links">
                            <span class="btn btn-secondary view-cert-btn" style="width:100%;">View Certificate</span>
                        </div>
                    </div>
                </article>
            `).join('');
        }
        const projContainer = document.getElementById('projects-container');
        if (projContainer) {
            projContainer.innerHTML = portfolioData.projects.map(proj => `
                <article class="card">
                    <img src="${proj.image}" alt="${proj.title}" class="card-image" loading="lazy">
                    <div class="card-info">
                        <h3 class="card-title">${proj.title}</h3>
                        <p class="card-description">${proj.description}</p>
                        <div class="card-links">
                            ${proj.demoUrl && proj.demoUrl !== '#' ? `<a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex-grow: 1;"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                            ${proj.githubUrl && proj.githubUrl !== '#' ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex-grow: 1;"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        </div>
                    </div>
                </article>
            `).join('');
        }
        const socialHtml = portfolioData.socials.map(social => `<a href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.name}"><i class="${social.icon}"></i></a>`).join('');
        document.getElementById('contact-socials').innerHTML = socialHtml;
        document.getElementById('footer-socials').innerHTML = socialHtml;
    }

    function initPdfModal() {
        const modal = document.getElementById('pdf-modal');
        if (!modal) return;
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;
        const modalCloseBtn = document.getElementById('modal-close');
        const prevPageBtn = document.getElementById('prev-page');
        const nextPageBtn = document.getElementById('next-page');
        const pageNumSpan = document.getElementById('page-num');
        const pageCountSpan = document.getElementById('page-count');
        const canvas = document.getElementById('pdf-canvas');
        const ctx = canvas.getContext('2d');
        let pdfDoc = null;
        let pageNum = 1;
        let pageRendering = false;
        let pageNumPending = null;
        const scale = 1.5;
        function renderPage(num) {
            pageRendering = true;
            pdfDoc.getPage(num).then(function(page) {
                const viewport = page.getViewport({ scale: scale });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                };
                const renderTask = page.render(renderContext);
                renderTask.promise.then(function() {
                    pageRendering = false;
                    if (pageNumPending !== null) {
                        renderPage(pageNumPending);
                        pageNumPending = null;
                    }
                });
            });
            pageNumSpan.textContent = num;
            prevPageBtn.disabled = num <= 1;
            nextPageBtn.disabled = num >= pdfDoc.numPages;
        }
        function queueRenderPage(num) {
            if (pageRendering) {
                pageNumPending = num;
            } else {
                renderPage(num);
            }
        }
        function onPrevPage() {
            if (pageNum <= 1) return;
            pageNum--;
            queueRenderPage(pageNum);
        }
        prevPageBtn.addEventListener('click', onPrevPage);
        function onNextPage() {
            if (pageNum >= pdfDoc.numPages) return;
            pageNum++;
            queueRenderPage(pageNum);
        }
        nextPageBtn.addEventListener('click', onNextPage);
        function openModal(url) {
            if (url === '#') {
                alert("This certificate does not have a valid link.");
                return;
            }
            modal.classList.add('visible');
            const loadingTask = pdfjsLib.getDocument(url);
            loadingTask.promise.then(function(pdf) {
                pdfDoc = pdf;
                pageCountSpan.textContent = pdfDoc.numPages;
                pageNum = 1;
                renderPage(pageNum);
            }, function (reason) {
                console.error(reason);
                alert("Failed to load PDF.");
                closeModal();
            });
        }
        function closeModal() {
            modal.classList.remove('visible');
            pdfDoc = null;
        }
        modalCloseBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-cert-btn')) {
                const card = e.target.closest('.certificate-card');
                if (card) {
                    const pdfUrl = card.dataset.pdfUrl;
                    openModal(pdfUrl);
                }
            }
        });
    }

    function initTypingEffect() {
        const titleElement = document.getElementById('hero-title');
        if (!titleElement) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            titleElement.innerHTML = `${portfolioData.heroTitles[0]}<span class="cursor" style="animation: none;"></span>`;
            return;
        }
        let phraseIndex = 0, charIndex = 0, isDeleting = false;
        const type = () => {
            const currentPhrase = portfolioData.heroTitles[phraseIndex];
            const text = isDeleting ? currentPhrase.substring(0, charIndex--) : currentPhrase.substring(0, charIndex++);
            titleElement.innerHTML = `${text}<span class="cursor"></span>`;
            let typeSpeed = isDeleting ? 75 : 150;
            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000; isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false; phraseIndex = (phraseIndex + 1) % portfolioData.heroTitles.length; typeSpeed = 500;
            }
            setTimeout(type, typeSpeed);
        };
        type();
    }

    function initMobileNav() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const toggleMenu = (show) => {
            const isActive = typeof show === 'boolean' ? show : !navLinks.classList.contains('active');
            navLinks.classList.toggle('active', isActive);
            hamburger.classList.toggle('active', isActive);
            hamburger.setAttribute('aria-expanded', isActive);
        };
        hamburger.addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });
        navLinks.addEventListener('click', e => { if (e.target.tagName === 'A') toggleMenu(false); });
        document.addEventListener('click', e => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) toggleMenu(false);
        });
    }

    function initScrollFeatures() {
        const header = document.querySelector('header');
        const backToTopBtn = document.getElementById('back-to-top');
        let lastScrollTop = 0;
        const revealElements = document.querySelectorAll('.reveal');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
             revealElements.forEach(el => el.classList.add('visible'));
        } else {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            revealElements.forEach(el => revealObserver.observe(el));
        }
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-40% 0px -60% 0px' });
        document.querySelectorAll('main section[id]').forEach(section => navObserver.observe(section));
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            backToTopBtn.classList.toggle('visible', scrollTop > 300);
        }, { passive: true });
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    function initCursorEffect() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const lightEffect = document.querySelector('.cursor-light-effect');
        document.addEventListener('mousemove', (e) => {
            lightEffect.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(0, 123, 255, 0.07), transparent 25%)`;
        });
    }

    renderContent();
    initTypingEffect();
    initMobileNav();
    initScrollFeatures();
    initCursorEffect();
    initPdfModal();
});