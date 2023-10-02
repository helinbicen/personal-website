// globalEventListener.js

function sendCustomEventToGTM(eventName, page, eventData) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    page: page,
    eventData: eventData,
  });
}



function setupEventListener(eventName) {
  document.addEventListener(eventName, (event) => {
    // Gelen event'i dinleyerek GTM'e veri gönder
    sendCustomEventToGTM(eventName, event.detail.page, event.detail.eventData);
  });
}

// Event adını dinamik bir şekilde belirleyebilirsiniz
const customEventName = 'contact-link-click';

// Event listener'ı ayarla
setupEventListener(customEventName);