Monocle.Controls.CustomOverlay = function (reader, content) {

  var API = { constructor: Monocle.Controls.CustomOverlay }
  var k = API.constants = API.constructor;
  var p = API.properties = {
    reader: reader,
    content: content
  }


  function createControlElements() {
    var div = reader.dom.make('div', 'controls_contents_container');
    div.innerHTML = content;
    return div;
  }




  API.createControlElements = createControlElements;

  return API;
}
