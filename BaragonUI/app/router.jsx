import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import Application from './components/common/Application';
import NotFound from './components/common/NotFound';
import StatusPage from './components/status/StatusPage';
import Services from './components/services/Services';
import ServiceDetail from './components/serviceDetail/ServiceDetail';
import Groups from './components/groups/Groups';
import GroupDetail from './components/groupDetail/GroupDetail';
import RequestDetail from './components/requestDetail/RequestDetail';
import Elbs from './components/elbs/Elbs';
import ElbDetail from './components/elbDetail/ElbDetail';
import Albs from './components/albs/Albs';
import TargetGroupDetail from './components/targetGroupDetail/TargetGroupDetail';
import AlbDetail from './components/albDetail/AlbDetail';

const getFilenameFromSplat = (splat) => _.last(splat.split('/'));

const routes = (
  <Route path="/" component={Application}>
    <IndexRoute component={StatusPage} title="Status" />
    <Route path="services" component={Services} title="Services" />
    <Route path="services/:serviceId" component={ServiceDetail} title={(params) => `${params.serviceId}`} />
    <Route path="groups" component={Groups} title="Groups" />
    <Route path="groups/:groupId" component={GroupDetail} title={(params) => `${params.groupId}`} />
    <Route path="requests/:requestId" component={RequestDetail} title={(params) => `${params.requestId}`} />
    <Route path="group/:groupId" component={GroupDetail} title={(params) => `${params.groupId}`} />
    <Route path="request/:requestId" component={RequestDetail} title={(params) => `${params.requestId}`} />
    <Route path="elbs" component={Elbs} title="Elbs" />
    <Route path="elbs/:loadBalancerName" component={ElbDetail} title={(params) => `${params.loadBalancerName}`} />
    <Route path="albs" component={Albs} title="ALBs" />
    <Route path="albs/target-groups/:targetGroupName" component={TargetGroupDetail} title={(params) => `${params.targetGroupName}`} />
    <Route path="albs/load-balancers/:albName" component={AlbDetail} title={(params) => `${params.albName}`} />
    <Route path="*" component={NotFound} title="Not Found" />
  </Route>);

const AppRouter = (props) => {
  const syncedHistory = syncHistoryWithStore(props.history, props.store);

  return (
    <Provider store={props.store}>
      <Router history={syncedHistory} routes={routes} />
    </Provider>
  );
};

AppRouter.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
