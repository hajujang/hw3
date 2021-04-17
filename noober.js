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

  // Store the passenger's first and last name, and phone number from passengerDetials and assign those to well-named variables.
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  
  // Store Pickup location information from pickupLocations and assign those to well-named variables. 
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city 
  let pickupState = ride.pickupLocation.state 
  let pickupZip = ride.pickupLocation.zip 
  
  // Store drop-off location information from dropoffLocations and assign those to well-named variables. 
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city 
  let dropoffState = ride.dropoffLocation.state 
  let dropoffZip = ride.dropoffLocation.zip 

  // Store information about whether the passenger is Noober Purple passenger, Noober XL passenger, or Noober X passenger  
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

  // Create a sentence for a human-readable format result
  let sentence =`${levelOfService}: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.`

  // Write the sentence to the JavaScript console
  console.log(sentence)


})
  // 🔥 YOUR CODE ENDS HERE 🔥