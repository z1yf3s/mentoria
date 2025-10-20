// ========================================
// INTERACTIVIDAD DE PESTAÑAS DE ÁREAS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const areaTabs = document.querySelectorAll('.area-tab');
    const areaDetails = document.querySelectorAll('.area-detail');
    
    areaTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetArea = this.getAttribute('data-area');
            
            // Remover clase active de todas las pestañas
            areaTabs.forEach(t => t.classList.remove('active'));
            
            // Agregar clase active a la pestaña clickeada
            this.classList.add('active');
            
            // Ocultar todos los detalles
            areaDetails.forEach(detail => detail.classList.remove('active'));
            
            // Mostrar el detalle correspondiente
            const targetDetail = document.getElementById(targetArea);
            if (targetDetail) {
                targetDetail.classList.add('active');
            }
        });
    });
    
    // ========================================
    // ACORDEÓN FAQ
    // ========================================
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', function() {
            const isOpen = answer.style.maxHeight;
            
            // Cerrar todos los FAQs
            faqItems.forEach(faq => {
                const ans = faq.querySelector('.faq-answer');
                const tog = faq.querySelector('.faq-toggle');
                ans.style.maxHeight = null;
                tog.textContent = '+';
            });
            
            // Si no estaba abierto, abrirlo
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                toggle.textContent = '−';
            }
        });
    });
    
    // ========================================
    // SMOOTH SCROLL PARA NAVEGACIÓN
    // ========================================
    
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar smooth scroll a enlaces con hash
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // 80px para el navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // EFECTO DE NAVBAR AL HACER SCROLL
    // ========================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(15, 15, 30, 0.95)';
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(15, 15, 30, 0.8)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // ANIMACIÓN DE ELEMENTOS AL ENTRAR EN VIEWPORT
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .step-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // ========================================
    // MENÚ MÓVIL (TOGGLE)
    // ========================================
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});