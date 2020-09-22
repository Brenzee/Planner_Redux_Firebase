const initState = {
  projects: [
    { id: "1", title: "help me", content: "blah blag" },
    { id: "2", title: "collect", content: "blah blag" },
    { id: "3", title: "egg hunt", content: "blah blag" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return state;
    case "CREATE_PROJECT_ERROR":
      return state;
    default:
      return state;
  }
};

export default projectReducer;
