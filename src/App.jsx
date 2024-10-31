import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import BlogEdit from "./BlogEdit";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content max-w-[600px] mt-[40px] mb-[40px] ml-auto mr-auto px-[20px]">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/edit/:id" component={BlogEdit} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;