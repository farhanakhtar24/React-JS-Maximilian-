/*
We can add onClick prop on multiple elemnts and that behaves like an event handler of vanilla js
There are multiple other props and for each eventHandler in js there exists a prop like on click which changes the 
UI on interation with it , just like in native js

To update UI on react we first need to import the { useState } function form react library and then we need to call 
it inside the component function only and we cannot call it at any other place (like inside a nested function 
or outside the component function)  

The usestate function allows us to define values as state where changes to these values should reflect in the 
component function being called again.

UseState is a react hook, most of the hooks start with use in their name and all these hooks need to be called 
inside the component function only and we cannot call it at any other place (like inside a nested function 
or outside the component function)  

The useState function is evaluated for each instance of a component.for eg if we have 4 instances of same component
then, the useState func. will be evaluated for each instance of that component individually whenever the useState function will
be triggered for a particular instance
State is really separated on a per component instance basis 
*/