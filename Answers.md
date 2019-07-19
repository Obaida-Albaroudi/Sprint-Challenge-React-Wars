# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    - It is a library that is used to build applications. It also handles a lot of the DOM we would have to do if we were working with vanilla js. It helps solve the problem of needing to "react" to changes that occur without needing to manually manipulate the DOM as react does so on its own using virtual DOM.

1. What does it mean to think in react?

 -  To think about how to approach and solve what you are working on through components. The data flow has hierarchy and that needs to be taken into account. More info here https://reactjs.org/docs/thinking-in-react.html

1. Describe state.

    - It is what is going on currently in the web app. Think of this as the soccer game example of where the game is tied 3-3 the state of the game is tied, this state can change if a goal is scored. This is similar to the data on our webpages.

1. Describe props.

    - props is the data in const[data, setData] = useState(some type of info) that will be passed around to other components to work with.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    - Anything that has an effect on a function that is being executed outside of its scope. Think of when you are accessing an api using useEffect and you don't use the ",[]".