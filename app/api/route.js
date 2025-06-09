//setting a route handler.
// file that you can export various functions that must be named according to HTTP method they handle.

export function GET(request) {
    console.log(request);
    return new Response('Hello!');
}
