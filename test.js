const hello = require("./hello.js");
const tape = require("tape");

tape("Tape works as expected", t => {
  t.equals(1, 1, "Tape is working!");
  t.end();
});

tape("Addition function works as expected", t => {
  t.equals(
    hello.add(1, 1),
    2,
    "Addition function should return 2 when passed 1 & 1"
  );
  t.end();
});

tape("division function works as expected", t => {
  t.equals(
    hello.division(4, 2),
    2,
    "division function should return 2 when passed 4 & 2"
  );
  t.end();
});
tape("Subtract function works as expected", t => {
  t.equals(
    hello.sub(2, 1),
    1,
    "Subtract function should return 1 when passed 2 and 1"
  );
  t.end();
});
