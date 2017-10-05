

function insertTreeView(filesBucket) {
  filesBucket = $(filesBucket);

  // Get modified files
  var paths = $('.file-header[data-path]').toArray().map(function(el) {
    return $(el).attr('data-path').split('/');
  });
  var treeData = buildTree(paths);

  // Update HTML and render tree view
  $('.js-diff-progressive-container').css({
    'margin-left': '365px'
  })
  var fileTree = $('<div id="file-tree"></div>');
  fileTree.css({
    width: '350px',
    margin: 0,
    float: 'left'
  });
  filesBucket.find('#files').prepend(fileTree);
  fileTree.tree({ data: treeData });
}

function buildTree(paths) {
  var tree = [];

  paths.forEach(function(path) {
    if (path.length === 1) {
      tree.push({
        name: path[0],
        children: []
      });
    } else {
      var currentNode = path[0];
      var node = tree.find(function(node) { return node.name === currentNode; });
      if (!node) {
        node = {
          name: currentNode,
          children: []
        }
        tree.push(node);
      }
      var children = buildTree([path.slice(1)]);
      node.children = mergeChildren(node.children, children);
    }
  });

  return tree;
}

function mergeChildren(children1, children2) {
  children2.forEach(function(child) {
    // Check if the child doesn't already exist in children1
    var existingChild = children1.find(function(c) { return c.name === child.name });
    if (existingChild) {
      existingChild.children = mergeChildren(existingChild.children, child.children || []);
    } else {
      children1.push(child);
    }
  });
  return children1;
}

function removeTreeView() {

}

function startup() {
  var filesBucket = document.getElementById('files_bucket');
  console.log("files bucket:", filesBucket);
  if (filesBucket) {
    insertTreeView(filesBucket);
  }
  console.log("Github PR Treeview loaded.");
}

$(function() {
  // TODO: use a MutationObserver to capture changes to the <div> instead of a weak timer
  setTimeout(function(){
    startup();
  }, 1250);
});
