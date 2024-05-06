import { ENV } from "@/utils";

export class Platform{
    async getAll(){
        try {
            const sort = "sort=order:asc";

            const url = `${ENV.API_URL}/${ENV.ENPOINTS.PLATFORM}/?populate=icon&${sort}`;

            const response = await fetch(url);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
}