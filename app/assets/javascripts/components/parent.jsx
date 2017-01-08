class Parent extends React.Component {

  handleSubmit(e) {
  debugger
    console.log("worked")
  }

render() {
  return (

      <div className="jumbotron">
        <h1>Text appears here:</h1>
          <div className="form-group">
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
        <p><button className="btn btn-lg btn-success blue" role="button" onClick={this.handleSubmit}>Press to Start Recording</button></p>
      </div>

  )
}
}
