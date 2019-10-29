import React from 'react';
import BookForm from '../BookForm/BookForm';

const initialData = {
  firstName:"nfv"
};

const MainPage = ({})=>(
  <div>
    -------
    <BookForm data = {initialData}/>
  </div>
);

export default MainPage;
