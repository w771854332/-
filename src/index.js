/*eslint-disable*/
import dva from 'dva';
import './utils/common';
import './index.less';
import createLoading from 'dva-loading';
// import vconsole from 'vconsole';

// const a = new vconsole();
// 1. Initialize
const app = dva(createLoading());

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user'));
app.model(require('./models/write'));
app.model(require('./models/comment'));
app.model(require('./models/chat'));
app.model(require('./models/dynamic'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
