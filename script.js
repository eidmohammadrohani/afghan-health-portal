// ============================================
// AFGHAN HEALTH PORTAL MEL - JAVASCRIPT SYSTEM
// ============================================

// Doctor Data
const doctors = [
    {
        id: 1,
        name: "Dr. Ahmad Rahimi",
        specialty: "cardiology",
        specialtyLabel: "Cardiology",
        location: "kabul",
        locationLabel: "Kabul",
        rating: 4.9,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 2,
        name: "Dr. Fatima Haidari",
        specialty: "gynecology",
        specialtyLabel: "Gynecology",
        location: "herat",
        locationLabel: "Herat",
        rating: 4.8,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 3,
        name: "Dr. Mohammad Karimi",
        specialty: "pediatrics",
        specialtyLabel: "Pediatrics",
        location: "mazar",
        locationLabel: "Mazar-e-Sharif",
        rating: 4.7,
        reviews: 85,
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop " ,
        available: true
    },
    {
        id: 4,
        name: "Dr. Sara Noori",
        specialty: "neurology",
        specialtyLabel: "Neurology",
        location: "kabul",
        locationLabel: "Kabul",
        rating: 4.9,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 5,
        name: "Dr. Hamid Ahmadi",
        specialty: "orthopedics",
        specialtyLabel: "Orthopedics",
        location: "kandahar",
        locationLabel: "Kandahar",
        rating: 4.6,
        reviews: 72,
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 6,
        name: "Dr. Zainab Rahmani",
        specialty: "dermatology",
        specialtyLabel: "Dermatology",
        location: "kabul",
        locationLabel: "Kabul",
        rating: 4.8,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 7,
        name: "Dr. Fariha Barakzi",
        specialty: "dermatology",
        specialtyLabel: "Dermatology",
        location: "Herat",
        locationLabel: "Herat",
        rating: 4.8,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=400&h=300&fit=crop",
        available: true
    }

];

// ---------- Specialties Data ----------
const specialties = [
    { icon: "fa-user-md", name: "General", count: 45 },
    { icon: "fa-heart", name: "Cardiology", count: 28 },
    { icon: "fa-brain", name: "Neurology", count: 22 },
    { icon: "fa-child", name: "Pediatrics", count: 35 },
    { icon: "fa-female", name: "Gynecology", count: 30 },
    { icon: "fa-bone", name: "Orthopedics", count: 25 },
    { icon: "fa-allergies", name: "Dermatology", count: 18 },
    { icon: "fa-teeth", name: "Dentistry", count: 32 },
    { icon: "fa-eye", name: "Ophthalmology", count: 20 },
    { icon: "fa-brain", name: "Psychiatry", count: 15 }
];

// ---------- News Data ----------
const news = [
    {
        title: "New Health Initiative Launched in Kabul",
        excerpt: "The Ministry of Public Health announces a new program to improve healthcare access in remote areas.",
        date: "September 16, 2026",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop"
    },
    {
        title: "Telemedicine Services Expanding Across Afghanistan",
        excerpt: "Patients in rural provinces can now connect with specialists through new digital health platforms.",
        date: "June 12, 2026",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=300&fit=crop"
    },
    {
        title: "Mental Health Awareness Campaign Launched",
        excerpt: "A nationwide campaign aims to reduce stigma around mental health and provide support resources.",
        date: "June 10, 2026",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=300&fit=crop"
    }
];

