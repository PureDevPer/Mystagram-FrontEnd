# Mystagram - Front End

Instagram replica with React, React Native, Express, GraphQL and Prisma

## MystaGram (Front-End)

Front End for Instagram clone (GraphQL + Hooks)

[![react](https://img.shields.io/badge/react-16.9.0-blue.svg)](https://shields.io/) [![react_router](https://img.shields.io/badge/react_router-5.0.1-blue.svg)](https://shields.io/) [![react_hooks](https://img.shields.io/badge/react_hooks-0.5.0-blue.svg)](https://shields.io/) [![react_dom](https://img.shields.io/badge/react_dom-16.9.0-blue.svg)](https://shields.io/) [![react_toastify](https://img.shields.io/badge/react_toastify-5.3.2-blue.svg)](https://shields.io/) [![GraphQL](https://img.shields.io/badge/GraphQL-14.5.0-blue.svg)](https://shields.io/) [![styled_components](https://img.shields.io/badge/styled_components-4.3.2-blue.svg)](https://shields.io/) [![apollo_boost](https://img.shields.io/badge/apollo_boost-0.4.4-blue.svg)](https://shields.io/) [![Server](https://img.shields.io/badge/Server-Netlify-blue.svg)](https://shields.io/)

## MystaGram (Back-End)

<a href="https://github.com/PureDevPer/MystaGram">MystaGram (Back-End)</a>

[![prisma](https://img.shields.io/badge/prisma-1.34.8-green.svg)](https://shields.io/) [![GraphQL_Yoga](https://img.shields.io/badge/GraphQL_Yoga-1.18.1-green.svg)](https://shields.io/) [![passport](https://img.shields.io/badge/passport-0.4.0-green.svg)](https://shields.io/) [![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-8.5.1-green.svg)](https://shields.io/) [![nodemailer](https://img.shields.io/badge/nodemailer-6.3.0-green.svg)](https://shields.io/) [![dotenv](https://img.shields.io/badge/dotenv-8.0.0-green.svg)](https://shields.io/) [![babel](https://img.shields.io/badge/babel-7.5.5-green.svg)](https://shields.io/) [![nodemon](https://img.shields.io/badge/nodemon-1.19.1-green.svg)](https://shields.io/) [![AWS](https://img.shields.io/badge/AWS-S3-green.svg)](https://shields.io/) [![multer_s3](https://img.shields.io/badge/multer_s3-2.9.0-green.svg)](https://shields.io/) [![Server](https://img.shields.io/badge/Server-Heroku-green.svg)](https://shields.io/)

## MystaGram (iOS / Android App)

<a href="https://github.com/PureDevPer/Mystagram-App">MystaGram (App)</a>

[![expo](https://img.shields.io/badge/expo-34.0.1-ff69b4.svg)](https://shields.io/) [![react_native](https://img.shields.io/badge/react_native-0.60-ff69b4.svg)](https://shields.io/) [![react](https://img.shields.io/badge/react-16.8.3-ff69b4.svg)](https://shields.io/) [![react_hooks](https://img.shields.io/badge/react_hooks-0.5.0-ff69b4.svg)](https://shields.io/) [![react_navigation](https://img.shields.io/badge/react_navigation-3.12.1-ff69b4.svg)](https://shields.io/) [![styled_components](https://img.shields.io/badge/styled_components-4.3.2-ff69b4.svg)](https://shields.io/) [![graphql](https://img.shields.io/badge/graphql-14.5.3-ff69b4.svg)](https://shields.io/) [![axios](https://img.shields.io/badge/axios-0.19.0-ff69b4.svg)](https://shields.io/) [![apollo_boost](https://img.shields.io/badge/apollo_boost-0.4.4-ff69b4.svg)](https://shields.io/)

## User Stories

- [x] Home
- [ ] explore
- [ ] Activity
- [x] Search
- [x] Profile
- [ ] Edit Profile
- [x] Login
- [x] LogOut
- [x] Photo Like
- [x] Photo Comments
- [x] Photo Details
- [x] Photo - Multiple

## Reading

<details><summary><b>React Toastify</b></summary>
<p>
- React Toastify: https://www.npmjs.com/package/react-toastify
</p>
</details>

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
