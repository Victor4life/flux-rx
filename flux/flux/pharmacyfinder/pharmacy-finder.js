const pharmacies = [
            {
                name: "MedPlus Pharmacy",
                distance: "0.8 miles away",
                hours: "Open until 10 PM",
                address: "123 Main Street, New York, NY",
                phone: "+2348065152353"
            },
            {
                name: "Aerial care Pharmacy",
                distance: "1.2 miles away",
                hours: "Open until 9 PM",
                address: "456 Oak Avenue, New York, NY",
                phone: "+2348065152353"
            },
            {
                name: "HealthFirst Pharmacy",
                distance: "1.5 miles away",
                hours: "Open until 8 PM",
                address: "789 Elm Boulevard, New York, NY",
                phone: "+2348065152353"
            },
            {
                name: "CityMed Pharmacy",
                distance: "2.1 miles away",
                hours: "Open until 11 PM",
                address: "321 Pine Street, New York, NY",
                phone: "+2348065152353"
            }
        ];

        // DOM elements
        const locationInput = document.getElementById('locationInput');
        const searchButton = document.getElementById('searchButton');
        const pharmacyList = document.getElementById('pharmacyList');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');

        // Show notification function
        function showNotification(message) {
            notificationText.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Generate pharmacy cards
        function renderPharmacies() {
            pharmacyList.innerHTML = '';
            
            pharmacies.forEach(pharmacy => {
                const card = document.createElement('div');
                card.className = 'pharmacy-card';
                card.innerHTML = `
                    <div class="pharmacy-icon">
                        <i class="fas fa-clinic-medical"></i>
                    </div>
                    <div class="pharmacy-info">
                        <div class="pharmacy-name">${pharmacy.name}</div>
                        <div class="pharmacy-distance"><i class="fas fa-location-arrow"></i> ${pharmacy.distance} • ${pharmacy.hours}</div>
                        <div class="pharmacy-address"><i class="fas fa-map-pin"></i> ${pharmacy.address}</div>
                        <div class="pharmacy-address"><i class="fas fa-phone"></i> ${pharmacy.phone}</div>
                    </div>
                    <button class="action-btn" data-pharmacy="${pharmacy.name}">Directions</button>
                `;
                
                pharmacyList.appendChild(card);
            });
            
            // Add event listeners to direction buttons
            document.querySelectorAll('.action-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const pharmacyName = this.getAttribute('data-pharmacy');
                    showNotification(`Getting directions to ${pharmacyName}`);
                });
            });
        }

        // Initial render
        renderPharmacies();

        // Search functionality
        searchButton.addEventListener('click', function() {
            const location = locationInput.value.trim();
            
            if (location) {
                showNotification(`Searching for pharmacies near: ${location}`);
                
                // Simulate search delay
                setTimeout(() => {
                    showNotification(`Found ${pharmacies.length} pharmacies near ${location}`);
                }, 1500);
            } else {
                showNotification('Please enter a location or zip code');
            }
        });

        // Allow pressing Enter to search
        locationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });