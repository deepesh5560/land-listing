export function createQuery(params: { [key: string]: string | number }) {
    const queryParams: string[] = [];
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (value) {
        queryParams.push(`${key}=${value}`);
      }
    });
    return queryParams.join('&');
  }

  export const getImageURL = (data:string | string[]) =>{
    const base = process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0];
    if(Array.isArray(data)){
      return data.map((item)=>(base + "/" + item)) 
    }

    return (base +  "/" +  data);

  }