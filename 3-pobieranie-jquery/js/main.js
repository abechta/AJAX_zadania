$(function () {
  let btn = $("#get-data");

  btn.click(function () {
    //opcja z get
    $.get("https://akademia108.pl/api/ajax/get-post.php")
      .done(function (data) {
        let pId = $("<p></p>").text("Post id " + data.id);
        let pUserId = $("<p></p>").text("Post user id " + data.userId);
        let pTitle = $("<p></p>").text("Post title " + data.title);
        let pBody = $("<p></p>").text("Post body " + data.body);
        let hr = $("<hr/>");

        let bodyEl = $("body");

        bodyEl.append(pId);
        bodyEl.append(pUserId);
        bodyEl.append(pTitle);
        bodyEl.append(pBody);
        bodyEl.append(hr);
      })
      .fail(function (err) {
        console.log(err);
      });

    // opcja z getJSON
    $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
      .done(function (data) {
        let pId = $("<p></p>").text("Post id " + data.id);
        let pUserId = $("<p></p>").text("Post user id " + data.userId);
        let pTitle = $("<p></p>").text("Post title " + data.title);
        let pBody = $("<p></p>").text("Post body " + data.body);
        let hr = $("<hr/>");

        let bodyEl = $("body");

        bodyEl.append(pId);
        bodyEl.append(pUserId);
        bodyEl.append(pTitle);
        bodyEl.append(pBody);
        bodyEl.append(hr);
      })
      .fail(function (err) {
        console.log(err);
      });
  });
});
