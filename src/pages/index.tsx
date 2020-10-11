import React, { useEffect } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects, projectSelector } from '../store/project';
import { Card } from 'antd';
import { map } from 'rxjs/operators';
import { Meta } from 'antd/lib/list/Item';
import Async from 'components/Async';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(projectSelector);
  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  const projectCardList = projects.pipe(
    map((projects) =>
      projects.map((project, index) => (
        <Card key={index}>
          <Meta title={project.name} description={project.description} />
        </Card>
      ))
    )
  );

  return (
    <Layout>
      <SEO title="Home" />
      <Async>{projectCardList}</Async>
    </Layout>
  );
};

export default IndexPage;
