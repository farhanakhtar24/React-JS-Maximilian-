/*
For scoping css classes in react we can use CSS modules feature of Create react app
This feature ensures that the classes are scoped only towards the file we want them to and not any other files

For this feature to enable , we need 3 steps:
1.Rename the css files to .module.css
2.import classes from 'location of css'
3.add classes to components dynamically (within the brackets{}) under the namespace of classes.(class_name) 

Undert the hood this feature changes the classnames to something unique for the particular component and 
checks if class names do not coincides

*/