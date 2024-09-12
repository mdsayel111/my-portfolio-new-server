/* eslint-disable @typescript-eslint/no-explicit-any */

export class QueryBuilder {
  queryModel: any;
  queryObj: Record<string, unknown>;

  // initialize queryModel and queryObj
  constructor(queryModel: any, queryObj: Record<string, unknown>) {
    this.queryModel = queryModel;
    this.queryObj = queryObj;
  }

  search(fields: string[]) {
    // create sort object
    const searchObj: Record<string, string> = {};

    // map by fields and check if sort field exist or not
    fields.forEach((field) => {
      if (this.queryObj[field]) {
        searchObj[field] = this.queryObj[field] as string;
      }
    });

    this.queryModel.find(searchObj);

    return this.queryModel;
  }

  // create sort method for sort
  sort(fields: string[]) {
    // create sort object
    const sortObj: Record<string, string> = {};

    // map by fields and check if sort field exist or not
    fields.forEach((field) => {
      if (this.queryObj[field]) {
        sortObj[field] = this.queryObj[field] as string;
      }
    });

    this.queryModel.sort(sortObj);

    return this.queryModel;
  }
}
