// Cineplex Theater

const moviesData = {
  "movies": [
    {
      "id": 1,
      "title": "Superman",
      "rating": "U/A",
      "duration": "2h 15min",
      "genre": "Action/Adventure",
      "releaseDate": "July 11, 2025",
      "description": "James Gunn's reboot of Superman kicks off a new generation of the DC Cinematic Universe, focusing on Lois Lane and Clark Kent's relationship.",
      "poster": "https://i.redd.it/r99zvfvegk8f1.png",
      "backdrop": "https://pyxis.nymag.com/v1/imgs/b91/219/9cfbde48d3984c2f7237a41e45868bd425-superman-trailer.2x.rsocial.w600.png",
      "trailer": "https://www.youtube.com/watch?v=Ox8ZLF6cGM0",
      "director": "James Gunn",
      "cast": ["David Corenswet", "Rachel Brosnahan", "Nathan Fillion"],
      "status": "now-playing"
    },
    {
      "id": 2,
      "title": "Jurassic World Rebirth",
      "rating": "PG-13",
      "duration": "2h 13min",
      "genre": "Action/Sci-Fi",
      "releaseDate": "July 2, 2025",
      "description": "The beloved Jurassic franchise returns with another larger-than-life dinosaur phenomenon, featuring a star-studded cast.",
      "poster": "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/4a663165-56c9-496a-9f7e-6ae4ff374346.png",
      "backdrop": "/api/placeholder/1200/675",
      "trailer": "https://example.com/jurassic-trailer",
      "director": "Gareth Edwards",
      "cast": ["Scarlett Johansson", "Mahershala Ali", "Jonathan Bailey"],
      "status": "now-playing"
    },
    {
      "id": 3,
      "title": "The Fantastic Four: First Steps",
      "rating": "PG-13",
      "duration": "2h 5min",
      "genre": "Action/Superhero",
      "releaseDate": "July 25, 2025",
      "description": "The Fantastic Four make their return to the big screen in this highly anticipated Marvel adventure.",
      "poster": "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/e4fb6536-f0f2-42cc-9253-39511b4f21a3.png",
      "backdrop": "/api/placeholder/1200/675",  
      "trailer": "https://example.com/fantastic-four-trailer",
      "director": "Matt Shakman",
      "cast": ["Pedro Pascal", "Vanessa Kirby", "Joseph Quinn"],
      "status": "now-playing"
    },
    {
      "id": 4,
      "title": "I Know What You Did Last Summer",
      "rating": "R",
      "duration": "1h 50min",
      "genre": "Horror/Thriller",
      "releaseDate": "July 18, 2025",
      "description": "A fresh take on the classic horror thriller that will keep you on the edge of your seat.",
      "poster": "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/e69d1a28-2293-4ab3-9990-efe541530e1b.png",
      "backdrop": "/api/placeholder/1200/675",
      "trailer": "https://example.com/ikwydls-trailer",
      "director": "Jennifer Kent",
      "cast": ["Madison Bailey", "Fiona Dourif", "Tyriq Withers"],
      "status": "now-playing"
    },
    {
      "id": 5,
      "title": "F1: The Movie",
      "rating": "PG-13",
      "duration": "2h 20min",
      "genre": "Action/Sports",
      "releaseDate": "June 27, 2025",
      "description": "Experience the high-octane world of Formula 1 racing in this adrenaline-pumping sports drama.",
      "poster": "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/620c83cf-c38b-4622-a121-7caa198589b6.png",
      "backdrop": "/api/placeholder/1200/675",
      "trailer": "https://example.com/f1-trailer",
      "director": "Joseph Kosinski",
      "cast": ["Brad Pitt", "Damson Idris", "Kerry Condon"],
      "status": "now-playing"
    },
    {
      "id": 6,
      "title": "How to Train Your Dragon",
      "rating": "PG",
      "duration": "1h 44min",
      "genre": "Animation/Family",
      "releaseDate": "June 13, 2025",
      "description": "The beloved animated series continues with Hiccup and Toothless in their greatest adventure yet.",
      "poster": "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/809e4770-8890-41ee-9bae-339709b9df20.png",
      "backdrop": "/api/placeholder/1200/675",
      "trailer": "https://example.com/httyd-trailer",
      "director": "Dean DeBlois",
      "cast": ["Mason Thames", "Nico Parker", "Gerard Butler"],
      "status": "now-playing"
    },
    {
      "id": 7,
      "title": "HariHara VeeraMallu",
      "rating": "A",
      "duration": "2h 32min",
      "genre": "Action/Adventure",
      "releaseDate": "July 24, 2025",
      "description": "Veera Mallu spearheads a revolution against the tyrannical actions of the army generals.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZGU1NmEtODkwOS00MjYyLTljODctMWZjZGU1NGI0MjBlXkEyXkFqcGc@._V1_.jpg",
      "backdrop": "/api/placeholder/1200/675",
      "trailer": "https://youtu.be/Qv-NEQJehVU?si=FPdy27TXJL2CKedA",
      "director": "Krish Jagarlamudi",
      "cast": ["Pawan Kalyan", "Nidhi Agarwal"],
      "status": "now-playing"
    },
    {
      "id": 8,
      "title": "Salaar part2: Shouryanga Parvam",
      "rating": "A",
      "duration": "2h 55min",
      "genre": "Action/Thriller",
      "releaseDate": "December 22, 2028",
      "description": "The rivalry and betrayal between Devaratha and his childhood friend, Vardha Raja (Prithviraj Sukumaran), as they vie for control of Khansar.",
      "poster": "https://encrypted-tbn2.gstaticcom/images?q=tbn:ANd9GcQtqR7E0nfNEQBDpZasJ04uz-7zpzLGYl0PDNX8oSOLitkl7tGB",
      "backdrop": "/api/placeholder/1200/675",
      "trailer": "https://example.com/badguys2-trailer",
      "director": "Prashanth Neel",
      "cast": ["Prabhas", "Shruti Hassan"],
      "status": "coming-soon"
    }
  ],
  "theaters": [
    {
      "id": 1,
      "name": "Theater 1 - IMAX",
      "capacity": 200,
      "amenities": ["IMAX", "Dolby Atmos", "Reclining Seats"]
    },
    {
      "id": 2,
      "name": "Theater 2 - Premium",
      "capacity": 150,
      "amenities": ["Dolby Atmos", "Reclining Seats", "Premium Sound"]
    },
    {
      "id": 3,
      "name": "Theater 3 - Standard",
      "capacity": 120,
      "amenities": ["Digital Projection", "Surround Sound"]
    },
    {
      "id": 4,
      "name": "Theater 4 - VIP",
      "capacity": 80,
      "amenities": ["VIP Seating", "Food Service", "Private Bar"]
    }
  ],
  "showtimes": [
    "10:00 AM", "1:15 PM", "4:30 PM", "7:45 PM", "11:00 PM"
  ],
  "seatLayout": {
    "rows": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    "seatsPerRow": 16,
    "aisles": [4, 12]
  }
};
let currentHeroSlide = 0;
let selectedMovie = null;
let bookingData = {
  movie: null,
  theater: null,
  showtime: null,
  date: null,
  seats: [],
  customer: {}
};

