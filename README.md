# A Simple Counter for Simple Folk

A basic counter written using [React](https://reactjs.org/ "React"), heavily influenced by [Mosh Hamedani's](https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA "Programming with Mosh") React Crash Course.

## Functionality

- Creates + manages counters
- Calculates sum over all active counters
- Allows deletion/addition of new counters

## Reflection/Future Improvements

I wrote the app as I was learning the basics of React and JavaScript--needless to say, good programming practices regarding encapsulation went out the window. To further improve functionality and cleanliness, the summation functionality in the `counters` class should be reworked so it doesn't rely on a copy of the values in its children counters in its own state. Encapsulating that functionality would require completely rewriting a majority of the related code, and so it's a good project to revisit when my handle on React is much more solid.
