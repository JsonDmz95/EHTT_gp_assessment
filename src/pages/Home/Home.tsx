"use client";
import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';

const Home = () => {
	const pageSize = 5;
	const columns = [{
		field: 'name',
		headerName: 'Name',
		flex: 1,
		minWidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	}, {
		field: 'category',
		headerName: 'Category',
		flex: 1,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	},
	{
		field: 'company',
		headerName: 'Company',
		flex: 1,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	}];
	return (
 			<DataGrid
				rows={People}
				columns={columns}
				disableColumnSelector
				autoHeight
				initialState={{
					pagination: { paginationModel: { pageSize: pageSize } }
				  }}
				pageSizeOptions={[pageSize]}
				getRowId={(row) => row.id}
			/>
	);
};

export default Home;
