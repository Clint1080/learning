const { doesNotThrow } = require("assert");
const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  it("saves a user", () => {
    const joe = new User({ name: "joe" });

    joe.save().then(() => {
      // Has joe been saved succesfully
      assert(!joe.isNew);
      done();
    });
  });
});
