import React from 'react'

function DetailedPage() {
    useEffect(() => {
        // Make the Axios API call here
        axios.get('your-api-url')
            .then(response => {
                // Handle the response data here
                console.log(response.data);
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }, []);
    return (
        <div>DetailedPage</div>
    )
}

export default DetailedPage