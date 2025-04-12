// create project type
export type TProject = {
  _id: string;
  projectName: string;
  liveLink: string;
  // gitLink: string;
  clientCodeLink: string;
  serverCodeLink: string;
  imgLink: string;
  description: string;
  isActive: boolean;
  // isVisible: boolean;
  // isLeatest: boolean;
  position: number;
  createdAt: Date;
  updatedAt: Date;
};
