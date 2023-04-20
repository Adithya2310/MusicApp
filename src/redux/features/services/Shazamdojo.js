import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const Shazamdojo = createApi({
    reducerPath:'Shazamdojo',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','df948f9694msh0283bbb38c85b9cp1b02c1jsna9cdf03b1915');
            return headers;
        },
    }),
    endpoints:(builder)=>{
        return {getTopCharts: builder.query({query:()=>"/charts/track"})}
    }
    // endpoints: (builder) => ({
    //     getTopCharts: builder.query({
    //         query: () => "/charts/track"
    //     })
    // })
    
});

export const {
    useGetTopChartsQuery
}= Shazamdojo;