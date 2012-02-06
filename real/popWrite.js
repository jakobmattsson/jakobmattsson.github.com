(function() {
  var written = window.byburt_documentWritten || [];
  delete window.byburt_documentWritten;
  if (window.byburt_documentWrite) {
    document.write = window.byburt_documentWrite;
    delete window.byburt_documentWrite;
  }
  window.byburt_onPopWrite(written.join(""));
}());
