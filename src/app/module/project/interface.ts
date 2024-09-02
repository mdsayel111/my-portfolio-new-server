// create project type
export type TProject = {
    _id: string;
    projectName: string;
    liveLink: string;
    gitLink: string;
    imgLink: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}