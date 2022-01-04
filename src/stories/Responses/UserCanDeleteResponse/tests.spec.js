const debugLogger = requireUtil("debugLogger");
const knex = requireKnex();
const contextClassRef = requireUtil("contextHelper");
const QueryRepo = requireRepo("query");
const ResponseRepo = requireRepo("response");
const randomUser = requireUtil("randomUser");

describe("Test Handler UserCanDeleteResponse", () => {
  it("user can delete response", async () => {
    let result = {};
    try {
      contextClassRef.user = randomUser();
      contextClassRef.headers = {
        Authorization: `Bearer ${contextClassRef.user.token}`,
      };
      const testResponse = await ResponseRepo.create({
        answer:"answer 11",
        query_uuid:"5a75d442-975e-4eb8-aca0-4c156a7be037",
        owner_uuid: contextClassRef.user.user_uuid,
        anonymous: true,
      })
      result = await testStrategy("Responses/UserCanDeleteResponse", {
        prepareResult: {
          response_uuid:testResponse.uuid
        },
      });
    } catch (error) {
      debugLogger(error);
    }
    const { respondResult } = result;
    expect(respondResult).toMatchObject({
  
    });
  });
});
