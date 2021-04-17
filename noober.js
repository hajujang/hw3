// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // 🔥 YOUR CODE ENDS HERE 🔥
  // Passenger detials, pickup location, and dropoff location
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber

  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city 
  let pickupState = ride.pickupLocation.state 
  let pickupZip = ride.pickupLocation.zip 

  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city 
  let dropoffState = ride.dropoffLocation.state 
  let dropoffZip = ride.dropoffLocation.zip 

  // Noober Purple or not
  let levelOfService 
  if (ride.purpleRequested==true){
    levelOfService = `Noober Purple Passegner`
  } else if (ride.numberOfPassengers > 3){
    levelOfService = 'Noober XL Passenger'
  } else {
    levelOfService = 'Noober X Passenger'
  }
  // console.log(levelOfService) 
  // console.log(ride.purpleRequested)
  // console.log(ride.numberOfPassengers)

  // A human-readable format
  console.log(`${levelOfService}: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.`)


})
