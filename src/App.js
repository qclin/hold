import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import { Link, Router } from "components/Router";
import Dynamic from "containers/Dynamic";
import Sidebar from "components/layout/Sidebar";
import TagPanel from "components/tags/TagPanel";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  // const AnimatedAboutUs = animated(AboutUs);
  return (
    <Root>
      <nav>
        <Link to="/"></Link>
        Contact
      </nav>

      <div className="content">
        <Sidebar side="left" />
        <Sidebar side="right" />
        <React.Suspense fallback={<em>Loading...</em>}>
          <TagPanel />
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
