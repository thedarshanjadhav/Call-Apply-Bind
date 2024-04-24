# Understanding `call`, `apply`, and `bind` in JavaScript

In JavaScript, the `call`, `apply`, and `bind` methods are used to manipulate the `this` context of a function. They allow you to explicitly set the `this` value and, in the case of `apply` and `call`, pass arguments to the function.

## 1. `call`

The `call` method invokes a function with a specified `this` value and individual arguments.

## 2. `apply`

The `apply` method is similar to call, but it accepts arguments as an array.

## 3. `bind`

The bind method creates a new function with a specified this value and initial arguments.

## Comparison

`call and apply`: These methods invoke the function immediately. They allow you to specify the this context explicitly and pass arguments to the function. call takes arguments individually, while apply takes arguments as an array.

`bind` : This method creates a new function that, when called, has its this keyword set to a specific value. It doesn't invoke the function immediately; instead, it returns a new function with the this context bound to the specified object. This is useful when you want to create a function with a specific context but defer its execution.
