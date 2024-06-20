
import CartItem from '../../CartItem.interface';
import { calcCartTotal } from '../../cart.helper';
import getToken from './getToken.function';
import PayPalOrderResponse from './PayPalOrderResponse.interface';

/**
 * Creates a predifened order.
 * 
 * @param bearer - token for auth
 * @returns 
 */
export async function createOrder(cart: CartItem[], requestId: string): Promise<PayPalOrderResponse> {
    const token = (await getToken()).access_token;

    return fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'PayPal-Request-Id': requestId,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "intent": "CAPTURE",
            "purchase_units": [{
                "reference_id": requestId,
                "amount": {
                    "currency_code": "EUR",
                    "value": `${calcCartTotal(cart)}`
                }
            }],
            "payment_source": {
                "paypal": {
                    "experience_context": {
                        "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                        "payment_method_selected": "PAYPAL",
                        "brand_name": "EXAMPLE INC",
                        "locale": "de-DE",
                        "landing_page": "LOGIN",
                        //"shipping_preference": "SET_PROVIDED_ADDRESS",
                        "user_action": "PAY_NOW",
                        "return_url": `http://localhost:3000/capture/${requestId}/capture`,
                        "cancel_url": `http://localhost:3000/capture/${requestId}/error`
                    }
                }
            }
        })
    }).then(r => r.json())
}