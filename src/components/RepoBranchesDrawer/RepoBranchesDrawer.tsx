import { useEffect, useState } from "react";

import { BranchItem, RepoItem } from "@store/GitHubStore/types";
import gitHubStore from "@store/gitHubStoreInstance";
import { Drawer, List } from "antd";
import { useHistory } from "react-router-dom";

type RepoBranchesDrawerProps = {
  selectedRepo: RepoItem | null;
  onClose: () => void;
  isDrawerVisible: boolean;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  selectedRepo,
  onClose,
  isDrawerVisible,
}) => {
  const [branches, setBranches] = useState<BranchItem[]>([]);

  const fetchBranchesData = async (selectedRepo: RepoItem) => {
    const result = await gitHubStore.getOrganizationRepoBranchesList({
      organizationName: selectedRepo.owner.login,
      repoName: selectedRepo.name,
      queryParameters: {},
    });
    setBranches(result.success ? result.data : []);
  };

  useEffect(() => {
    if (selectedRepo !== null) {
      fetchBranchesData(selectedRepo);
    }
    return () => {
      setBranches([]);
    };
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
