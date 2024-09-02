import { QueryBuilder } from "../../query-builder";
import Project from "./model";

// create get all project service
export const getAllProjectService = async (query: Record<string, unknown>) => {
    // create query builder instance
    const queryModel = new QueryBuilder(Project.find({}), query);

    // apply methods in queryModel
    queryModel.sort(["createAt"])

    // get data
    const data = await queryModel.queryModel

    return data
}