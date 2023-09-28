import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api`

export const mcqApi = createApi({
    reducerPath:"mcqApi",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ["mcq"],
    endpoints: (builder) => ({

        // getQuestionsFromTextFile: builder.mutation({
        //     query(body) {
        //       return {
        //         url: `/mcq/generate-from-text`,
        //         method: 'POST',
        //         body,
        //         formData: true,
        //       }
        //     },
        //   })
    })

})

