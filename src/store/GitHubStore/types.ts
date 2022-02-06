/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 * поменяйте в соответствии с выполняемым запросом.
 * Или не меняйте, если делаете запрос за списком репоизториев для организации)
 * Выберите любой запрос из публичного API GitHub.
 */

export type GetOrganizationReposListParams = {
  organizationName: string;
  queryParameters: {};
};

export type SearchOrganizationReposList = { organizationName: string };

export type ApiResp<dataT> = {
  data: dataT;
};

export type RepoItem = {
  stargazers_count: number;
  url: string;
  name: string;
  updated_at: string;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>>;

  //   searchOrganizationReposList(
  //     params: SearchOrganizationReposList
  //   ): Promise<ApiResp<RepoItem[]>>;
}