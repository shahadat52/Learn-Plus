import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="text-center text-gray-800">
      <h1 className="text-5xl font-bold mb-10 pb-10 border-black border-b-2">
        Common Interview Questions
      </h1>
      <div className="q-container text-justify">
        <div className="Q1-container">
          <li className="text-2xl font-bold mb-5">
            What is the purpose of React Router Dom?
          </li>
          <p>
            <span className="font-bold text-xl">React Router DOM</span> is an
            npm package that enables you to implement dynamic routing in a web
            app. It allows you to display pages and allow users to navigate
            them. It is a fully-featured client and server-side routing library
            for React. React Router Dom is used to build single-page
            applications i.e. applications that have many pages or components
            but the page is never refreshed instead the content is dynamically
            fetched based on the URL. This process is called Routing and it is
            made possible with the help of React Router Dom. The major advantage
            of react-router is that the page does not have to be refreshed when
            a link to another page is clicked, for example. Moreover, it is
            fast, very fast compared to traditional page navigation. This means
            that the user experience is better and the app has overall better
            performance. React Router Dom has many useful components and to
            create fully functioning routing, you need most of these. Router
            "usually imported as BrowserRouter": It is the parent component that
            is used to store all of the other components. Everything within this
            will be part of the routing functionality Switch: Switch component
            is used to render only the first route that matches the location
            rather than rendering all matching routes. Route: This component
            checks the current URL and displays the component associated with
            that exact path. All routes are placed within the switch components.
            Link: Link component is used to create links to different routes.
            The Route component takes 2 parameters. The first one is the path
            that will be in the url and the second is the component that will be
            displayed if the current URL matches the path in the first
            parameter.
          </p>
        </div>
        <div className="Q2-container">
          <li className="text-2xl font-bold mb-5">
            How does works Context API?
          </li>
          <hr />
          <p>
            <span className="font-bold text-xl">The React Context API</span> is
            a way for a React app to effectively produce global variables that
            can be passed around. This is the alternative to "prop drilling" or
            moving props from grandparent to child to parent, and so on. Context
            is also touted as an easier, lighter approach to state management
            using Redux. Context API is a (kind of) new feature added in version
            16.3 of React that allows one to share state across the entire app
            (or part of it) lightly and with ease.
            <br />
            <span className="font-bold">Works:</span> React.createContext() is
            all you need. It returns a consumer and a provider. Provider is a
            component that as it's names suggests provides the state to its
            children. It will hold the "store" and be the parent of all the
            components that might need that store. Consumer as it so happens is
            a component that consumes and uses the state
            <br />
            If I want to use context api so I should follow these very few
            <span className="font-bold"> Steps: 1.</span> Create a folder under
            your app root named contexts (not required. just a convention).{" "}
            <br />
            <span className="font-bold"> 2.</span> Create a file named "your
            context name" Context.js, e.g. userContext.js import and create a
            context. <br /> <span className="font-bold"> 3.</span> Create a
            component that will wrap the provider named Provider e.g.
            UserProvider. <br /> <span className="font-bold"> 4.</span> Create a
            higher order component to consume the context named: with e.g.
            withUser. <br /> <span className="font-bold"> 5.</span> Finally
            export them and use them.
            <br />
            <span className="font-bold"> Conclusion .</span> The Context API
            makes it easier to have our global and app-wide data available to
            all components therefore, making it easier and more accessible. The
            Context API has been considered as one of the key features of the
            react framework and a prominent improvement in the recent releases
            of the framework. There are sure to be more improvements and new
            features from the framework and its development community. In the
            meantime, enjoy what wonderful features it has like the Context API.
          </p>
        </div>
        <div className="Q3-container">
          <li className="text-2xl font-bold mb-5">What is useRef hook?</li>
          <p>
            <span className="font-bold text-xl">The useRef hook</span> is the
            new addition in React 16.8. Before proceeding to this article there
            is a prerequisite to know about the ref in react. The useRef is a
            hook that allows to directly create a reference to the DOM element
            in the functional component. <br />
            <span className="font-bold">
              Syntax: const refContainer = useRef(initialValue);
            </span>
            <br /> The useRef returns a mutable ref object. This object has a
            property called .current. The value is persisted in the
            refContainer.current property. These values are accessed from the
            current property of the returned object. The .current property could
            be initialized to the passed argument initialValue e.g.
            useRef(initialValue). The object can persist a value for a full
            lifetime of the component
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
