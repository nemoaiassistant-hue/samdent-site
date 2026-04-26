// ===== Samdent Website — Main JS =====

document.addEventListener('DOMContentLoaded', () => {

    // === Navbar scroll effect ===
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    // === Mobile hamburger ===
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // === Accordion ===
    document.querySelectorAll('.accordion-header').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const body = item.querySelector('.accordion-body');
            const isActive = item.classList.contains('active');

            // Close all in same accordion
            const accordion = item.closest('.accordion');
            accordion.querySelectorAll('.accordion-item').forEach(other => {
                other.classList.remove('active');
                other.querySelector('.accordion-body').style.maxHeight = null;
            });

            // Open clicked (if it wasn't already open)
            if (!isActive) {
                item.classList.add('active');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });

    // === Price tabs ===
    document.querySelectorAll('.price-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const clinic = tab.dataset.clinic;

            // Update tabs
            document.querySelectorAll('.price-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update tables
            document.querySelectorAll('.price-table-wrapper').forEach(w => w.classList.remove('active'));
            document.getElementById('prices-' + clinic).classList.add('active');
        });
    });

    // === Smooth scroll for anchor links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