document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  loadMovies();
  initializeHeroCarousel();
  initializeNavigation();
  initializeSearch();
  initializeFilters();
  setupModalEvents();
}

function initializeHeroCarousel() {
  const heroSlides = document.querySelectorAll('.hero-slide');
  const nowPlayingMovies = moviesData.movies.filter(movie => movie.status === 'now-playing');
  
  heroSlides.forEach((slide, index) => {
    if (nowPlayingMovies[index]) {
      const movie = nowPlayingMovies[index];
      slide.setAttribute('data-movie', movie.id);
      
      const backdrop = slide.querySelector('.hero-backdrop');
      backdrop.style.backgroundImage = `url('${movie.backdrop}')`;
      
      const title = slide.querySelector('.hero-title');
      title.textContent = movie.title;
      
      const meta = slide.querySelector('.hero-meta');
      meta.textContent = `${movie.rating} • ${movie.genre} • ${movie.duration}`;
      
      const description = slide.querySelector('.hero-description');
      description.textContent = movie.description;
      
      const poster = slide.querySelector('.poster-img');
      poster.src = movie.poster;
      poster.alt = movie.title;
    }
  });
  
  setInterval(nextSlide, 8000);
}

function nextSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  
  slides[currentHeroSlide].classList.remove('active');
  currentHeroSlide = (currentHeroSlide + 1) % slides.length;
  slides[currentHeroSlide].classList.add('active');
}

function previousSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  
  slides[currentHeroSlide].classList.remove('active');
  currentHeroSlide = currentHeroSlide === 0 ? slides.length - 1 : currentHeroSlide - 1;
  slides[currentHeroSlide].classList.add('active');
}

function loadMovies() {
  loadNowPlayingMovies();
  loadComingSoonMovies();
}

function loadNowPlayingMovies(filter = 'all') {
  const nowPlayingGrid = document.getElementById('nowPlayingGrid');
  if (!nowPlayingGrid) return;
  
  const nowPlayingMovies = moviesData.movies.filter(movie => movie.status === 'now-playing');
  
  let filteredMovies = nowPlayingMovies;
  if (filter !== 'all') {
    filteredMovies = nowPlayingMovies.filter(movie => movie.genre.includes(filter));
  }
  
  nowPlayingGrid.innerHTML = '';
  
  filteredMovies.forEach(movie => {
    const movieCard = createMovieCard(movie);
    nowPlayingGrid.appendChild(movieCard);
  });
}

function loadComingSoonMovies() {
  const comingSoonGrid = document.getElementById('comingSoonGrid');
  if (!comingSoonGrid) return;
  
  const comingSoonMovies = moviesData.movies.filter(movie => movie.status === 'coming-soon');
  
  comingSoonGrid.innerHTML = '';
  
  comingSoonMovies.forEach(movie => {
    const movieCard = createMovieCard(movie);
    comingSoonGrid.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.addEventListener('click', () => openMovieDetails(movie.id));
  
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
    <div class="movie-info">
      <h3 class="movie-title">${movie.title}</h3>
      <div class="movie-meta">
        <span>${movie.rating}</span>
        <span>${movie.genre.split('/')[0]}</span>
        <span>${movie.duration}</span>
      </div>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;
  
  return card;
}

function openMovieDetails(movieId) {
  const movie = moviesData.movies.find(m => m.id === movieId);
  if (!movie) return;
  
  selectedMovie = movie;
  const modalElements = {
    poster: document.getElementById('modalPoster'),
    title: document.getElementById('modalTitle'),
    rating: document.getElementById('modalRating'),
    genre: document.getElementById('modalGenre'),
    duration: document.getElementById('modalDuration'),
    description: document.getElementById('modalDescription'),
    director: document.getElementById('modalDirector'),
    cast: document.getElementById('modalCast')
  };
  
  if (modalElements.poster) {
    modalElements.poster.src = movie.poster;
    modalElements.poster.alt = movie.title;
  }
  if (modalElements.title) modalElements.title.textContent = movie.title;
  if (modalElements.rating) modalElements.rating.textContent = movie.rating;
  if (modalElements.genre) modalElements.genre.textContent = movie.genre;
  if (modalElements.duration) modalElements.duration.textContent = movie.duration;
  if (modalElements.description) modalElements.description.textContent = movie.description;
  if (modalElements.director) modalElements.director.textContent = movie.director;
  if (modalElements.cast) modalElements.cast.textContent = movie.cast.join(', ');
  
  const modal = document.getElementById('movieModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('movieModal');
  if (modal) {
    modal.classList.remove('active');
    modal.classList.add('hidden');
  }
}

function playTrailer() {
  if (selectedMovie && selectedMovie.trailer) {
    window.open(selectedMovie.trailer, '_blank');
  } else {
    alert('Trailer not available at this time.');
  }
}

function showBookingFlow() {
  if (!selectedMovie) return;
  
  bookingData.movie = selectedMovie;
  closeModal();
  
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) {
    bookingModal.classList.remove('hidden');
    bookingModal.classList.add('active');
    
    // Reset to step 1
    resetBookingSteps();
    document.getElementById('step1').classList.add('active');
    document.querySelector('.step[data-step="1"]').classList.add('active');
    
    initializeBookingStep1();
  }
}

function closeBookingModal() {
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) {
    bookingModal.classList.remove('active');
    bookingModal.classList.add('hidden');
  }
  resetBookingData();
}

function resetBookingData() {
  bookingData = {
    movie: null,
    theater: null,
    showtime: null,
    date: null,
    seats: [],
    customer: {}
  };
}

function resetBookingSteps() {
  document.querySelectorAll('.booking-step').forEach(step => step.classList.remove('active'));
  document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
}

function initializeBookingStep1() {
  generateDateOptions();
  generateTheaterShowtimes();
}

function generateDateOptions() {
  const dateOptions = document.getElementById('dateOptions');
  if (!dateOptions) return;
  
  const today = new Date();
  
  dateOptions.innerHTML = '';
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const dateButton = document.createElement('button');
    dateButton.className = 'date-option';
    dateButton.textContent = date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    dateButton.addEventListener('click', () => selectDate(date, dateButton));
    
    if (i === 0) {
      dateButton.classList.add('selected');
      bookingData.date = date;
    }
    
    dateOptions.appendChild(dateButton);
  }
}

