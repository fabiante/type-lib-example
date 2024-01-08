import {hello} from "sdk";

export function main() {
    const x = hello();

    console.log(x);

    sdk.helloGlobalSDK();
}

main();
