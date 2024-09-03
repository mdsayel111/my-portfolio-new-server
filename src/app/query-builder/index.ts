/* eslint-disable @typescript-eslint/no-explicit-any */

export class QueryBuilder {
  queryModel: any;
  queryObj: Record<string, unknown>;

  // initialize queryModel and queryObj
  constructor(queryModel: any, queryObj: Record<string, unknown>) {
    this.queryModel = queryModel;
    this.queryObj = queryObj;
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

    this.queryModel = this.queryModel.sort(sortObj);
  }
}
