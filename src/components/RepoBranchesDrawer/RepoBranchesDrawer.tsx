import { useEffect, useState } from "react";

import { BranchItem, RepoItem } from "@store/GitHubStore/types";
import gitHubStore from "@store/gitHubStoreInstance";
import { Drawer, List } from "antd";
import { useParams } from "react-router-dom";

import { useReposContext } from "../../App";

type RepoBranchesDrawerProps = {
  onClose: () => void;
  isDrawerVisible: boolean;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  onClose,
  isDrawerVisible,
}) => {
  const [branches, setBranches] = useState<BranchItem[]>([]);
  const reposContext = useReposContext();
  const { id } = useParams<{ id: string }>();
  const selectedRepo = reposContext.list.filter(
    (repo) => repo.id === Number(id)
  );

  const fetchBranchesData = async (selectedRepo: RepoItem) => {
    const result = await gitHubStore.getOrganizationRepoBranchesList({
      organizationName: selectedRepo.owner.login,
      repoName: selectedRepo.name,
      queryParameters: {},
    });
    setBranches(result.success ? result.data : []);
  };

  useEffect(() => {
    if (selectedRepo[0] !== null) {
      fetchBranchesData(selectedRepo[0]);
    }
    return () => {
      setBranches([]);
    };
  }, [selectedRepo[0]]);

  return (
    <Drawer
      title={`Список веток репозитория ${selectedRepo[0]?.name}`}
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
