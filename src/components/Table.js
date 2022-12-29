import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";


function Table({title, columns, apiUrl}) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

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
			data={data}
			progressPending={loading}
			pagination
		/>
	);
}

export default Table;