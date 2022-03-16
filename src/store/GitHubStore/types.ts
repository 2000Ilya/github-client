/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 * поменяйте в соответствии с выполняемым запросом.
 * Или не меняйте, если делаете запрос за списком репоизториев для организации)
 * Выберите любой запрос из публичного API GitHub.
 */

export type GetOrganizationReposListParams = {
  organizationName: string | null;
  queryParameters: {};
};

export type GetOrganizationRepoBranchesListParams = {
  organizationName: string;
  repoName: string;
  queryParameters: {};
};

export type CreateRepoParams = {
  repoName: string;
  token: string;
};

export type SearchOrganizationReposList = { organizationName: string };

export type ApiResp<dataT> = {
  data: dataT;
  success: boolean;
};

export type RepoItem = {
  stargazers_count: number;
  url: string;
  name: string;
  updated_at: string;
  owner: { login: string; url: string };
  id: number;
  description: string | null;
};

export type BranchItem = {
  name: string;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>>;

  createRepo(params: CreateRepoParams): Promise<ApiResp<string>>;
}
