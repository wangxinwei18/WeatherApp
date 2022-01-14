WeatherApp
learn node and use jenkins CI 需要把 pubilic/js/app.js 的 localhost 改为云服务器地址解决跨域范围访问的问题,例如（45.76.153.107 为云服务器 IP）:

const url = window.location.host; /_ 获取主机地址 _/

// http://45.76.153.107
fetch("http://" + url + "/weather?city=" + location).then(res => {
...

Jenkinsfile 修改如下（原始状态无执行权限）

stages {
stage('Build')
{
steps {
sh 'npm install --unsafe-perm'
}
}
stage('Deploy')
{
steps {
sh 'chmod +x ./scripts/stop-app.sh'
sh './scripts/stop-app.sh'
sh 'chmod +x ./scripts/start-app.sh'
sh './scripts/start-app.sh'
}
}
}

搭建服务器安装 jenkins Ubantuv 18

本地 linux 使用 ssh 连接远程（例）：
wxx@LAPTOP-9L3IFAVE:~$ ssh root@45.76.153.107
安装 Node
apt update
curl -sl https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
检查安装结果：
node -v
npm -v

安装 java
sudo apt update
sudo apt search openjdk
sudo apt install openjdk-11-jdk
检查安装结果：
javac -
java --version

安装 jenkins：
在 jenkins for linux 可以找到如下安装方式：
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins

安装完成选择 http://yourCloudServerIP:8080 进入 jenkins （yourCloudServerIP:你的云服务器 IP）
解锁 jenkins 查看： cat /var/lib/jenkins/secrets/initialAdminPassword
选择：
Install suggested plugins

首次需要新建一个用户和密码登录 jenkins
