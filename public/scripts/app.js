'use strict';

var app = {
  title: 'Visibility Toggle',
  display: true
};

var onToggleDisplay = function onToggleDisplay() {
  app.display = !app.display;
  renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onToggleDisplay },
      app.display ? 'Show' : 'Hide'
    ),
    !app.display && React.createElement(
      'p',
      null,
      'Some text now displaying'
    )
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();
