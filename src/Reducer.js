export const initialState = {
  lr: [
    {
      lrno: "",
      invoice: [],
      lrdate: "",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      alert("what");
    default:
      return state;
  }
};

export default reducer;
