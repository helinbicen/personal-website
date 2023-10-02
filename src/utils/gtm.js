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

const contactClickEventName = "trigger-contact-link-click";
const resumeClickEventName = "get_resume_trigger";

setupEventListener(contactClickEventName);
setupEventListener(resumeClickEventName);
