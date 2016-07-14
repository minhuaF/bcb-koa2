import '../css/reset.css';
import '../css/common.css';
import '../css/main.css';
import '../css/project.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import AsyncProps from 'async-props';

const rootRoute = {
    component: 'div',
    childRoutes: [{
        path:'/',
        // component: require('./components/App.js'),
        indexRoute: {
            component: require('./components/Home.js')
        },
        childRoutes: [
            require('./routes/SignIn.js'),
            require('./routes/Home.js'),
            require('./routes/SignUp.js'),
            require('./routes/SignUpPsw.js'),
            require('./routes/Loading.js'),
            require('./routes/ProductList.js'),
            require('./routes/Mine.js'),
            require('./routes/CollectLove.js'),
            require('./routes/ProjectDetail.js'),
            require('./routes/ProjectDetailInfo.js'),
            require('./routes/BuySuccess.js'),
            require('./routes/InvestRecord.js'),
            require('./routes/BillRecord.js'),
            require('./routes/Security.js'),
            require('./routes/DayWelfareContainer.js'),
            {
                path: '*',
                component: require('./components/NotFound.js')
            }
        ]
    }]
};

render(
    <Router history={browserHistory} routes={rootRoute} render={(props) => 
         <AsyncProps {...props} renderLoading={() => 
             <div className="text-center">
                 加载中...
             </div>
         } />
     } />,
    document.getElementById("react-app")
);
