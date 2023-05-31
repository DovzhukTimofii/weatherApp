const cities = [
    'Kyiv', 'London', 'New York', 'Paris', 'Tokyo', 'Sydney', 'Berlin', 'Rome', 'Moscow', 'Los Angeles',
    'Toronto', 'Barcelona', 'Amsterdam', 'Dubai', 'Mumbai', 'Cairo', 'Singapore', 'Rio de Janeiro', 'Seoul',
    'Athens', 'Budapest', 'Prague', 'Stockholm', 'Vienna', 'Cape Town', 'Helsinki', 'Mexico City', 'Nairobi',
    'San Francisco', 'Vancouver', 'Madrid', 'Oslo', 'Warsaw', 'Beijing', 'Bangkok', 'Jakarta', 'Lima',
    'Lisbon', 'Dublin', 'Wellington', 'Zurich', 'Brussels', 'Brasilia', 'Copenhagen', 'Havana', 'Kuala Lumpur',
    'Munich', 'Buenos Aires', 'Seville', 'Edinburgh', 'Florence', 'Venice', 'Istanbul', 'Santiago', 'Helsinki',
    'Melbourne', 'Cape Town', 'Vienna', 'Rio de Janeiro', 'Prague', 'Dublin', 'Hamburg', 'Bucharest', 'Reykjavik',
    'Marrakesh', 'Brisbane', 'Stockholm', 'Cairo', 'Lisbon', 'Krakow', 'Montreal', 'Mumbai', 'Copenhagen',
    'Seoul', 'Shanghai', 'Oslo', 'Budapest', 'Bangkok', 'Auckland', 'Barcelona', 'Berlin', 'Chicago', 'Hanoi',
    'Los Angeles', 'Madrid', 'Miami', 'Milan', 'Nairobi', 'New Delhi', 'Paris', 'Perth', 'San Francisco', 'Sao Paulo',
    'Sydney', 'Tokyo', 'Toronto', 'Vancouver', 'Washington D.C.', 'Zurich'
  ];
const randomIndex = Math.floor(Math.random() * cities.length);
export const randomCity = cities[randomIndex];
