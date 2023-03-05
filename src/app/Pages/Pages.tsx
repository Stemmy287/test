import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AdsList} from "features/AdsList/AdsList";
import {AdsPage} from "features/AdsPage/AdsPage";
import {PATH} from "common/constants/path";
import {Error404} from "common/components/Error404/Error404";

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/adsList'}/>}/>
        <Route path={PATH.ADS_LIST} element={<AdsList/>}/>
        <Route path={PATH.ADS} element={<AdsPage/>}/>
        <Route path={PATH.NOT_FOUND} element={<Error404/>}/>
        <Route path={'*'} element={<Navigate to={PATH.NOT_FOUND}/>}/>
      </Routes>
    </div>
  );
};

