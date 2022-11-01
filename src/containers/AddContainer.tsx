import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { goBack } from "redux-first-history";
import Add from "../components/Add";
import { bookReqType, RootState } from "../types";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { addBook as addBookSagaStart } from "../redux/modules/books";

const AddContainer = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );

  const dispatch = useDispatch();

  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const add = useCallback(
    (book: bookReqType) => {
      dispatch(addBookSagaStart());
    },
    [dispatch]
  );

  return <Add loading={loading} back={back} logout={logout} add={add} />;
};

export default AddContainer;
