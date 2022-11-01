import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { HistoryRouter } from "redux-first-history/rr6";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import { history } from "./redux/create";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </ErrorBoundary>
  );
}

export default App;
