"use server"
export async function dataFetch() {

    const URL = "https://ast.prd.karvi.com.ar/challenge/cars/ASST-challenge-01JEVJTR90HVPSS2NRPPG02CJ3.json";

    try {
        const res = await fetch(URL,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
    
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
        } 

        const data = await res.json();
        return data;      

      } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
      }  
    
}