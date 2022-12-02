import wretch from 'wretch';

export const load = async () => {
	try {
		const res = await wretch(
			'https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226'
		)
			.get()
			.json();
		console.log('res', res);
		return {
			data: res
		};
	} catch (e) {
		console.error('Error getting flight data', e);
	}
};
