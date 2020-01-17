import axios from 'axios';

const KEY = 'AIzaSyD8ilTpAvIHZ4rW9w_yoMQo6p8cm_ozunc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:{
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: `${KEY}`
	}
})