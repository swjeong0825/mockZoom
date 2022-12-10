
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener('open', () => {
  console.log("connected_to_server");
})

socket.addEventListener('message', (msg) => {
  console.log("Just got this: ", msg.data)
})


socket.addEventListener("close", () => {
  console.log("disconnected from server")
})

setTimeout(() => {
  socket.send("helllo from browser")
}, 3000);