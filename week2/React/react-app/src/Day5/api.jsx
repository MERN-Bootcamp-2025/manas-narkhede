


import axios from 'axios'

const searchImages = async (term) =>{

    // const response = await axios.get('https://api.unplash.com/search/photos', {
    //     headers:{
    //         Authorization : 'Client-ID 7SCC1_xrZtliiTVmyW_F7T1sbDTIorIxSFOxUqe0qlc'
        
    //     },
    //     params:{
    //         query: term,
    //     },
    // });

    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 7SCC1_xrZtliiTVmyW_F7T1sbDTIorIxSFOxUqe0qlc'
    },
    params: {
      query: term
    }
  });
    
    // fetch('https://api.unplash.com/search/photos', {
    //     headers:{
    //         Authorization : 'Client-ID 7SCC1_xrZtliiTVmyW_F7T1sbDTIorIxSFOxUqe0qlc'
        
    //     },
    //     params:{
    //         query: term,
    //     },
    //     mode:"no-cors"
    // })

    // console.log(response.data)
    // return response.data.results;
};


export default searchImages;