import fetch from 'node-fetch';

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

interface GoogleReviewsResponse {
    result: {
        reviews: any[];
    };
}

async function fetchGoogleReviews( placeId:string ) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${GOOGLE_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json() as GoogleReviewsResponse;
        return data.result.reviews || [];
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return []; // Return an empty array in case of an error
    }
}

export default fetchGoogleReviews;

// --------------------------- //
// --- ON PAGE APPLICATION --- //
// --------------------------- //

// export async function getStaticProps() {
//   const reviews = await fetchGoogleReviews("ChIJR2bVZsZNzDERzP9lEN9C518");

//   return {
//     props: { reviews },
//     revalidate: 2592000, // revalidate once every month
//   }
// }