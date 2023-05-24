Notes
Label
✅ done 🚧 WIP ❌ MOVED

DESCRIPTION:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

EXAMPLE:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

DOMAIN:
- Function must have an array
- This array must contain the name of peolpe that like an item
- The return must display an text of the examples
- More tha 4 names, must return "and 2 others"

Pomodoro 1 🍅: Navigator:Juliana
- Creat the project ✅
- Create de DOMAIN ✅

- Create the first test: ("should return 'no one likes this' when the array is empty") ✅
- Create prod code ✅
- Make test fail ✅
- Increment prod code ✅
- Make it pass ✅
- Commit ✅