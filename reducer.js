// Actions

const SHOW_JOIN = "SHOW_JOIN";
const SHOW_LOGIN = "SHOW_LOGIN";
const SHOW_APPBAR = "SHOW_APPBAR";
const SHOW_HOME = "SHOW_HOME";
const SHOW_USER = "SHOW_USER";

// Action Creators

function showJoin() {
  return {
    type: SHOW_JOIN
  };
}

function showLogin() {
  return {
    type: SHOW_LOGIN
  };
}

function showAppbar() {
  return {
    type: SHOW_APPBAR
  };
}

function showHome() {
  return {
    type: SHOW_HOME
  };
}

function showUser() {
  return {
    type: SHOW_USER
  };
}

// Reducer

const initialState = {
  what: "login",
  homeOrUser: "default"
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_JOIN:
      return applyShowJoin(state);
    case SHOW_LOGIN:
      return applyShowLogin(state);
    case SHOW_APPBAR:
      return applyShowAppbar(state);
    case SHOW_HOME:
      return applyShowHome(state);
    case SHOW_USER:
      return applyShowUser(state);
    default:
      return state;
  }
}

// Reducer Functions

function applyShowJoin(state) {
  return {
    ...state,
    what: "join"
  };
}

function applyShowLogin(state) {
  return {
    ...state,
    what: "default"
  };
}

function applyShowAppbar(state) {
  return {
    ...state,
    what: "login"
  };
}

function applyShowHome(state) {
  if (state.homeOrUser === "user") {
    return {
      ...state,
      homeOrUser: "default"
    };
  } else {
    return {
      ...state
    };
  }
}

function applyShowUser(state) {
  if (state.homeOrUser === "default") {
    return {
      ...state,
      homeOrUser: "user"
    };
  } else {
    return {
      ...state
    };
  }
}

// export Action Creators

const actionCreators = {
  showJoin,
  showLogin,
  showAppbar,
  showHome,
  showUser
};

export { actionCreators };

// export Reducer

export default reducer;