// ---------- Render Doctors ----------
function renderDoctors(filteredDoctors) {
    const grid = document.getElementById('doctorsGrid');
    const data = filteredDoctors || doctors;
    
    grid.innerHTML = data.map(doc => `
        <div class="doctor-card" data-specialty="${doc.specialty}" data-location="${doc.location}">
            <img src="${doc.image}" alt="${doc.name}" class="doctor-card-img">
            <div class="doctor-card-body">
                <h3>${doc.name}</h3>
                <div class="specialty">${doc.specialtyLabel}</div>
                <div class="location"><i class="fas fa-map-marker-alt"></i> ${doc.locationLabel}</div>
                <div class="doctor-card-footer">
                    <span class="rating"><i class="fas fa-star"></i> ${doc.rating} (${doc.reviews} reviews)</span>
                    <button class="btn btn-primary" onclick="bookAppointment('${doc.name}')">
                        <i class="fas fa-calendar-check"></i> Book
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ---------- Render Specialties ----------
function renderSpecialties() {
    const grid = document.getElementById('specialtiesGrid');
    grid.innerHTML = specialties.map(spec => `
        <div class="specialty-card" onclick="filterBySpecialty('${spec.name.toLowerCase()}')">
            <i class="fas ${spec.icon}"></i>
            <h4>${spec.name}</h4>
            <p>${spec.count} Doctors</p>
        </div>
    `).join('');
}

// ---------- Render News ----------
function renderNews() {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = news.map(item => `
        <div class="news-card">
            <img src="${item.image}" alt="${item.title}" class="news-card-img">
            <div class="news-card-body">
                <div class="date"><i class="far fa-calendar-alt"></i> ${item.date}</div>
                <h3>${item.title}</h3>
                <p>${item.excerpt}</p>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// ---------- Filter Doctors ----------
function filterDoctors() {
    const specialty = document.getElementById('specialtyFilter').value;
    const location = document.getElementById('locationFilter').value;
    const search = document.getElementById('doctorSearch').value.toLowerCase();

    let filtered = doctors;

    if (specialty !== 'all') {
        filtered = filtered.filter(d => d.specialty === specialty);
    }
    if (location !== 'all') {
        filtered = filtered.filter(d => d.location === location);
    }
    if (search) {
        filtered = filtered.filter(d => 
            d.name.toLowerCase().includes(search) || 
            d.specialtyLabel.toLowerCase().includes(search) ||
            d.locationLabel.toLowerCase().includes(search)
        );
    }

    renderDoctors(filtered);
    updateResultsCount(filtered.length);
}

function updateResultsCount(count) {
    const header = document.querySelector('.section-header h2');
    if (header) {
        header.textContent = count > 0 ? 
            `Search Healthcare Professionals (${count} found)` : 
            'Search Healthcare Professionals';
    }
}

function resetFilters() {
    document.getElementById('specialtyFilter').value = 'all';
    document.getElementById('locationFilter').value = 'all';
    document.getElementById('doctorSearch').value = '';
    renderDoctors(doctors);
    updateResultsCount(doctors.length);
}

function filterBySpecialty(specialty) {
    document.getElementById('specialtyFilter').value = specialty;
    filterDoctors();
    document.getElementById('find-doctor').scrollIntoView({ behavior: 'smooth' });
}

// ---------- Search Suggestions ----------
function searchDoctors() {
    const query = document.getElementById('doctorSearch').value.toLowerCase();
    const suggestions = document.getElementById('searchResults');
    
    if (query.length < 2) {
        suggestions.classList.remove('active');
        return;
    }

    const results = doctors.filter(d => 
        d.name.toLowerCase().includes(query) ||
        d.specialtyLabel.toLowerCase().includes(query) ||
        d.locationLabel.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        suggestions.innerHTML = results.slice(0, 5).map(d => `
            <div class="suggestion-item" onclick="selectSuggestion('${d.name}')">
                <i class="fas fa-user-md"></i>
                <div>
                    <strong>${d.name}</strong>
                    <span style="display:block;font-size:13px;color:#6b7280;">${d.specialtyLabel} • ${d.locationLabel}</span>
                </div>
            </div>
        `).join('');
        suggestions.classList.add('active');
    } else {
        suggestions.innerHTML = `<div class="suggestion-item">No doctors found</div>`;
        suggestions.classList.add('active');
    }
}

function selectSuggestion(name) {
    document.getElementById('doctorSearch').value = name;
    document.getElementById('searchResults').classList.remove('active');
    filterDoctors();
}

// ---------- Book Appointment ----------
function bookAppointment(doctorName) {
    alert(`✅ Appointment request sent to ${doctorName}!\nYou will receive a confirmation call within 24 hours.`);
}

// ---------- Mobile Menu ----------
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});

// ---------- Navbar Scroll Effect ----------
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ---------- Counter Animation ----------
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + (target > 1000 ? '+' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target > 1000 ? '+' : '+');
            }
        };
        updateCounter();
    });
}

// ---------- Initialize ----------
document.addEventListener('DOMContentLoaded', function() {
    renderDoctors(doctors);
    renderSpecialties();
    renderNews();
    animateCounters();

    // Close search suggestions on click outside
    document.addEventListener('click', function(e) {
        const search = document.getElementById('searchResults');
        if (!e.target.closest('.hero-search')) {
            search.classList.remove('active');
        }
    });
});