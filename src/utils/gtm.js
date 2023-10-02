// globalEventListener.js

function sendCustomEventToGTM(eventName, eventData) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    eventData: eventData,
  });
}

document.addEventListener("customEvent", (event) => {
  // Gelen event'i dinleyerek GTM'e veri gönder
  sendCustomEventToGTM(event.detail.eventName, event.detail.eventData);
});
