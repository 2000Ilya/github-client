export type GitHubRepoOwnerApi = {
  url: string;
  login: string;
};

export type GitHubRepoOwnerModel = {
  url: string;
  login: string;
};

export const normalizeGitHubRepoOwner = (
  from: GitHubRepoOwnerApi
): GitHubRepoOwnerModel => ({
  url: from.url,
  login: from.login,
});
