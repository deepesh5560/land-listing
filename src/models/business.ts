
  
  export interface BusinessItem {
    gender: string;
    workingDays: string[];
    workingTime: string[];
    images: string[];
    isVerified: boolean;
    price: number;
    facilities: any[];
    geo: number[];
    _id: string;
    contacts: Contact[];
    address: string;
    area: string;
    buildingNo: string;
    businessName: string;
    island: string;
    landmark: string;
    subDivision: string;
    contactPersion: string;
    email: string;
    category: string;
    tin: string;
    country: string;
    paymentMode:string;
    yearOfEstablish:number;
    website:string
  }

  export interface ReviewItem {
    _id: string;
    user: {
        _id: string;
        email:string;
        name:string;
        avatar:string;
    };
    business: string;
    rating: number;
    review: string;
    isDeleted: boolean;
    date: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  
  export interface Contact {
    countryCode: string;
    contact: string;
    _id: string;
  }
  
  export interface Meta {
    current_page: number;
    total_records: number;
    total_pages: any;
  }