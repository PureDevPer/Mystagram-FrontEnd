# Mystagram - Front End

Front End for Instagram clone (GraphQL + Hooks)

## Reading

- React Toastify: https://www.npmjs.com/package/react-toastify

<details><summary><b>Styled Components</b></summary>
<p>

- `ThemeProvider`: A helper component for theming. Injects the theme into all styled components anywhere beneath it in the component tree. https://www.styled-components.com/docs/api#themeprovider
- `theme`: An object that will be injected as `theme` into all interpolations in styled components beneath the provider
- createGlobalStyle: A helper function to generate a special `StyledComponent` that handles global styles. Normally, styled components are automatically scoped to a local CSS class and therefore isolated from other components. In the case of `createGlobalStyle`, this limitation is removed and things like CSS resets or base stylesheets can be applied. https://www.styled-components.com/docs/api#createglobalstyle

</p>
</details>

<details><summary><b>React-router-dom</b></summary>
<p>

- https://reacttraining.com/react-router/web/guides/basic-components
- `<Route>`: Route matching is done by comparing a `<Route>`'s path prop to the current location’s pathname. When a `<Route>` matches it will render its content and when it does not match, it will render null. A `<Route>` with no path will always match.
- `<Switch>`: The `<Switch>` component is used to group `<Route>`s together. The `<Switch>` is not required for grouping `<Route>`s, but it can be quite useful.
- Route Component: https://reacttraining.com/react-router/web/api/Route
  - component: A React component to render only when the location matches. It will be rendered with route props. https://reacttraining.com/react-router/web/api/Route/component
  - exact(bool): When true, will only match if the path matches the location.pathname exactly. https://reacttraining.com/react-router/web/api/Route/exact-bool

### HashRouter vs BrowserRouter

- https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter
- `HashRouter`: It uses URL hash, it puts no limitations on supported browsers or web server. Server-side routing is independent from client-side routing. https://reacttraining.com/react-router/web/api/HashRouter
- `BrowserRouter`: It uses history API, i.e. it's unavailable for legacy browsers (IE 9 and lower and contemporaries). Client-side React application is able to maintain clean routes like example.com/react/route but needs to be backed by web server. https://reacttraining.com/react-router/web/api/BrowserRouter

</p>
</details>

<details><summary><b>Apollo Boost</b></summary>
<p>

- https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost

- ApolloClient is connected to your app

</p>
</details>

<details><summary><b>React Fragments</b></summary>
<p>

https://reactjs.org/docs/fragments.html

- `Fragments`: A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

</p>
</details>

<details><summary><b>React Hooks</b></summary>
<p>

https://reactjs.org/docs/hooks-overview.html

- `useState` is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some local state to it. React will preserve this state between re-renders.
- `useState` returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else.

- Array Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring

  </p>
  </details>

<details><summary><b>React Router - withRouter</b></summary>
<p>

https://reacttraining.com/react-router/core/api/withRouter

You can get access to the `history` object’s properties and the closest `<Route>'s match` via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.

  </p>
  </details>
