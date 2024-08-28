"use client";
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';
import { IPerson } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFavorite, addPeople } from '@/redux/states';

const pageSize = 5;

const Home = () => {
	/** STATES */
	const [selectedPeople, setSelectedPeople] = useState<IPerson[]>([]);

	const dispatch = useDispatch();

	/** FUNCTIONS */
	const findPerson = (person: IPerson) => !!selectedPeople.find(item => item.id === person.id);
	const filterPerson = (person: IPerson) => selectedPeople.filter(item => item.id !== person.id);

	/** HANDLES */
	const hanldeChange = (person: IPerson) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
		dispatch(addFavorite(filteredPeople))
		setSelectedPeople(filteredPeople);
	}
	
	const columns: GridColDef[] = [{
		field: 'actions',
		headerName: '',
		type: 'actions',
		sortable: false,
		width: 50,
		renderCell: (params: GridRenderCellParams) => <>{
			<Checkbox size='small' checked={findPerson(params.row)} onChange={() => hanldeChange(params.row)}/>
		}</>
	}, {
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

	/** EFFECT */
	useEffect(() => {
		dispatch(addPeople(People))
		return () => {
			
		};
	}, []);

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
