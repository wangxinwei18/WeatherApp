WeatherApp
learn node and use jenkins CI 需要把 pubilic/js/app.js 的 localhost 改为云服务器地址解决跨域范围访问问题,例如:

fetch("http://45.76.153.107:3000/weather?city=" + location).then(res => {

Jenkinsfile 修改如下（原始状态无执行权限）

stages { stage('Build') { steps { sh 'npm install --unsafe-perm' } } stage('Deploy') { steps { sh 'chmod +x ./scripts/stop-app.sh' sh './scripts/stop-app.sh' sh 'chmod +x ./scripts/start-app.sh' sh './scripts/start-app.sh' } } } }

test webhook 1st time
test in local to git
