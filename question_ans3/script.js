document.addEventListener('DOMContentLoaded', () => {
    fetchCafes();
  });

  async function fetchCafes() {
    try {
      const cafesResponse = await fetch('CafesEndpoint'); // Replace with your actual endpoint
      const placesResponse = await fetch('PlacesEndpoint'); // Replace with your actual endpoint

      const cafes = await cafesResponse.json();
      const places = await placesResponse.json();

      displayCafes(cafes, places);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function displayCafes(cafes, places) {
    const cafeList = document.getElementById('cafeList');
    cafeList.innerHTML = '';

    cafes.forEach(cafe => {
      const matchingPlace = places.find(place => place.id === cafe.place_id);
      if (matchingPlace) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${cafe.name}</td>
          <td>${matchingPlace.street_no}</td>
          <td>${matchingPlace.locality}</td>
          <td>${matchingPlace.postal_code}</td>
          <td>${matchingPlace.lat}</td>
          <td>${matchingPlace.long}</td>
        `;
        cafeList.appendChild(row);
      }
    });
  }

  function searchCafes() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const filteredCafes = cafes.filter(cafe => cafe.name.toLowerCase().includes(searchTerm));
    displayCafes(filteredCafes, places);
  }