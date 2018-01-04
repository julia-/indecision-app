class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
