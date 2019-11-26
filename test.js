const hello = require("./hello.js");
const tape = require("tape");

tape("Tape works as expected", t => {
  t.equals(1, 1, "Tape is working!");
  t.end();
});

tape("Addition function works as expected", t => {
  t.equals(
    hello(1, 1),
    2,
    "Addition function should return 2 when passed 1 & 1"
  );
  t.end();
});
