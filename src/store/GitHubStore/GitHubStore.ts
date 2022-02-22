import ApiStore from "../../shared/store/ApiStore";
import { HTTPMethod } from "../../shared/store/ApiStore/types";
import {
  IGitHubStore,
  GetOrganizationReposListParams,
  ApiResp,
  RepoItem,
  CreateRepoParams,
  GetOrganizationRepoBranchesListParams,
} from "./types";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore("http://api.github.com");

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>> {
    return this.apiStore.request({
      headers: { Accept: "*/*" },
      endpoint: `/orgs/${params.organizationName}/repos`,
      data: params.queryParameters,
      method: HTTPMethod.GET,
    });
  }

  async getOrganizationRepoBranchesList(
    params: GetOrganizationRepoBranchesListParams
  ): Promise<ApiResp<RepoItem[]>> {
    return this.apiStore.request({
      headers: { Accept: "*/*" },
      endpoint: `/repos/${params.organizationName}/${params.repoName}/branches`,
      data: params.queryParameters,
      method: HTTPMethod.GET,
    });
  }

  createRepo(params: CreateRepoParams): Promise<ApiResp<string>> {
    return this.apiStore.request({
      headers: {
        Authorization: "token " + params.token,
        accept: "application/vnd.github.v3+json",
      },
      endpoint: "/user/repos",
      data: { name: params.repoName },
      method: HTTPMethod.POST,
    });
  }
}
