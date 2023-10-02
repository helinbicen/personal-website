// globalEventListener.js

function sendCustomEventToGTM(eventName, eventData) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    eventData: eventData,
  });
}

function setupEventListener(eventName) {
  document.addEventListener(eventName, (event) => {
    // Gelen event'i dinleyerek GTM'e veri gönder
    sendCustomEventToGTM(eventName, event.detail.eventData);
  });
}

const customEventName = 'click-contact-links';

// Event listener'ı ayarla
setupEventListener(customEventName);


