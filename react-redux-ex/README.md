This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

该项目里的两个src文件夹演示了一般状态管理以及通过store进行状态管理的不同
通过store进行状态管理的思想
1.向外暴露reducer函数  函数的主要思想 
    1. 每个reducer函数对应想要修改的某个状态
    2.函数传入两个参数 第一个是即将修改的状态 第二个是 对状态要进行的操作 action (含 type 以及 data 两个属性  type是指要对这个状态进行什么样的操作(增删改查) data 是指对状态修改时带过来的改变值)
    3.按照action.type的不同 根据action.data修改 state 并且进行返回
2.在主界面引入reducer
    1.根据上述reducer创建一个store对象
    2.将store对象带入子组件 并且进行页面的初始化渲染
    3.store对象要始终对渲染方法进行监听（不可缺少 否则页面状态不可实时修改）
3.组建当中修改store状态的方法
    1.通过props引入store
    2.this.props.xxxStore.getState()得到状态的值
    3.组件触发事件带过来参数data 通过 this.props.xxxSrore.dipatch({type:xxx, data: data})将数据处理交给store
总结 通过上述store可以省略在组件内操作state的过程 全部数据处理交给store