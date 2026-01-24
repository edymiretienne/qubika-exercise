import { APIRequestContext, expect } from "@playwright/test";

type RegisterUserPayload = {
    email: string;
    password: string;
    roles: string[];
}

export async function registerUser(request:  APIRequestContext, payload: RegisterUserPayload) {
    const response = await request.post('https://api.club-administration.qa.qubika.com/api/auth/register', {data:payload});
    expect(response.ok()).toBeTruthy();
    return response;
}