import { Route, Switch } from "react-router";
import Contacts from "./Contacts";
import Content from "./Content";
import OurStory from "./OurStory";

export default function MainLayout() {
   return (
      <div>
         <Switch>
            <Route exact path='/'><Content /></Route>
            <Route path='/ourstory'><OurStory /></Route>
            <Route path='/contacts'><Contacts /></Route>
         </Switch>
      </div>
   )
}