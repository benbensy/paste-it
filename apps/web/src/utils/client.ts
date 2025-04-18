import { initQueryClient } from '@ts-rest/react-query'
import { contract } from "@paste-it/shared/data";

export const client = initQueryClient(contract, {
    baseUrl: '/api',
});
