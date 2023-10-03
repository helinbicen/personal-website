function sendAboutEventToGTM(eventName, page, eventData) {
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
    sendAboutEventToGTM(eventName, event.detail.page, event.detail.eventData);
  });
}

const resumeClickEventName = "download-resume";
setupEventListener(resumeClickEventName);
