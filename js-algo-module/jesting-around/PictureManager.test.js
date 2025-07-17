const PictureManager = require("./PictureManager");

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity
  const picManager = new PictureManager();
  expect(picManager.pictureURLs.length).toBe(0);

  picManager.addPicture("some_url");
  expect(picManager.pictureURLs.length).toBe(1); //test
  expect(picManager.pictureURLs).toContain("some_url"); //double check
});

test("removePicture should remove a picture URL from the pictureURL array", () => {
  const picManager = new PictureManager();
  picManager.addPicture("some_url");
  picManager.addPicture("some_url2");
  picManager.addPicture("some_url3");
  expect(picManager.pictureURLs.length).toBe(3);
  picManager.removePicture("some_url");
  expect(picManager.pictureURLs.length).toBe(2);
  expect(picManager.pictureURLs).not.toContain("some_url");
});
