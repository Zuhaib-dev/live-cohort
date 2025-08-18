function fnLimiter(fn, limit) {
  let totalCalled = 0;
  return function () {
    if (totalCalled < limit) {
      totalCalled++;
      fn();
    }
  };
}
let limiter = fnLimiter(function () {
  console.log("Im in my limits");
}, 3);
limiter();
limiter();
limiter();
limiter();
limiter();
