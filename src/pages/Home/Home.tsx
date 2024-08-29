"use client";
import { useEffect } from "react";
import { People } from "@/data";
import { useDispatch } from "react-redux";
import { addPeople } from "@/redux/states";
import { PeopleTable } from "./components/PeopleTable";



const Home = () => {
const dispatch = useDispatch();

  /** EFFECT */
  useEffect(() => {
    dispatch(addPeople(People));
    return () => {};
  }, [dispatch]);

  return (
    <PeopleTable />
  );
};

export default Home;
