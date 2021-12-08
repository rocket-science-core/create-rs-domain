/**
 * ExampleSearch Route Handlers
 */

interface ResObj {
  response: any[];
  requestParameters?: object;
}

/**
 * /api/search
 * returns all results
 */

export const exampleSearchAll = async (): Promise<ResObj> => {
  const responseObject: ResObj = { response: [] };
  return responseObject;
};

/**
 * /api/search/:searchTerm
 * returns all results matching searchTerm
 */

export const exampleSearchBySearchTerm = async (
  requestParameters?: object
): Promise<ResObj> => {
  const responseObject: ResObj = {
    response: [],
    requestParameters,
  };
  return responseObject;
};
