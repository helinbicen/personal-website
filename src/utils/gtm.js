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
    // listen to the event & send it to GTM
    sendCustomEventToGTM(eventName, event.detail.page, event.detail.eventData);
  });
}

// contact page

const contactClickEventName = "contact-link-click";

setupEventListener(contactClickEventName);

// projects page

const inspectProjectsEventName = "inspect-projects";
setupEventListener(inspectProjectsEventName);
