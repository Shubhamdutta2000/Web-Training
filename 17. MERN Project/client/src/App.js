import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import history from './history';
import ScrollToTop from "./scrolltotop";
import LoginScreen from "./screen/LoginScreen";
import SigninScreen from "./screen/SigninScreen";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./screen/Home";
import NewNoteScreen from "./screen/NewNoteScreen";
import EditNoteScreen from "./screen/EditNoteScreen";
import Notfound from "./screen/Notfound";
import Bug from "./screen/Bug";

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);
    const theme = createMuiTheme({
      typography: {
        fontFamily: '"Segoe UI "',
      },
      palette: {
        primary: { main: "rgb(38 98 137)" },
        secondary: { main: "#fffafa" },
      },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <ScrollToTop>
          <Switch>
          
          {!userInfo && <Redirect exact from="/" to="/login" />}
            <Route exact path="/Login" component={LoginScreen} />
            <Route exact path="/Signin" component={SigninScreen} />
           
            <>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={NewNoteScreen} />
              <Route exact path="/edit/:id" component={EditNoteScreen} />
              <Route exact path="/Feature"  />
              <Route exact path="/Bug"  component={Bug} />
              <Route  path="404" component={Notfound} />
              <Footer />
            </>
          </Switch>
        </ScrollToTop>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
