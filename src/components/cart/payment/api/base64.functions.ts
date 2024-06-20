/**
 * Encodes given message to base64
 * @param {string} msg 
 * @returns {string}
 */
export function base64Encoding(msg: string): string {
    return Buffer.from(msg).toString("base64");
}

/**
 * Decodes given message from base64
 * @param {string} msg 
 * @returns {string}
 */
export function base64Decoding(msg: string): string {
    return Buffer.from(msg, "base64").toString();
}