function selectDate(date, button) {
  document.querySelectorAll('.date-option').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  bookingData.date = date;
}

function generateTheaterShowtimes() {
  const theaterShowtimes = document.getElementById('theaterShowtimes');
  if (!theaterShowtimes) return;
  
  theaterShowtimes.innerHTML = '';
  
  moviesData.theaters.forEach(theater => {
    const theaterDiv = document.createElement('div');
    theaterDiv.className = 'theater-item';
    
    theaterDiv.innerHTML = `
      <div class="theater-name">${theater.name}</div>
      <div class="theater-amenities">${theater.amenities.join(' • ')}</div>
      <div class="showtime-buttons" id="showtimes-${theater.id}"></div>
    `;
    
    theaterShowtimes.appendChild(theaterDiv);
    
    const showtimeButtons = document.getElementById(`showtimes-${theater.id}`);
    moviesData.showtimes.forEach(time => {
      const timeButton = document.createElement('button');
      timeButton.className = 'showtime-btn';
      timeButton.textContent = time;
      timeButton.addEventListener('click', () => selectShowtime(theater, time, timeButton));
      showtimeButtons.appendChild(timeButton);
    });
  });
}

function selectShowtime(theater, time, button) {
  document.querySelectorAll('.showtime-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  
  bookingData.theater = theater;
  bookingData.showtime = time;
  
  const nextBtn = document.getElementById('nextStep1');
  if (nextBtn) nextBtn.disabled = false;
}

function initializeBookingStep2() {
  const theaterInfo = document.getElementById('selectedTheaterInfo');
  const showtimeInfo = document.getElementById('selectedShowtimeInfo');
  
  if (theaterInfo) theaterInfo.textContent = `Theater: ${bookingData.theater.name}`;
  if (showtimeInfo) showtimeInfo.textContent = `Date: ${bookingData.date.toLocaleDateString()} | Time: ${bookingData.showtime}`;
  
  generateSeatMap();
}

function generateSeatMap() {
  const seatMap = document.getElementById('seatMap');
  if (!seatMap) return;
  
  seatMap.innerHTML = '';
  
  moviesData.seatLayout.rows.forEach((row, rowIndex) => {
    const seatRow = document.createElement('div');
    seatRow.className = 'seat-row';
    
    const rowLabel = document.createElement('div');
    rowLabel.className = 'row-label';
    rowLabel.textContent = row;
    seatRow.appendChild(rowLabel);
    
    for (let seatNum = 1; seatNum <= moviesData.seatLayout.seatsPerRow; seatNum++) {
      if (moviesData.seatLayout.aisles.includes(seatNum)) {
        const aisle = document.createElement('div');
        aisle.className = 'aisle';
        seatRow.appendChild(aisle);
      }
      
      const seat = document.createElement('div');
      seat.className = 'seat available';
      seat.textContent = seatNum;
      seat.addEventListener('click', () => toggleSeat(row, seatNum, seat));
      if (Math.random() < 0.15) {
        seat.classList.remove('available');
        seat.classList.add('occupied');
        seat.removeEventListener('click', () => toggleSeat(row, seatNum, seat));
      }
      
      seatRow.appendChild(seat);
    }
    
    seatMap.appendChild(seatRow);
  });
}

function toggleSeat(row, seatNum, seatElement) {
  const seatId = `${row}${seatNum}`;
  
  if (seatElement.classList.contains('selected')) {
    seatElement.classList.remove('selected');
    seatElement.classList.add('available');
    bookingData.seats = bookingData.seats.filter(seat => seat !== seatId);
  } else if (bookingData.seats.length < 8) { // Max 8 seats per booking
    seatElement.classList.remove('available');
    seatElement.classList.add('selected');
    bookingData.seats.push(seatId);
  } else {
    alert('Maximum 8 seats can be selected.');
    return;
  }
  
  updateBookingSummary();
}

function updateBookingSummary() {
  const selectedSeatsElement = document.getElementById('selectedSeats');
  const totalPriceElement = document.getElementById('totalPrice');
  const nextBtn = document.getElementById('nextStep2');
  
  if (bookingData.seats.length === 0) {
    if (selectedSeatsElement) selectedSeatsElement.textContent = 'None';
    if (totalPriceElement) totalPriceElement.textContent = '0.00';
    if (nextBtn) nextBtn.disabled = true;
  } else {
    if (selectedSeatsElement) selectedSeatsElement.textContent = bookingData.seats.join(', ');
    const ticketPrice = 15.99; // Base ticket price
    const total = bookingData.seats.length * ticketPrice;
    if (totalPriceElement) totalPriceElement.textContent = total.toFixed(2);
    if (nextBtn) nextBtn.disabled = false;
  }
}

function initializeBookingStep3() {
  const nameInput = document.getElementById('customerName');
  if (nameInput) nameInput.focus();
}

function validateCustomerForm() {
  const name = document.getElementById('customerName')?.value.trim() || '';
  const email = document.getElementById('customerEmail')?.value.trim() || '';
  const phone = document.getElementById('customerPhone')?.value.trim() || '';
  
  if (!name || !email || !phone) {
    alert('Please fill in all required fields.');
    return false;
  }
  
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  bookingData.customer = { name, email, phone };
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function initializeBookingStep4() {
  const bookingId = generateBookingId();
  
  const confirmElements = {
    movie: document.getElementById('confirmMovie'),
    showtime: document.getElementById('confirmShowtime'),
    theater: document.getElementById('confirmTheater'),
    seats: document.getElementById('confirmSeats'),
    total: document.getElementById('confirmTotal'),
    customer: document.getElementById('confirmCustomer'),
    bookingId: document.getElementById('bookingId')
  };
  
  if (confirmElements.movie) confirmElements.movie.textContent = `${bookingData.movie.title} (${bookingData.movie.rating})`;
  if (confirmElements.showtime) confirmElements.showtime.textContent = `${bookingData.date.toLocaleDateString()} at ${bookingData.showtime}`;
  if (confirmElements.theater) confirmElements.theater.textContent = bookingData.theater.name;
  if (confirmElements.seats) confirmElements.seats.textContent = `Seats: ${bookingData.seats.join(', ')} (${bookingData.seats.length} tickets)`;
  
  const ticketPrice = 15.99;
  const total = bookingData.seats.length * ticketPrice;
  if (confirmElements.total) confirmElements.total.textContent = `Total: $${total.toFixed(2)}`;
  
  if (confirmElements.customer) confirmElements.customer.textContent = `${bookingData.customer.name} (${bookingData.customer.email})`;
  if (confirmElements.bookingId) confirmElements.bookingId.textContent = bookingId;
}

function generateBookingId() {
  return 'CPX' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
}

function printTicket() {
  window.print();
}
function nextBookingStep() {
  const currentStep = document.querySelector('.booking-step.active');
  if (!currentStep) return;
  
  const currentStepNum = parseInt(currentStep.id.slice(-1));
  
  if (currentStepNum === 3 && !validateCustomerForm()) {
    return;
  }
  
  currentStep.classList.remove('active');
  const currentIndicator = document.querySelector(`.step[data-step="${currentStepNum}"]`);
  if (currentIndicator) currentIndicator.classList.remove('active');
  
  const nextStepNum = currentStepNum + 1;
  const nextStep = document.getElementById(`step${nextStepNum}`);
  const nextStepIndicator = document.querySelector(`.step[data-step="${nextStepNum}"]`);
  
  if (nextStep) nextStep.classList.add('active');
  if (nextStepIndicator) nextStepIndicator.classList.add('active');
  
  switch (nextStepNum) {
    case 2:
      initializeBookingStep2();
      break;
    case 3:
      initializeBookingStep3();
      break;
    case 4:
      initializeBookingStep4();
      break;
  }
}

function prevBookingStep() {
  const currentStep = document.querySelector('.booking-step.active');
  if (!currentStep) return;
  
  const currentStepNum = parseInt(currentStep.id.slice(-1));
  
  currentStep.classList.remove('active');
  const currentIndicator = document.querySelector(`.step[data-step="${currentStepNum}"]`);
  if (currentIndicator) currentIndicator.classList.remove('active');
  
  const prevStepNum = currentStepNum - 1;
  const prevStep = document.getElementById(`step${prevStepNum}`);
  const prevStepIndicator = document.querySelector(`.step[data-step="${prevStepNum}"]`);
  
  if (prevStep) prevStep.classList.add('active');
  if (prevStepIndicator) prevStepIndicator.classList.add('active');
}

function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
  }
  
  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
  }
}

