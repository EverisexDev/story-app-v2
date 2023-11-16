const useStateRef = (defaultValue) => {
  let [state, setState] = React.useState(defaultValue);
  let ref = React.useRef(state);

  let dispatch = React.useCallback(function (val) {
    ref.current = typeof val === "function" ? val(ref.current) : val;

    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
};

export default useStateRef;
