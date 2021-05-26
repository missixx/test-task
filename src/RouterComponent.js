import { Route, Switch } from "react-router";
import Contacts from "./Contacts";
import Content from "./Content";
import OurStory from "./OurStory";

export default function RouterComponent() {
   return (
      <div>
         <Switch>
            <Route exact path='/'><Content /></Route>
            <Route exact path='/ourstory'><OurStory /></Route>
            <Route exact path='/contacts'><Contacts /></Route>
         </Switch>
      </div>
   )
}