import { NextResponse } from "next/server";

// purpose of middleware.js is to handle requests, modify, intercept, etc before they reach the route handlers
// runs the code for every request that comes to the server
export function middleware(request) {
    console.log(request);
    return NextResponse.next();
}

export const config = {
    matcher: '/news'
}