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
    sendCustomEventToGTM(eventName, event.detail.page, event.detail.eventData);
  });
}

const contactClickEventName = "click-contact-links";
const resumeClickEventName = "get_resume";

setupEventListener(contactClickEventName);
