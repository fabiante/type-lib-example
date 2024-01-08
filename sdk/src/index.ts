/// <reference path="../types/sdk.d.ts" />

export function hello(): string {
    console.log("");

    sdk.helloGlobalSDK();

    return "Hello World";
}
