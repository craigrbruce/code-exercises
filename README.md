# Coding Exercises

Run the tests with `npm run test`.

All tests are piped through a ["runner"](test.runner.js) .. which basically wraps each test in a timer. This will be used to compare timing of recursive (runtime complexity) against imperative (memory complexity) solutions.

The runner is called from a test like `runner(sut, [arg1, arg2, ...])`, i.e. passing a pointer for your function under test with an array of arguments to apply to it. 