function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (searchTerm === '') {
    loadMovies();
    return;
  }
  
  const filteredMovies = moviesData.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.genre.toLowerCase().includes(searchTerm) ||
    movie.director.toLowerCase().includes(searchTerm) ||
    movie.cast.some(actor => actor.toLowerCase().includes(searchTerm))
  );
  
  displaySearchResults(filteredMovies);
}

function displaySearchResults(movies) {
  const nowPlayingGrid = document.getElementById('nowPlayingGrid');
  const comingSoonGrid = document.getElementById('comingSoonGrid');
  
  if (!nowPlayingGrid || !comingSoonGrid) return;
  
  const nowPlayingResults = movies.filter(movie => movie.status === 'now-playing');
  const comingSoonResults = movies.filter(movie => movie.status === 'coming-soon');
  
  nowPlayingGrid.innerHTML = '';
  comingSoonGrid.innerHTML = '';
  
  nowPlayingResults.forEach(movie => {
    const movieCard = createMovieCard(movie);
    nowPlayingGrid.appendChild(movieCard);
  });
  
  comingSoonResults.forEach(movie => {
    const movieCard = createMovieCard(movie);
    comingSoonGrid.appendChild(movieCard);
  });
  
  if (movies.length === 0) {
    nowPlayingGrid.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.7);">No movies found matching your search.</p>';
  }
}
function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      loadNowPlayingMovies(filter);
    });
  });
}
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
 
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}


function setupModalEvents() {
  
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      if (e.target.closest('#movieModal')) {
        closeModal();
      } else if (e.target.closest('#bookingModal')) {
        closeBookingModal();
      }
    }
  });
  
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const movieModal = document.getElementById('movieModal');
      const bookingModal = document.getElementById('bookingModal');
      
      if (movieModal && movieModal.classList.contains('active')) {
        closeModal();
      } else if (bookingModal && bookingModal.classList.contains('active')) {
        closeBookingModal();
      }
    }
  });
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});
window.openMovieDetails = openMovieDetails;
window.closeModal = closeModal;
window.showBookingFlow = showBookingFlow;
window.closeBookingModal = closeBookingModal;
window.nextBookingStep = nextBookingStep;
window.prevBookingStep = prevBookingStep;
window.playTrailer = playTrailer;
window.printTicket = printTicket;
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
