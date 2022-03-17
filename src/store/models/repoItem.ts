import {
  GitHubRepoOwnerApi,
  GitHubRepoOwnerModel,
  normalizeGitHubRepoOwner,
} from "./gitHubRepoOwner";

export type RepoItemApi = {
  stargazers_count: number;
  url: string;
  name: string;
  updated_at: string;
  owner: GitHubRepoOwnerApi;
  id: number;
  description: string | null;
};

export type RepoItemModel = {
  stargazers_count: number;
  url: string;
  name: string;
  updatedAt: Date;
  owner: GitHubRepoOwnerModel;
  id: number;
  description: string | null;
};

export const normalizeRepoItem = (from: RepoItemApi): RepoItemModel => ({
  stargazers_count: from.stargazers_count,
  url: from.url,
  name: from.name,
  updatedAt: new Date(from.updated_at),
  owner: normalizeGitHubRepoOwner(from.owner),
  id: from.id,
  description: from.description,
});
