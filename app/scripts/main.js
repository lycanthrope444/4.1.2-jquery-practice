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

    // initial hiding
    myFilesHeader.addClass("selected-header");
    listMail.hide();
    listCloud.hide();

    //event handlers for headers
    myFilesHeader.click(function(){
      //sets background color to match comp & removes from the other headers
      myFilesHeader.addClass("selected-header");
      mailHeader.removeClass("selected-header");
      cloudHeader.removeClass("selected-header");
      logOutHeader.removeClass("selected-header");
      //Slides the menus down for the selected header & up for the other ones
      listFiles.slideDown(400);
      listMail.slideUp(400);
      listCloud.slideUp(400);
    });

    mailHeader.click(function(){
      myFilesHeader.removeClass("selected-header");
      mailHeader.addClass("selected-header");
      cloudHeader.removeClass("selected-header");
      logOutHeader.removeClass("selected-header");
      listFiles.slideUp(400);
      listMail.slideDown(400);
      listCloud.slideUp(400);
    });

    cloudHeader.click(function(){
      myFilesHeader.removeClass("selected-header");
      mailHeader.removeClass("selected-header");
      cloudHeader.addClass("selected-header");
      logOutHeader.removeClass("selected-header");
      listFiles.slideUp(400);
      listMail.slideUp(400);
      listCloud.slideDown(400);
    });

    logOutHeader.click(function(){
      myFilesHeader.removeClass("selected-header");
      mailHeader.removeClass("selected-header");
      cloudHeader.removeClass("selected-header");
      logOutHeader.addClass("selected-header");
      console.log("log-out clicked");
    });

    //event handlers for hovering colors
    myFilesHeader.hover(function(){
      myFilesHeader.addClass("hover-header");
    }, function(){
      myFilesHeader.removeClass("hover-header");
    });

    mailHeader.hover(function(){
      mailHeader.addClass("hover-header");
    }, function(){
      mailHeader.removeClass("hover-header");
    });

    cloudHeader.hover(function(){
      cloudHeader.addClass("hover-header");
    }, function(){
      cloudHeader.removeClass("hover-header");
    });

    logOutHeader.hover(function(){
      logOutHeader.addClass("hover-header");
    }, function(){
      logOutHeader.removeClass("hover-header");
    });

  }());

})();
