// import token from "../token";
import GitHubStore from "../store/GitHubStore/GitHubStore";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = "ktsstudio";

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
    queryParameters: {},
  })
  .then((result) => {
    // eslint-disable-next-line no-console
    console.log(result); // в консоли появится список репозиториев в ktsstudio
  });

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
    queryParameters: { sort: "created" },
  })
  .then((result) => {
    // eslint-disable-next-line no-console
    console.log(result); // в консоли появится отсортированный по дате создания список репозиториев  в ktsstudio
  });

// gitHubStore
//   .createRepo({
//     repoName: "Test name",
//     token,
//   })
//   .then((result) => {
//     console.log(result);
//   });
