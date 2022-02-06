import ApiStore from "../../shared/store/ApiStore";
import { HTTPMethod } from "../../shared/store/ApiStore/types";
import {
  IGitHubStore,
  GetOrganizationReposListParams,
  ApiResp,
  RepoItem,
  CreateRepoParams,
} from "./types";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore("http://api.github.com"); // TODO: не забудьте передать baseUrl в конструктор

  // TODO: реализовать интерфейс IGitHubStore

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>> {
    // TODO: Здесь сделайте вызов из this.apiStore и верните результат
    // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories

    return this.apiStore.request({
      headers: { Accept: "*/*" },
      endpoint: `/orgs/${params.organizationName}/repos`,
      data: params.queryParameters,
      method: HTTPMethod.GET,
    });
  }

  createRepo(params: CreateRepoParams): Promise<ApiResp<string>> {
    return this.apiStore.request({
      headers: {
        Authorization: "Basic " + params.token,
      },
      endpoint: "",
      data: { name: params.repoName },
      method: HTTPMethod.POST,
    });
  }
}
