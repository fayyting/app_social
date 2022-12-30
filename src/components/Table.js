import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";


function Table({title, columns, apiUrl, searchColumn, searchPlaceholder}) {
	const [filterText, setFilterText] = useState('');
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const filteredData = searchColumn ? data.filter((item) => {
		return item && item[searchColumn].toLowerCase().includes(filterText.toLowerCase());
	}) : data;

	const subHeaderComponentMemo = useMemo(() => {
		return (
			<input type={"search"} onChange={e => setFilterText(e.target.value)} value={filterText} placeholder={searchPlaceholder}/>
		);
	}, [filterText, searchPlaceholder]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios.get(apiUrl);
			setData(response.data);
			setLoading(false);
		};
		fetchData();
	}, [apiUrl]);

	return (
		<DataTable
			title={title}
			columns={columns}
			data={filteredData}
			progressPending={loading}
			pagination
			subHeader
			subHeaderComponent={searchColumn ? subHeaderComponentMemo : false}
			selectableRows
			persistTableHead
		/>
	);
}

export default Table;