console.log('App.js is running')

const app = {
  title: 'Indecision App',
  subtitle: "For those that can't decide...",
  options: []
}

const onFormSubmit = e => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderTemplate()
  }
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNumber]
  alert(option)
}

const onRemoveOptions = () => {
  app.options = []
  renderTemplate()
}

const appRoot = document.getElementById('app')

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button disabled={app.options.length === 0} onClick={onRemoveOptions}>
        Remove options
      </button>
      <ol>
        {app.options.map((option, index) => <li key={index}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderTemplate()
