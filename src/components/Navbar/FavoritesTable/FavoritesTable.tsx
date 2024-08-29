"use client";
import { IPerson } from '@/models';
import { removeFavorite } from '@/redux/states';
import { IAppStore } from '@/redux/store';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { GridColDef, GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const pageSize = 5;

const FavoritesTable: React.FC  = () => {
	/** STATES */
	const dispatch = useDispatch();

	const stateFavorites = useSelector((store: IAppStore) => store.favorites);

	const handleClick = (person: IPerson) => {
		dispatch(removeFavorite(person));
	}
  
  
	const columns: GridColDef[] = [
		{
			field: "actions",
			headerName: "",
			type: "actions",
			sortable: false,
			width: 50,
			renderCell: (params: GridRenderCellParams) => (
				<IconButton
				size="large"
				aria-label="favorites"
	
				aria-haspopup="true"
				onClick={() => handleClick(params.row)}
				color="inherit"
			  >
				<Delete />
			  </IconButton>
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
		headerName: "Level Of Happiness",
		flex: 1,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
	  },
	];

	
	return (
	  <DataGrid
		rows={stateFavorites}
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

export default FavoritesTable;