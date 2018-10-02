// not working on Firefox :(

// const SpeechRecognition =
//   window["SpeechRecognition"] || window["webkitSpeechRecognition"]

// console.log("Speech Recognition: ", SpeechRecognition)

// const recognition = SpeechRecognition()
// recognition.lang = "en-US" // Set this to the language of your choice

// // Succesfully parsed result
// recognition.onresult = event => {
//   const last = event.results.length - 1
//   const result = event.results[last][0].transcript
//   console.log(result)
// }

// recognition.onspeechend = () => {
//   recognition.stop()
//   console.log("Stopped recording!")
// }

// recognition.onnomatch = event => {
//   // No match, do something
//   console.log("Not match", event)
// }

// recognition.onerror = event => {
//   // Handle error
//   console.log("Error", event)
// }

// window.setTimeout(() => {
//   recognition.start()
//   console.log("Recording...")
// }, 2000)

// export const a = 5
