function doGet() {
  // try {
  //   var parentFolder = DriveApp.getRootFolder();
  //   getChildFolders(parentFolder);
  // } catch (e) {
  //   Logger.log(e.toString());
  // }

  // return HtmlService.createTemplateFromFile("index")
  //   .evaluate()
  //   .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
  let content = [
    {
      name: 'lee',
      age: 34,
    },
    {
      name: 'joy',
      age: 25,
    }
  ]
  return ContentService.createTextOutput(JSON.stringify(content) ).setMimeType(ContentService.MimeType.JSON); 
}