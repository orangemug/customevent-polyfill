var test = require('tape');

// CustomEvent polyfill
require("../");


test('default', function (t) {
  var evt, el = document.createElement("div");
  document.body.appendChild(el);

  el.addEventListener("test-event1", function(e) {
    t.equal(e.bubbles,    false);
    t.equal(e.cancelable, false);
    t.equal(e.detail,     null);
    t.end();
  }, true);

  evt = new CustomEvent("test-event1");
  el.dispatchEvent(evt);
});

test('bubbles', function (t) {
  var evt, el = document.createElement("div");
  document.body.appendChild(el);

  el.addEventListener("test-event2", function(e) {
    t.equal(e.bubbles,    true);
    t.equal(e.cancelable, false);
    t.equal(e.detail,     null);
    t.end();
  }, false);

  evt = new CustomEvent("test-event2", {
    bubbles: true,
    cancelable: false,
    detail: null
  });
  el.dispatchEvent(evt);
});

test('cancelable', function (t) {
  var evt, el = document.createElement("div");
  document.body.appendChild(el);

  el.addEventListener("test-event3", function(e) {
    t.equal(e.bubbles,    false);
    t.equal(e.cancelable, true);
    t.equal(e.detail,     null);
    t.end();
  }, false);

  evt = new CustomEvent("test-event3", {
    bubbles: false,
    cancelable: true,
    detail: null
  });
  el.dispatchEvent(evt);
});

test('detail', function (t) {
  var evt, el = document.createElement("div");
  document.body.appendChild(el);

  el.addEventListener("test-event4", function(e) {
    t.equal(e.bubbles,    false);
    t.equal(e.cancelable, false);
    t.equal(e.detail,     "testing123");
    t.end();
  }, false);

  evt = new CustomEvent("test-event4", {
    bubbles: false,
    cancelable: false,
    detail: "testing123"
  });
  el.dispatchEvent(evt);
});

