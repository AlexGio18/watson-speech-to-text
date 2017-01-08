class Parent extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    let urlBase = "https://api.fullcontact.com/v2/person.json?email="
    let inputText = $("#inputText").val();
    urlBase = urlBase+"bart@fullcontact.com"    

    $.ajax({
      url: "https://api.fullcontact.com/v2/person.json?email=bart@fullcontact.com",
      method: 'GET',
      headers: { 'X-FullContact-APIKey': 'empty',
      "Access-Control-Allow-Credentials": true
       },
  }).done(function(response){
    debugger
    console.log(response)
  })
}

render() {
  return (

      <div className="jumbotron">
        <h1>Write Text Here:</h1>
          <div className="form-group">
            <textarea className="form-control" rows="5" id="inputText"></textarea>
          </div>
        <p><button className="btn btn-lg btn-success blue" role="button" onClick={this.handleSubmit}>Submit</button></p>
      </div>

  )
}
}
