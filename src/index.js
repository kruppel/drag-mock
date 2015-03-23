
var DragDropAction = require('./DragDropAction');


function call(instance, methodName, args) {
  return instance[methodName].apply(instance, args);
}


var dragMock = {
  dragStart: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragStart', arguments);
  },
  dragOver: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragOver', arguments);
  },
  dragLeave: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragLeave', arguments);
  },
  drop: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'drop', arguments);
  },

  // Just for unit testing:
  DataTransfer: require('./DataTransfer'),
  DragDropAction: require('./DragDropAction'),
  eventFactory: require('./eventFactory')
};

module.exports = dragMock;
