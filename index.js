(function() {
  var app, client, express, obj;

  express = require("express");

  app = express();

  client = require("cheerio-httpcli");

  app.set('port', process.env.PORT || 5050);

  obj = new Object();

  app.get("/", function(req, response) {
    return response.send("スラッシュの後に郵便番号を入力してください。");
  });

  app.get("/:zip", function(req, response) {
    return client.fetch("http://www.post.japanpost.jp/cgi-zip/zipcode.php", {
      zip: req.params.zip
    }, function(err, $, res) {
      if ($(".sp-b10 > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)").text() === "") {
        obj.error = true;
      } else {
        obj.error = false;
        obj.zipcode = $(".sp-b10 > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)").text();
        obj.region = $(".sp-b10 > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)").text();
        obj.city = $(".sp-b10 > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3)").text();
        obj.town = $(".sp-b10 > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(4)").text().trim().split("\r\n\t\t\t\t\t\t\t\t");
      }
      return response.send(JSON.stringify(obj));
    });
  });

  app.listen(app.get("port"), function() {
    return console.log("Node app is running at http://localhost:" + app.get("port"));
  });

}).call(this);
