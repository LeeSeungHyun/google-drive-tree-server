let treeNodes = [];

function doGet() {
  generateFolderTree();
  return ContentService
    .createTextOutput(JSON.stringify(treeNodes.reverse()))
    .setMimeType(ContentService.MimeType.JSON);
}

function generateFolderTree() {
  try {
    const parentFolder = DriveApp.getRootFolder();
    getChildFolders(parentFolder, treeNodes);
  } catch (e) {
    Logger.log(e.toString());
  }
}

function getChildFolders(parent, treeNodes) {
  const childFolders = parent.getFolders();
  while (childFolders.hasNext()) {

    const childFolder = childFolders.next();
    treeNodes.push({ title: childFolder.getName(), children: [] });

    const files = childFolder.getFiles();

    while (files.hasNext()) {
      treeNodes[treeNodes.length - 1].children.push({title: files.next().getName()});
    }

    getChildFolders(childFolder, treeNodes[treeNodes.length - 1].children);
  }
}