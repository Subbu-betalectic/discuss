const TagsRepo = requireRepo("tag");
const TagsSerializer = requireSerializer("tag");

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
  return {reqParams,reqBody};
};

const authorize = async ({ prepareResult }) => {
  try {
    if (0) {
      throw {
        statusCode: 401,
        message: "Unauthorized",
      };
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const handle = async ({ prepareResult, authorizeResult }) => {
  try {
    const {reqParams, reqBody} = prepareResult;
    return await TagsRepo.update(reqParams.tag_uuid,reqBody)
  } catch (error) {
    throw error;
  }
};

const respond = async ({ handleResult }) => {
  try {
    return handleResult;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  prepare,
  authorize,
  handle,
  respond,
};
