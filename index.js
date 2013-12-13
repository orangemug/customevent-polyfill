if(!window.CustomEvent) {
  window.CustomEvent = function(event, params) {
    if(!params) {
      params = {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
    }
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
}
