'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: "For those that can't decide...",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNumber = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNumber];
  alert(option);
};

var onRemoveOptions = function onRemoveOptions() {
  app.options = [];
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
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onRemoveOptions },
      'Remove options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, index) {
        return React.createElement(
          'li',
          { key: index },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();
