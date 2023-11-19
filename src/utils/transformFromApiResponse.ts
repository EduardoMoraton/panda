import ApiResponse from "../../types/apiResponse"


export const transformApiResponse = (response: ApiResponse) => {
    const values = response.included[0].attributes.values
    return values.map((val)=>{
        return {
            isoDate: new Date(val.datetime).toISOString(),
            month: new Date(val.datetime).getUTCMonth(),
            day: new Date(val.datetime).getUTCDate(),
            time: new Date(val.datetime).getHours(),
            kwh: val.value / 100
        }
    })
}