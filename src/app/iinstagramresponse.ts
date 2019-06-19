export interface IInstagramResponse {
    recent_photos: IRecent_Photo[];
  }
  
  export interface IRecent_Photo {
    images: IImages;
    caption: ICaption;
    likes: ILikes;
    tags: string[];
    comments: IComments;
    user: IUser;
  }
  
  export interface IUser {
    full_name: string;
    profile_picture: string;
  }

  export interface IComments {
    count: number;
  }

  export interface ILikes {
    count: number;
  }

  export interface ICaption {
    text: string;

  }
  
  export interface IImages {
    standard_resolution: IStandard_Res;
  }
  
  export interface IStandard_Res {
    url: string;
  }