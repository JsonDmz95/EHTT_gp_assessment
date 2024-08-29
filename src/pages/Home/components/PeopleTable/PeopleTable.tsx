"use client";
import { IPerson } from "@/models";
import { addFavorite } from "@/redux/states";
import { IAppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const pageSize = 5;

const PeopleTable: React.FC = () => {
  /** STATES */
  const [selectedPeople, setSelectedPeople] = useState<IPerson[]>([]);

  const dispatch = useDispatch();

  const statePeople = useSelector((store: IAppStore) => store.people);
  const stateFavorites = useSelector((store: IAppStore) => store.favorites);

  /** FUNCTIONS */
  const findPerson = (person: IPerson) =>
    !!stateFavorites.find((item) => item.id === person.id);
  const filterPerson = (person: IPerson) =>
    stateFavorites.filter((item) => item.id !== person.id);

  /** HANDLES */
  const hanldeChange = (person: IPerson) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  /** EFFECT */
  useEffect(() => {
    setSelectedPeople(stateFavorites);
  }, [stateFavorites]);

  const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "",
      type: "actions",
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          size="small"
          checked={findPerson(params.row)}
          onChange={() => hanldeChange(params.row)}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      type: 'number',
      headerName: "Level Of Happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={statePeople}
      columns={columns}
      disableColumnSelector
      autoHeight
      initialState={{
        pagination: { paginationModel: { pageSize: pageSize } },
      }}
      pageSizeOptions={[pageSize]}
      getRowId={(row) => row.id}
    />
  );
};

export default PeopleTable;
