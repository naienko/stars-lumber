(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const API = {
  get: () => {
    return fetch("http://127.0.0.1:8088/employees?_expand=computer&_expand=department").then(res => res.json());
  }
};
var _default = API;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _APImanager = _interopRequireDefault(require("./APImanager"));

var _factories = _interopRequireDefault(require("./factories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printToDom = () => {
  const printLocation = document.querySelector("#displayEmployees");

  _APImanager.default.get().then(employeeArray => {
    employeeArray.forEach(element => {
      printLocation.innerHTML += (0, _factories.default)(element);
    });
  });
};

var _default = printToDom;
exports.default = _default;

},{"./APImanager":1,"./factories":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const codeEmployee = singleEmployee => {
  return `<article class="employee">
    <header class="employee__name">
        <h1>${singleEmployee.first_name} ${singleEmployee.last_name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${singleEmployee.department.dept_name} department
    </section>
    <section class="employee__computer">
        Currently using a ${singleEmployee.computer.make} ${singleEmployee.computer.model}
    </section>
</article>`;
};

var _default = codeEmployee;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _addtoDOM = _interopRequireDefault(require("./addtoDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _addtoDOM.default)();

},{"./addtoDOM":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0FQSW1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL2FkZHRvRE9NLmpzIiwiLi4vc2NyaXB0cy9mYWN0b3JpZXMuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLEdBQUcsR0FBRztBQUNSLEVBQUEsR0FBRyxFQUFFLE1BQU07QUFDUCxXQUFPLEtBQUssQ0FBQyxxRUFBRCxDQUFMLENBQ04sSUFETSxDQUNELEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSixFQUROLENBQVA7QUFFSDtBQUpPLENBQVo7ZUFPZSxHOzs7Ozs7Ozs7OztBQ1BmOztBQUNBOzs7O0FBRUEsTUFBTSxVQUFVLEdBQUcsTUFBTTtBQUNyQixRQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdEI7O0FBQ0Esc0JBQUksR0FBSixHQUFVLElBQVYsQ0FDSSxhQUFhLElBQUk7QUFDYixJQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLE9BQU8sSUFBSTtBQUM3QixNQUFBLGFBQWEsQ0FBQyxTQUFkLElBQTJCLHdCQUFhLE9BQWIsQ0FBM0I7QUFDSCxLQUZEO0FBR0gsR0FMTDtBQU9ILENBVEQ7O2VBV2UsVTs7Ozs7Ozs7Ozs7QUNkZixNQUFNLFlBQVksR0FBRyxjQUFjLElBQUk7QUFDbkMsU0FBUTs7Y0FFRSxjQUFjLENBQUMsVUFBVyxJQUFHLGNBQWMsQ0FBQyxTQUFVOzs7dUJBRzdDLGNBQWMsQ0FBQyxVQUFmLENBQTBCLFNBQVU7Ozs0QkFHL0IsY0FBYyxDQUFDLFFBQWYsQ0FBd0IsSUFBSyxJQUFHLGNBQWMsQ0FBQyxRQUFmLENBQXdCLEtBQU07O1dBUnRGO0FBV0gsQ0FaRDs7ZUFjZSxZOzs7Ozs7QUNkZjs7OztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQVBJID0ge1xuICAgIGdldDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODgvZW1wbG95ZWVzP19leHBhbmQ9Y29tcHV0ZXImX2V4cGFuZD1kZXBhcnRtZW50XCIpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiaW1wb3J0IEFQSSBmcm9tIFwiLi9BUEltYW5hZ2VyXCI7XG5pbXBvcnQgY29kZUVtcGxveWVlIGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG5jb25zdCBwcmludFRvRG9tID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaW50TG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlFbXBsb3llZXNcIik7XG4gICAgQVBJLmdldCgpLnRoZW4oXG4gICAgICAgIGVtcGxveWVlQXJyYXkgPT4ge1xuICAgICAgICAgICAgZW1wbG95ZWVBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHByaW50TG9jYXRpb24uaW5uZXJIVE1MICs9IGNvZGVFbXBsb3llZShlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpbnRUb0RvbTsiLCJjb25zdCBjb2RlRW1wbG95ZWUgPSBzaW5nbGVFbXBsb3llZSA9PiB7XG4gICAgcmV0dXJuIGA8YXJ0aWNsZSBjbGFzcz1cImVtcGxveWVlXCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImVtcGxveWVlX19uYW1lXCI+XG4gICAgICAgIDxoMT4ke3NpbmdsZUVtcGxveWVlLmZpcnN0X25hbWV9ICR7c2luZ2xlRW1wbG95ZWUubGFzdF9uYW1lfTwvaDE+XG4gICAgPC9oZWFkZXI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9fZGVwYXJ0bWVudFwiPlxuICAgICAgICBXb3JrcyBpbiB0aGUgJHtzaW5nbGVFbXBsb3llZS5kZXBhcnRtZW50LmRlcHRfbmFtZX0gZGVwYXJ0bWVudFxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19jb21wdXRlclwiPlxuICAgICAgICBDdXJyZW50bHkgdXNpbmcgYSAke3NpbmdsZUVtcGxveWVlLmNvbXB1dGVyLm1ha2V9ICR7c2luZ2xlRW1wbG95ZWUuY29tcHV0ZXIubW9kZWx9XG4gICAgPC9zZWN0aW9uPlxuPC9hcnRpY2xlPmA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2RlRW1wbG95ZWU7IiwiaW1wb3J0IHByaW50VG9Eb20gZnJvbSBcIi4vYWRkdG9ET01cIjtcblxucHJpbnRUb0RvbSgpOyJdfQ==
