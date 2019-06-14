export interface IInstagramResponse {
    recent_photos: IRecent_Photos[];
  }
  
  export interface IRecent_Photos {
    images: IImages;
  }
  
  export interface IImages {
    standard_resolution: IStandard_Res;
  }
  
  export interface IStandard_Res {
    url: string;
  }