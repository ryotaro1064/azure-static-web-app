import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';

export const App = () => {
  const [response, setResponse] = useState<AxiosResponse>()

  // const url = "http://localhost/7071/api/GetData"
  const url = "/api/GetData"
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setResponse(res);
        console.log(res);
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <Fragment>
      {response?.data.map((elm:any, index:number) => {
        return (
          <div key={index}>id: {elm.id}, name: {elm.name}</div>
        )
      })}
    </Fragment>
  )
}