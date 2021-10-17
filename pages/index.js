import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { testAction } from "redux/actions";
import useScrollProgressBar from "hooks/useScrollProgressBar";
import Todo from "components/Todo";
import DefaultLayout from "layout/DefaultLayout";
import { useTranslation } from "react-i18next";
import SectionPreview from "components/SectionHome/SectionPreview";
import SectionVideo from "components/SectionHome/SectionVideo";
import SectionNew from "components/SectionHome/SectionNew";
import SectionMobile from "components/SectionHome/SectionMobile";
import SectionComputer from "components/SectionHome/SectionComputer";
import SectionGames from "components/SectionHome/SectionGames";
import SectionCar from "components/SectionHome/SectionCar";

export default function Index() {
  const dispatch = useDispatch();
  const testReducer = useSelector((state) => state.testReducer);
  const { isFetching, listTodos } = testReducer;

  const { t } = useTranslation();

  useScrollProgressBar();
  useEffect(() => {
    dispatch(testAction());
  }, []);

  return (
    <DefaultLayout>
      <SectionPreview />
      {/* <SectionTrending /> */}
      <SectionVideo />
      <SectionNew />
      <SectionMobile />
      <SectionComputer />
      <SectionGames />
      <SectionCar />
      {/* <SectionCard /> */}
    </DefaultLayout>
  );
}
