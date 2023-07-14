import 'axios';
import axios from "axios";

async function isWordPressWebsite(url) {
    try {
        const response = await axios.head(url);

        // Check if "X-Powered-By" header includes "WordPress"
        if (response.headers['x-powered-by'] && response.headers['x-powered-by'].includes('WordPress')) {
            return true;
        }

        // Make a GET request to fetch the HTML content
        const htmlResponse = await axios.get(url);

        // Check if the HTML contains common WordPress tags or classes
        if (
            htmlResponse.data.includes('wp-content') ||
            htmlResponse.data.includes('wp-includes') ||
            htmlResponse.data.includes('wp-json') ||
            htmlResponse.data.includes('wp-admin')
        ) {
            return true;
        }

        return false;
    } catch (error) {
        console.error('Error:', error.message);
        return false;
    }
}
