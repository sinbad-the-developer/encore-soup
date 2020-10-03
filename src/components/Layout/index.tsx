import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { uiSelector } from 'store/ui';

import Header from 'components/Header';
import Footer from 'components/Footer';
import 'antd/dist/antd.css';
import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Theme from 'assets/styles/theme';
import { LayoutWrapper, MainWrapper } from './styles';
import { listProjects, projectSelector } from '../../store/project';

interface Props {
  children: React.ReactNode;
}

/**
 * Layout component
 *
 * @param {Props} props
 */
const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { themeMode } = useSelector(uiSelector);

  const dispatch = useDispatch();
  const { projects } = useSelector(projectSelector);

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  projects.subscribe((v) => console.log('win', v));

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles />
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
