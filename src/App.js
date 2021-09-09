import ArticleList from "./components/ArticleList";
import articles from "./data";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticleDetail from "./components/ArticleDetail";
import NotFound404Page from "./components/NotFound404Page";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route
              path="/"
              render={(props) => <ArticleList {...props} articles={articles} />}
              exact
            />
            <Route path="/article/:title" component={ArticleDetail} />
            {/* Route for 404 page */}
            <Route path="*" component={NotFound404Page} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
