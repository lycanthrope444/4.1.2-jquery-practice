(function(){

  $(function(){
    //List of variables to be used
    var myFilesHeader = $(".files").find('h3'),
    mailHeader = $('.mail').find('h3'),
    cloudHeader = $('.cloud').find('h3'),
    logOutHeader = $(".log-out").find('h3'),
    listFiles = $(".ol-files"),
    listMail = $(".ol-mail"),
    listCloud = $(".ol-cloud");

//event handlers for headers
    myFilesHeader.click(function(){
      listFiles.slideToggle(400);
    });

    mailHeader.click(function(){
      listMail.slideToggle(400);
    });

    cloudHeader.click(function(){
      listCloud.slideToggle(400);
    });

    logOutHeader.click(function(){
      console.log("log-out clicked");
    });

  }());

})();
