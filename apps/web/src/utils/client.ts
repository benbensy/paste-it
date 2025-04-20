import { initQueryClient } from '@ts-rest/react-query'
import { contract } from "@paste-it/data";

export const client = initQueryClient(contract, {
    baseUrl: location.origin + import.meta.env.VITE_BASE_URL,
});
