import { useEffect, useState } from "react";

import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";
import { Drawer, List } from "antd";

type RepoBranchesDrawerProps = {
  selectedRepo: RepoItem | null;
  onClose: () => void;
  isDrawerVisible: boolean;
};
const gitHubStore = new GitHubStore();

const RepoBranchesDrawer = ({
  selectedRepo,
  onClose,
  isDrawerVisible,
}: RepoBranchesDrawerProps) => {
  const [branches, setBranches] = useState<any[]>([]);

  useEffect(() => {
    if (selectedRepo !== null) {
      gitHubStore
        .getOrganizationRepoBranchesList({
          organizationName: selectedRepo.owner.login,
          repoName: selectedRepo.name,
          queryParameters: {},
        })
        .then((result) => {
          if (result.success) {
            setBranches(result.data);
          } else {
            setBranches([]);
          }
        });
    }
  }, [selectedRepo]);

  return (
    <Drawer
      title={`Список веток репозитория ${selectedRepo?.name}`}
      placement={"right"}
      width={500}
      onClose={onClose}
      visible={isDrawerVisible}
    >
      <List
        itemLayout="horizontal"
        dataSource={branches}
        renderItem={(branchItem) => (
          <List.Item>
            <List.Item.Meta title={branchItem.name} />
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default RepoBranchesDrawer;
