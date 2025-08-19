import { Component } from "react";
import UserFinder from "./UserFinder";
import { Button } from "@mui/material";
import ErrorBoundary from "./ErrorBoundary";

interface UsersClassState {
  showUsers: boolean;
  more: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export default class UsersClass extends Component<{}, UsersClassState> {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  constructor(props: {}) {
    super(props);

    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  // here this.state is predefined so we have to use the same name for state
  // constructor method is used to initialize the state
  // state will always be of type object and it's a good practice to initiali

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.setState({ showUsers: !this.state.showUsers })}
        >
          {/* this set state will not ovrrides the object but it will merge the new state with the previous one. */}
          {/* function based component me sbke lag state hote h toh wha override hota h  */}
          Toggle Users
        </Button>
        {this.state.showUsers && (
          <div>
            <h1>Users List</h1>
            <ErrorBoundary>
              <UserFinder/>

            </ErrorBoundary>
          </div>
        )}
      </div>
    );
  }
}


// notes:--- in functional compoennt we use useEffect to handle side effects.
//  but class based component does not have useEffect hook.
//  so we use componentDidMount and componentDidUpdate for side effects(lifecycle methods).

//componentdidMount() {}.  this will be called when the component is first mounted and whenever the component receives new props or state.
// it is evaluated and renderd by react and is equivalent to useEffect(..,[]).

//componentWillUnmount() {}. // this will be called when the component is about to be removed from the DOM.
// it is equivalent to   useEffect(() => {
//     return () => {
//       console.log("on unmount");
//     };
//   }, []);


//componentDidUpdate() {} . // this will be called when the component is re-rendered i.e updated by some values react 
// re- valuates and re renders the compoent . and is eventually equivalent to   useEffect(() => {  (); },[someValues]);




