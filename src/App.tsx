import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducer/ActionCreators";
import PostContainer from "./components/postContainer";
import PostContainer2 from "./components/postContainer2";

function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [ ]);

  return (
    <div className="App" style={{display: "flex"}}>
      {/*{isLoading && <h1>Loading...</h1>}*/}
      {/*{error && <h1>{error}</h1>}*/}
      {/*{JSON.stringify(users, null, 2)}*/}
      <PostContainer />
      <PostContainer2 />
    </div>
  );
}

export default App;
