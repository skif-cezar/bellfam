import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout, MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import {TestScreen, TEST_PAGE_PATH} from "src/app/logic/testScreen/TestScreen";
import {AfterTestScreen, AFTER_TEST_PAGE_PATH} from "src/app/logic/testScreen/AfterTestScreen";
import {PublicationPage, PUBLICATIONS_PAGE_PATH} from "src/app/logic/publication/PublicationPage";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path={MAIN_PAGE_PATH} element={<Layout />} />
          <Route path={`${TEST_PAGE_PATH}/:id`} element={<TestScreen />} />
          <Route path={AFTER_TEST_PAGE_PATH} element={<AfterTestScreen />} />
          <Route path={PUBLICATIONS_PAGE_PATH} element={<PublicationPage />} />
        </Routes>
      </Router>
  );
};
