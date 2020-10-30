import axios from 'axios';

const KEY = 'AIzaSyB8_crJzSWSVrCES_jVoC7-s1U9_iM4Eac';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults : 5,
        key:KEY
    }
    

});



