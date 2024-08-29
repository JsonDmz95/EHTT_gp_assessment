"use client";
import { IAppStore } from '@/redux/store';
import { GridColDef, GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useSelector } from 'react-redux';

const pageSize = 5;

const FavoritesTable: React.FC  = () => {
	/** STATES */
  
    const stateFavorites = useSelector((store: IAppStore) => store.favorites);
  
  
	const columns: GridColDef[] = [
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