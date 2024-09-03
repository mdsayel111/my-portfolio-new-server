// create project type
export type TProject = {
  _id: string;
  projectName: string;
  liveLink: string;
  gitLink: string;
  imgLink: string;
  description: string;
  isDeleted: boolean;
  isVisible: boolean;
  isLeatest: boolean;
  position: number;
  createdAt: Date;
  updatedAt: Date;
};
