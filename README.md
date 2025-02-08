# Unexpected DOM Manipulation in React Functional Component

This repository demonstrates a common error in React development: directly manipulating the DOM within a functional component.  Direct DOM manipulation can lead to unexpected behavior, including rendering issues and race conditions, because it bypasses React's virtual DOM and reconciliation process.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a corrected version using React's mechanisms for updating the DOM.

## Problem

In the original code, an attempt to directly change the color of a DOM element is made inside the `handleClick` function. This is problematic because React might not have yet updated the DOM to reflect the change in state before this direct manipulation takes place.