import {v4 as uuid} from 'uuid';
import getToken from './getToken.function';

/**
 * Captures an order
 * 
 * @param {string} captureId - token given from return url
 * @param bearer - token for authentication
 * @returns 
 */
export async function captureOrder(captureId:string) {
    const id = uuid();

    const token = (await getToken()).access_token;

    return fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${captureId}/capture`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'PayPal-Request-Id': id,
            'Authorization': `Bearer ${token}`
        }
    }).then(r => r.json())
}